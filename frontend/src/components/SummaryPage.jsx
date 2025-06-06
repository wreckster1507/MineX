// import Navbar from './Navbar';


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const SummaryPage = () => {
//     const location = useLocation();
//     const { summary, importantData } = location.state || {};

//     const chartData = Object.entries(importantData).map(([key, value]) => ({
//         name: key.replace(/([A-Z])/g, ' $1'),
//         value: typeof value === 'number' ? value : 0
//     }));

//     return (
//         <div>
//             <Navbar />
//             <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//                 <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
//                     <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
//                         <h1 className="text-3xl font-bold text-white">Shift Log Summary</h1>
//                     </div>
//                     <div className="p-6">
//                         <div className="mb-8">
//                             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Summary</h2>
//                             <p className="text-gray-600 leading-relaxed">{summary}</p>
//                         </div>
//                         <div className="mb-8">
//                             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Important Data</h2>
//                             <div className="bg-gray-50 rounded-lg p-4">
//                                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     {Object.entries(importantData).map(([key, value]) => (
//                                         <li key={key} className="flex items-center">
//                                             <span className="w-4 h-4 bg-indigo-500 rounded-full mr-2"></span>
//                                             <span className="font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1')}:</span>
//                                             <span className="ml-2 text-gray-600">{value}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                         <div>
//                             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Visualization</h2>
//                             <div className="bg-gray-50 rounded-lg p-4" style={{ height: '400px' }}>
//                                 <ResponsiveContainer width="100%" height="100%">
//                                     <BarChart data={chartData}>
//                                         <CartesianGrid strokeDasharray="3 3" />
//                                         <XAxis dataKey="name" />
//                                         <YAxis />
//                                         <Tooltip />
//                                         <Legend />
//                                         <Bar dataKey="value" fill="#4F46E5" />
//                                     </BarChart>
//                                 </ResponsiveContainer>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SummaryPage;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Navbar from './Navbar';
import html2pdf from 'html2pdf.js';

// Define color palettes
const colors = ['#4F46E5', '#34D399', '#F59E0B', '#F43F5E', '#8B5CF6', '#EAB308'];
const pieColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#a4de6c', '#d0ed57'];

const SummaryPage = () => {
    const location = useLocation();
    const { summary, importantData } = location.state || {};
    console.log(summary)

    // Convert importantData to chart data
    const chartData = Object.entries(importantData).map(([key, value], index) => ({
        name: key.replace(/([A-Z])/g, ' $1'),
        value: typeof value === 'number' ? value : 0,
        color: colors[index % colors.length] // Cycle through colors
    }));

    // Create pie chart data with unique colors
    const pieData = chartData.map(item => ({
        name: item.name,
        value: item.value,
        fill: pieColors[chartData.indexOf(item) % pieColors.length]
    }));

    // Handle PDF download
    const handleDownload = () => {
        const element = document.getElementById('summary-page');
        html2pdf().from(element).save('summary-page.pdf');
    };

    return (
        <div>
            <Navbar />
            <div id="summary-page" className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                        <h1 className="text-3xl font-bold text-white">Shift Log Summary</h1>
                    </div>
                    <div className="p-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Summary</h2>
                            <p className="text-gray-600 leading-relaxed">{summary}</p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Important Data</h2>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Object.entries(importantData).map(([key, value], index) => (
                                        <li key={key} className="flex items-center">
                                            <span
                                                className="w-4 h-4 rounded-full mr-2"
                                                style={{ backgroundColor: colors[index % colors.length] }}
                                            ></span>
                                            <span className="font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                            <span className="ml-2 text-gray-600">{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Visualization</h2>
                            <div className="bg-gray-50 rounded-lg p-4" style={{ height: '400px' }}>
                                <ResponsiveContainer width="100%" height="50%">
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        {chartData.map((data, index) => (
                                            <Bar key={data.name} dataKey="value" fill={data.color} />
                                        ))}
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Work Distribution</h2>
                            <div className="bg-gray-50 rounded-lg p-4" style={{ height: '400px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Tooltip />
                                        <Legend />
                                        <Pie
                                            data={pieData}
                                            dataKey="value"
                                            nameKey="name"
                                            outerRadius={150}
                                            label
                                        >
                                            {pieData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.fill} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <button
                                onClick={handleDownload}
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                            >
                                Download as PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryPage;
