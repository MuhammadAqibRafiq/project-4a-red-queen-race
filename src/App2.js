import React from 'react';
import './App.css';
import useWebAnimations from '@wellyshen/use-web-animations';

function App() {
  // const element = useRef(null);

  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
    { transform: "translate(0,0)" }, 
    { transform: "translate(100%,0)" }
],
    timing: {
      duration: 6000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      easing: 'ease-in-out', // Use a fancy timing function
    },
  });

  return (
    <div>
      <div className='target' ref={ref}>hello</div>
      Current animation state: {playState}
      <button onClick={() => getAnimation().pause()}>Pause</button>
      <button onClick={() => getAnimation().play()}>Play</button>
    </div>
  );
}

export default App;

