/* eslint-disable @typescript-eslint/no-explicit-any */
const cache = new Map();
const CACHE_DURATION = 60 * 60 * 1000;

export const getCachedData = (key: string) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

export const setCachedData = (key: string, data: any) => {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
};
