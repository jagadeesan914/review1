const JobFilters = () => (
  <div className="flex flex-wrap items-center gap-4 mb-6">
    <input
      type="text"
      placeholder="Search something here..."
      className="px-4 py-2 border rounded w-full md:w-1/2"
    />
    <button className="bg-green-600 text-white px-4 py-2 rounded">FIND</button>
    <select className="border px-2 py-2 rounded">
      <option value="">Newest</option>
      <option value="">Oldest</option>
    </select>
  </div>
);
export default JobFilters;
