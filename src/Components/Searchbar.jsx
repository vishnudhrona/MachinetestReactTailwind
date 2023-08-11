
const Searchbar = () => {
  return (
    <div>
      <div className="flex items-center rounded-md p-1">
      <input
        type="text"
        placeholder="Search..."
        className="px-2 py-1 outline-none w-32 sm:w-48"
      />
      <button className="bg-blue-500 text-white rounded-md px-2 py-1 ml-1">
        Search
      </button>
    </div>
    </div>
  )
}

export default Searchbar
