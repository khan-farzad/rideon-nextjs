import { FaSearchLocation } from "react-icons/fa"

const SearchBar = () => {
  return (
    <div className="shadow-md w-full flex justify-around bg-secondary items-center rounded-md">
        <input className="bg-transparent placeholder:text-tertiary grow py-2 px-4 rounded-lg outline-none text-lg" placeholder="Search for destination"/>
        <FaSearchLocation className="text-this-blue text-xl mr-4"/>
    </div>
  )
}

export default SearchBar