import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Blog from './Blog'
import Post from '../components/Post'
import Projects from './Projects'


export default function App() {
  return (
    <main className="font-mono bg-zinc-900 text-gray-300 min-h-screen">
      <div className="max-w-7xl mx-auto p-24">
        <h1 className="text-4xl font-bold text-white -mb-12"><span className="text-blue-400">L</span>uke <span className="text-blue-400">T</span>urnyanskiy</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Post id="home" />} />
          <Route path="/about" element={<Post id="about"/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Post id="contact"/>} />
        </Routes>
      </div>
    </main>
  );
}

