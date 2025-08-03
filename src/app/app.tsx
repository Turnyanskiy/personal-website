import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from './Home'
import Blog from './Blog'

export default function App() {
  return (
    <main className="font-mono bg-zinc-900 text-gray-300 min-h-screen">
      <div className="max-w-7xl mx-auto p-24">
        <h1 className="text-4xl font-bold text-white pb-3 "><span className="text-blue-400">L</span>uke <span className="text-blue-400">T</span>urnyanskiy</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<p>ABOUT PAGE</p>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<p>PROJECTS PAGE</p>} />
          <Route path="/contact" element={<p>CONTACT PAGE</p>} />
        </Routes>
      </div>
    </main>
  );
}

