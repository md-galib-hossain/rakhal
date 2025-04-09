type Delegate<T> = {
    findMany: (args: any) => Promise<T[]>;
  };
interface Meta {
  page: number;
  limit: number;
  total: number;
}

class QueryBuilder<T> {
  private delegate: Delegate<T>;
  private args: any;
  private query: Record<string, unknown>;
  // store page & limit for meta
  private _page = 1;
  private _limit = 5;

  constructor(delegate: Delegate<T>, query: Record<string, unknown>) {
    this.delegate = delegate;
    this.args = {};
    this.query = query;
  }

  include(includeArgs: Record<string, unknown>) {
    this.args.include = includeArgs;
    return this;
  }

  search(searchableFields: string[]) {
    const term = this.query.searchTerm as string|undefined;
    if (!term) return this;
  
    const OR = searchableFields.map(field => {
      // list your enum fields explicitly
      const enumFields = ['breedType','gender','breedingStatus'];
      if (enumFields.includes(field)) {
        return { [field]: { equals: term.toUpperCase() } };
      }
      // assume string
      return { [field]: { contains: term, mode: 'insensitive' } };
    });
  
    this.args.where = { ...this.args.where, OR };
    return this;
  }
  

  filter() {
    const queryObj = { ...this.query };
    const excludeFields = ["searchTerm", "sort", "limit", "page", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    this.args.where = { ...this.args.where, ...queryObj };
    return this;
  }

  sort() {
    const sort = this.query.sort as string | undefined;
    if (sort) {
      const sortFields = sort.split(',').map((field) =>
        field.startsWith('-')
          ? { [field.slice(1)]: 'desc' }
          : { [field]: 'asc' }
      );
      this.args.orderBy = sortFields;
    } else {
      this.args.orderBy = [{ createdAt: 'desc' }];
    }
    return this;
  }

  paginate() {
    const page = Number(this.query.page) || 1;
    const limit = Number(this.query.limit) || 5;
    this._page = page;
    this._limit = limit;

    this.args.skip = (page - 1) * limit;
    this.args.take = limit;
    return this;
  }

  fields() {
    const fieldsParam = this.query.fields;
    if (fieldsParam && typeof fieldsParam === 'string') {
      const fields = fieldsParam.split(',').map((field) => field.trim());
  
      if (fields.length > 0) {
        // If select is used, remove include to avoid Prisma conflict
        delete this.args.include;
  
        this.args.select = fields.reduce((acc: Record<string, boolean>, field) => {
          acc[field] = true;
          return acc;
        }, {});
      }
    }
    return this;
  }
  
  

  async execute(): Promise<T[]> {
    return this.delegate.findMany(this.args);
  }

  /**
   * Runs the data query and a matching count query, then returns { meta, data }.
   */
  async executeWithMeta(): Promise<{ meta: Meta; data: T[] }> {
    // 1) Build a countArgs object by cloning args and removing skip/take/orderBy/include/select
    const { skip, take, orderBy, include, select, ...countArgs } = this.args;

    // 2) Run both queries in parallel
    const [data, total] = await Promise.all([
      this.delegate.findMany(this.args),
      (this.delegate as any).count(countArgs),
    ]);

    return {
      meta: {
        page: this._page,
        limit: this._limit,
        total,
      },
      data,
    };
  }
}

export default QueryBuilder;
export type { Meta };