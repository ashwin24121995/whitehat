/**
 * Simple in-memory cache service for Cricket API responses
 * Reduces API calls and improves performance
 */

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

class CacheService {
  private cache: Map<string, CacheEntry<any>> = new Map();

  /**
   * Get cached data if it exists and hasn't expired
   */
  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    const now = Date.now();
    const age = now - entry.timestamp;

    // Check if cache has expired
    if (age > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data as T;
  }

  /**
   * Set cache data with TTL
   */
  set<T>(key: string, data: T, ttl: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }

  /**
   * Delete specific cache entry
   */
  delete(key: string): void {
    this.cache.delete(key);
  }

  /**
   * Clear all cache
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Get cache statistics
   */
  getStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    };
  }
}

// Singleton instance
export const cacheService = new CacheService();

// Cache TTL constants (in milliseconds)
export const CACHE_TTL = {
  LIVE_MATCHES: 30 * 1000,      // 30 seconds for live matches
  UPCOMING_MATCHES: 5 * 60 * 1000, // 5 minutes for upcoming matches
  COMPLETED_MATCHES: 60 * 60 * 1000, // 1 hour for completed matches
  MATCH_SQUAD: 10 * 60 * 1000,   // 10 minutes for squad data
  MATCH_POINTS: 2 * 60 * 1000,   // 2 minutes for live match points
};
