import { Routes, Route } from 'react-router-dom';
import Homepage from './routes/Homepage'
import CvPage from './routes/CvPage';
import ErrorPage from './routes/ErrorPage';


function App() {
 

  return (
    <div className="min-h-screen bg-primary">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
