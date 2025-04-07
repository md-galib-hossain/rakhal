import redis from './index';

type CacheOptions = {
  key: string;
  ttl?: number; 
  fetcher: () => Promise<any>;
};

export async function getOrSetCache<T>({ key, ttl = 3600, fetcher }: CacheOptions): Promise<T> {
  const cached = await redis.get(key);

  if (cached) {
    console.log(`Cache hit for key: ${key}`); 
    return JSON.parse(cached) as T;
  }
  console.log(`Cache miss for key: ${key}`);

  const data = await fetcher();

  await redis.set(key, JSON.stringify(data), 'EX', ttl);

  return data;
}
