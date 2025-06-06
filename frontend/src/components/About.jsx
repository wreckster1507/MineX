import { ArrowRightIcon, ClipboardCheckIcon, ShieldCheckIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'; // Importing Lucide icon

import Navbar from './Navbar'

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="bg-white min-h-screen text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-center text-primary">About
                        <span className='text-indigo-600'> MineX</span>
                    </h1>

                    <p className="mb-8 text-lg leading-relaxed">
                        At MineX, we are committed to transforming coal mining operations through innovative digital solutions, aimed at enhancing productivity, safety, and compliance with industry regulations. Coal mining remains critical to India's energy security, and with a vision to meet the country's ambitious target of 1.5 billion tons of coal production by 2030, our platform addresses the need for a safer and more efficient operational approach.
                    </p>

                    <h2 className="text-2xl font-semibold mb-6 text-primary">Our Core Offerings</h2>

                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <ClipboardCheckIcon className="h-8 w-8 text-blue-700 mr-3" />
                                <h3 className="text-xl font-semibold text-gray-800">Digital Shift Handover Log System</h3>
                            </div>
                            <p className="text-gray-700">
                                We replace traditional manual, paper-based shift handover logs with a streamlined digital solution. This system allows for smooth transitions between shifts, providing real-time access to critical information and ensuring that safety concerns and operational updates are effectively communicated. By minimizing manual errors and lost time, we boost both productivity and safety.
                            </p>
                        </div>


                        <div className="bg-gradient-to-br from-green-50 to-teal-100 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <ShieldCheckIcon className="h-8 w-8 text-green-700 mr-3" />
                                <h3 className="text-xl font-semibold text-gray-800">Safety Management Plan (SMP) Digitalization</h3>
                            </div>
                            <p className="text-gray-700">
                                We have digitalized the Safety Management Plan (SMP) as per DGMS guidelines, enhancing risk management and ensuring compliance. Integrated with ERP systems, our solution enables comprehensive hazard identification, control, and monitoring mechanisms, while safeguarding sensitive data.
                            </p>
                        </div>

                    </div>
                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                    <div className="mt-12 text-center p-8 ">
                        <p className="text-lg mb-6 text-gray-800 leading-relaxed">
                            Through these solutions, MineX empowers mining operators, supervisors, and management teams to achieve higher operational efficiency, ensure safer workplaces, and contribute to India's energy goals.
                        </p>
                        <p className="text-lg font-semibold flex items-center justify-center text-blue-600 space-x-2">
                            <span>We are passionate about driving the future of coal mining with sustainable, secure, and innovative digital tools.</span>
                            {/* <ArrowRight className="h-5 w-5 text-blue-600" /> */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}