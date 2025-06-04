"use client";
import { useSearch } from "@/hooks/useSearch";
import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("multi");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<string | undefined>(undefined);

  const { data, isLoading, error } = useSearch(query, type, page, sortBy);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= (data?.pagination.total_pages || 1)) {
      setPage(newPage);
    }
  };

  return (
    <div>
      <h1>Search TMDB</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query"
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="multi">Multi</option>
          <option value="movie">Movie</option>
          <option value="tv">TV</option>
          <option value="person">Person</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value || undefined)}
        >
          <option value="">No Sort</option>
          <option value="popularity.desc">Popularity (Desc)</option>
          <option value="release_date.desc">Release Date (Desc)</option>
        </select>
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <ul>
            {data.results.map((result) => (
              <li key={result.id}>
                {result.title || result.name || result.original_name} (Type:{" "}
                {result.media_type})
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>
            <span>
              Page {page} of {data.pagination.total_pages}
            </span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === data.pagination.total_pages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
