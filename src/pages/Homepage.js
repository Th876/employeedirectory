import EmployeeList from "../components/EmployeeList";
import SearchBar from "../components/SearchBar";

export default function Homepage() {
    return(
        <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Employee Directory</h1>
            <SearchBar />
            <EmployeeList/>
        </div>
    )
}