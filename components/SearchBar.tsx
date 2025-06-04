/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchMovies = async () => {
      if (query.length < 3) return;

      setLoading(true);
      try {
        const response = await fetch(
          `/api/search?query=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        setResults(data.results || []);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchMovies, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 pl-10 border rounded-lg"
      />
      <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

      {loading && <div className="absolute top-full mt-1 p-2">Loading...</div>}

      {results.length > 0 && (
        <div className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {results.map((item: any) => (
            <div key={item.id} className="p-2 hover:bg-gray-100 cursor-pointer">
              {item.title || item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
