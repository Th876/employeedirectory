import MoreDetails from "./MoreDetails.js"
import { Link } from "react-router-dom";


export default function EmployeePage() {
    return(
        <div>
            <div className="employee-container-all"> 

                <div className="employee-container1">
                    <Link to={"/"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 svg5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                    </Link>
                </div>
                <div className="employee-container2">
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white employee-page">Employee</h1>
                </div>
                </div>
        <MoreDetails />
        </div>
    )
}