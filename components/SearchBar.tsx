const SearchBar = () => {
    return(
        <div className="max-w-md mx-auto py-12">
        <input type="text" placeholder="Search a currency"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
        text-center text-2xl font-semibold" />
        </div>
    )
}

export default SearchBar