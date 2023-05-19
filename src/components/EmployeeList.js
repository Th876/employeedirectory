import employees from "../Data";
import { Link } from 'react-router-dom';

export default function EmployeeList() {

return (
    
<div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
{employees.map((employee) => {
    return (
        <div className="flow-root" key={employee.id}>
        <ul role="list" className="bg-white p-2 border-b-2 border-gray-100">
            <li className="py-3 sm:py-4">
                {/* wrap below in a dynamic link */}
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-20 h-auto rounded-full" src={employee.image} alt={employee.name}/>
                    </div>

                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white"><Link to={`/employees/${employee.id}`}>
                            {employee.name}</Link>
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {employee.position}
                        </p>
                    </div>
                </div>
            </li>
        </ul>
   </div>
    )
})
}
</div>

)
}