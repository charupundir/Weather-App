import React from "react";

function SearchBar({ search, setSearch, onSearch }) {
  return (
    <div className="flex gap-2 my-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter city"
        className="border border-gray-400 rounded px-3 py-2 flex-grow"
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
