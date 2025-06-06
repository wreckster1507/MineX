

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from './Navbar';
import BrightButton from '../buttons/BrightButton';
import Loader from '../loader/Loader';



// Placeholder components to replace shadcn/ui
const Button = ({ children, variant, className, ...props }) => (
    <button
        className={`px-4 py-2 rounded-md ${variant === 'outline'
            ? 'border border-blue-500 text-blue-500 hover:bg-blue-50'
            : 'bg-blue-500 text-white hover:bg-blue-600'
            } ${className}`}
        {...props}
    >
        {children}
    </button>
);

const Input = ({ className, ...props }) => (
    <input
        className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
    />
);

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
            setLoading(false); // Stop loading after 2 seconds
        }, 500);

        return () => clearTimeout(timer); // Cleanup on component unmount
    }, []);

    if (loading) {
        return (
            // <div className="flex justify-center items-center h-screen">
            //     <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            // </div>
            <div>
                <div className="flex justify-center items-center h-screen">
                    <Loader />
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <section className="bg-gray-50 py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Welcome to <span className='text-indigo-600'>MineX</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                            Powering Safer, Smarter Coal Mining for India's Future.
                        </p>
                        <div className="mt-10 flex justify-center gap-4">
                            {/* <Button>Get Started</Button> */}


                            <Link to='/shiftlogform'> <BrightButton /></Link>


                            {/* <Link to='/about'>
                                <Button variant="outline">Get More</Button>
                            </Link> */}
                        </div>
                    </div>
                </section>

                <section id="features" className="py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Our <span className='text-orange-400'>Features</span></h2>
                        <div className="grid gap-8 md:grid-cols-3">

                            {/* Feature 1: Easy Integration */}
                            <div className="bg-gradient-to-br from-purple-50 to-indigo-200 rounded-xl shadow-lg p-6 max-w-sm mx-auto transition-all duration-300 hover:shadow-xl hover:scale-105">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-white rounded-full p-3 mb-6 shadow-md">
                                        <CheckCircle className="h-10 w-10 text-purple-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-gray-800">Easy Integration</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Seamlessly integrate our solutions into your existing systems.
                                    </p>
                                </div>
                                {/* <div className="mt-6 pt-4 border-t border-purple-200">
                                    <a href="#" className="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-300">
                                        Learn More →
                                    </a>
                                </div> */}
                            </div>

                            {/* Feature 2: Scalable Architecture */}
                            <div className="bg-gradient-to-br from-teal-50 to-cyan-200 rounded-xl shadow-lg p-6 max-w-sm mx-auto transition-all duration-300 hover:shadow-xl hover:scale-105">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-white rounded-full p-3 mb-6 shadow-md">
                                        <CheckCircle className="h-10 w-10 text-teal-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-gray-800">Scalable Architecture</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Grow your business with our scalable and flexible solutions.
                                    </p>
                                </div>
                                {/* <div className="mt-6 pt-4 border-t border-teal-200">
                                    <a href="#" className="text-teal-600 hover:text-teal-800 font-medium transition-colors duration-300">
                                        Learn More →
                                    </a>
                                </div> */}
                            </div>

                            {/* Feature 3: Digital Shift Handover Logs */}
                            <div className="bg-gradient-to-br from-pink-50 to-red-200 rounded-xl shadow-lg p-6 max-w-sm mx-auto transition-all duration-300 hover:shadow-xl hover:scale-105">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-white rounded-full p-3 mb-6 shadow-md">
                                        <CheckCircle className="h-10 w-10 text-pink-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-gray-800">Digital Shift Handover Logs</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Seamless digital shift handover system for smoother transitions and real-time access to operational data.
                                    </p>
                                </div>
                                {/* <div className="mt-6 pt-4 border-t border-pink-200">
                                    <a href="#" className="text-pink-600 hover:text-pink-800 font-medium transition-colors duration-300">
                                        Learn More →
                                    </a>
                                </div> */}
                            </div>

                            {/* Feature 4: Data Security */}
                            <div className="bg-gradient-to-br from-gray-50 to-blue-200 rounded-xl shadow-lg p-6 max-w-sm mx-auto transition-all duration-300 hover:shadow-xl hover:scale-105">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-white rounded-full p-3 mb-6 shadow-md">
                                        <CheckCircle className="h-10 w-10 text-gray-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-gray-800">Data Security</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Secure handling and storage of sensitive data, ensuring your operations meet the highest standards of security.
                                    </p>
                                </div>
                                {/* <div className="mt-6 pt-4 border-t border-gray-200">
                                    <a href="#" className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300">
                                        Learn More →
                                    </a>
                                </div> */}
                            </div>

                            {/* Feature 5: Real-Time Monitoring */}
                            <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-xl shadow-lg p-6 max-w-sm mx-auto transition-all duration-300 hover:shadow-xl hover:scale-105">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-white rounded-full p-3 mb-6 shadow-md">
                                        <CheckCircle className="h-10 w-10 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-gray-800">Real-Time Monitoring</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Monitor operations in real-time with our advanced analytics and dashboard tools.
                                    </p>
                                </div>
                                {/* <div className="mt-6 pt-4 border-t border-green-200">
                                    <a href="#" className="text-green-600 hover:text-green-800 font-medium transition-colors duration-300">
                                        Learn More →
                                    </a>
                                </div> */}
                            </div>

                            {/* Feature 6: Comprehensive Reporting */}
                            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl shadow-lg p-6 max-w-sm mx-auto transition-all duration-300 hover:shadow-xl hover:scale-105">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-white rounded-full p-3 mb-6 shadow-md">
                                        <CheckCircle className="h-10 w-10 text-yellow-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-gray-800">Comprehensive Reporting</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Generate detailed reports and insights to drive strategic decision-making.
                                    </p>
                                </div>
                                {/* <div className="mt-6 pt-4 border-t border-yellow-200">
                                    <a href="#" className="text-yellow-600 hover:text-yellow-800 font-medium transition-colors duration-300">
                                        Learn More →
                                    </a>
                                </div> */}
                            </div>

                        </div>
                    </div>



                </section>
            </main>
            <footer className="bg-white shadow-sm mt-auto">
                <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} MineX Inc. All rights reserved.
                    </p>
                    <nav className="flex gap-4 mt-4 sm:mt-0">
                        <Link to="/terms" className="text-sm text-gray-500 hover:text-blue-500">Terms of Service</Link>
                        <Link to="/privacy" className="text-sm text-gray-500 hover:text-blue-500">Privacy</Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
