import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Lunar Music Player</h1>
      <div className="bg-gray-800 p-6 rounded-lg">
        <p>Count: {count}</p>
        <button onClick={() => setCount((count) => count + 1)} className="bg-blue-600 px-4 py-2 rounded">
          Click me!
        </button>
        <p className="mt-4">Drag an MP3 here soon for playback! 🎵</p>
      </div>
    </div>
  );
}

export default App;
