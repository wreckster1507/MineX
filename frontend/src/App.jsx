import { BrowserRouter as Router, Route, Routes, redirect } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ShiftLogForm from './components/ShiftLogForm';
import ShiftLogList from './components/ShiftLogList';
import SummaryPage from './components/SummaryPage';
import About from './components/About';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';

function App() {



  return (


    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shiftLogForm" element={<ShiftLogForm />} />
        <Route path="/shiftLogList" element={<ShiftLogList />} />
        <Route path="/summary/:logId" element={<SummaryPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>

  );
}

export default App;
