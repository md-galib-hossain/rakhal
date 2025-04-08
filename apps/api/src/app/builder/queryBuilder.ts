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
    // … your existing search impl …
    return this;
  }

  filter() {
    // … your existing filter impl …
    return this;
  }

  sort() {
    // … your existing sort impl …
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
    // … your existing fields impl …
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