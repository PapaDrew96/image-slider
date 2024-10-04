import React from 'react';
import Slider from './components/Slider';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen"> {/* Center the slider vertically and horizontally */}
      <div className="w-full max-w-4xl"> {/* Make the slider container wider */}
        <Slider />
      </div>
    </div>
  );
}

export default App;
