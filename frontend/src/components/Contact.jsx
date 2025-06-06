import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import Navbar from './Navbar';

export default function Contact() {
    return (
        <div>
            <Navbar />
            <div className="bg-white min-h-screen text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-center text-primary">
                        Contact <span className='text-indigo-600'>Us</span>
                    </h1>

                    <div className="gap-8">
                        {/* Contact Information */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
                            <h2 className="text-2xl font-semibold mb-6 text-primary">Our Team</h2>
                            <div className="space-y-6">
                                {/* Team Member 1 */}
                                <div className="flex items-start space-x-4">
                                    <MailIcon className="h-6 w-6 text-blue-600" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Sindhu</h3>
                                        <p className="text-gray-600">2211CS010539@mallareddyuniversity.ac.in</p>
                                    </div>
                                </div>
                                {/* Team Member 2 */}
                                <div className="flex items-start space-x-4">
                                    <MailIcon className="h-6 w-6 text-violet-600" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Sarthak</h3>
                                        <p className="text-gray-600">2211CS010521@mallareddyuniversity.ac.in</p>
                                    </div>
                                </div>
                                {/* Team Member 3 */}
                                <div className="flex items-start space-x-4">
                                    <MailIcon className="h-6 w-6 text-green-600" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Varun</h3>
                                        <p className="text-gray-600">2211CS010500@mallareddyuniversity.ac.in</p>
                                    </div>
                                </div>
                                {/* Team Member 4 */}
                                <div className="flex items-start space-x-4">
                                    <MailIcon className="h-6 w-6 text-red-600" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Pranathi</h3>
                                        <p className="text-gray-600">2211CS010485@mallareddyuniversity.ac.in</p>
                                    </div>
                                </div>
                                {/* Team Member 5 */}
                                <div className="flex items-start space-x-4">
                                    <MailIcon className="h-6 w-6 text-yellow-600" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Akash</h3>
                                        <p className="text-gray-600">2211CS010453@mallareddyuniversity.ac.in</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <MailIcon className="h-6 w-6 text-grey-600" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Reshmi</h3>
                                        <p className="text-gray-600">2211CS010498@mallareddyuniversity.ac.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
