

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Menu, X } from 'lucide-react'

// function MountainIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//         </svg>
//     )
// }

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false)

//     const toggleMenu = () => setIsOpen(!isOpen)

//     return (
//         <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     <Link to="/" className="flex items-center space-x-2 group">
//                         <MountainIcon className="h-8 w-8 text-white transform group-hover:scale-110 transition-transform duration-200" />
//                         <span className="font-bold text-xl tracking-tight">MineX</span>
//                     </Link>
//                     <nav className="hidden md:flex space-x-8">
//                         {['ShiftLogForm', 'ShiftLogList', 'About', 'Contact'].map((item) => (
//                             <Link
//                                 key={item}
//                                 to={`/${item.toLowerCase()}`}
//                                 className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//                             >
//                                 {item}
//                             </Link>
//                         ))}
//                     </nav>
//                     <div className="hidden md:block">
//                         <Link
//                             to="/login"
//                             className="bg-white text-blue-600 hover:bg-blue-100 hover:text-blue-800 px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200 shadow-md hover:shadow-lg"
//                         >
//                             Login
//                         </Link>
//                     </div>
//                     <div className="md:hidden flex items-center">
//                         <button
//                             onClick={toggleMenu}
//                             className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             {isOpen && (
//                 <div className="md:hidden">
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                         {['ShiftLogForm', 'ShiftLogList', 'About', 'Contact'].map((item) => (
//                             <Link
//                                 key={item}
//                                 to={`/${item.toLowerCase()}`}
//                                 className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                                 onClick={toggleMenu}
//                             >
//                                 {item}
//                             </Link>
//                         ))}
//                         <Link
//                             to="/login"
//                             className="bg-white text-blue-600 hover:bg-blue-100 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium"
//                             onClick={toggleMenu}
//                         >
//                             Login
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </header>
//     )
// }

// export default Navbar


import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <header className="bg-gray-50 text-gray-800 shadow-md font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <MountainIcon className="h-8 w-8 text-blue-600 transform group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-bold text-xl tracking-tight text-blue-600">MineX</span>
                    </Link>
                    <nav className="hidden md:flex space-x-8">
                        {['ShiftLogForm', 'ShiftLogList', 'About', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase()}`}
                                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden md:block">
                        <Link
                            to="/login"
                            className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            Login
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {['ShiftLogForm', 'ShiftLogList', 'About', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase()}`}
                                className="text-gray-600 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                                onClick={toggleMenu}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            to="/login"
                            className="bg-blue-600 text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                            onClick={toggleMenu}
                        >
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar