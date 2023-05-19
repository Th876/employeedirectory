import { useParams } from 'react-router-dom';
import employees from '../Data';


function MoreDetails() {
    const { id } = useParams();
    const employee = employees.find((employee) => employee.id === parseInt(id));

    return (
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flow-root" key={employee.id}>
                <ul role="list">
                    <li className="py-3 sm:py-4 bg-white p-2 border-b-2 border-gray-100">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-20 h-auto rounded-full" src={employee.image} alt={employee.name}/>
                            </div>
                        
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{employee.name}</p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">{employee.position}</p>
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4 bg-white p-2 border-b-2 border-gray-100">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Office</p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">{employee.officenumber}</p>
                        </div>
                    </li>

                    <li className="py-3 sm:py-4 bg-white p-2 border-b-2 border-gray-100">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Mobile</p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">{employee.mobilenumber}</p>
                        </div>
                    </li>

                    <li className="py-3 sm:py-4 bg-white p-2 border-b-2 border-gray-100">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">SMS</p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">{employee.smsnumber}</p>
                        </div>
                    </li>

                    <li className="py-3 sm:py-4 bg-white p-2 border-b-2 border-gray-100">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Email</p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">{employee.email}</p>
                        </div>
                    </li>
                </ul>
            </div>
    </div>)
}

export default MoreDetails;