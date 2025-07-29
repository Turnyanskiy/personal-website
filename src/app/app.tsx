import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">Hello React + TypeScript!</h1>
      <p className="mb-4">You clicked {count} times!</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Click Me
      </button>
    </main>
  );
}

