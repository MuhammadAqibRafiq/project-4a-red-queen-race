import React,{useRef, useEffect} from 'react';
import './App.css';
import bg_sky from './Animation/bg_sky.jpg'
import bg_earth from './Animation/bg_earth.jpg'
import tree from './Animation/tree.png'
import rook_small from './Animation/rook_small.png'
import pawn from './Animation/pawn.png'
import small_tree from './Animation/small_tree.png'
import knight from './Animation/knight.png'
import rook from './Animation/rook.png'
import bush from './Animation/bush.png'
import pawn_small from './Animation/pawn_small.png'
import alicerun from './Animation/alicerun.gif'
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
  // let alice = useRef(null);
  let knightRef = useRef(null);

  const { ref } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(0px)' },
      { transform: 'translateX(-1000px)' },
      { transform: 'translateX(800px)' },
      { transform: 'translateX(-1000)' }
    ],
    timing: {
      duration: 8000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
    },
  });

  useEffect(() => {
    knightRef.current.animate([
      { transform: 'translateX(100%)' },
      { transform: 'translateX(0%)' },
      { transform: 'translateX(-100%)' }
    ], {
      duration: 5000,
      iterations: Infinity, 
    });

  }, [])


  return (
    <div>
        <div className='text'>
          <h4>Red Queen's Race</h4>
        </div>

        <div className='main'>
        <div>
        <img src={bg_sky} alt="bg_sky" id="bg_sky" />
        <img src={bg_sky} alt="bg_sky" id="bg_sky" />
        <img src={bg_sky} alt="bg_sky" id="bg_sky" />
        <img src={bg_sky} alt="bg_sky" id="bg_sky" />
        </div>

        <div>
        <img src={bg_earth} alt="bg_earth" id="bg_earth" />
        <img src={alicerun} alt="alicerun" id="alicerun" />
        
        </div>

        <div ref={ref} id="images">
        <img src={tree} alt="tree" id="tree" />
        </div>

        <div ref={knightRef} >
        <img src={knight} alt="knight" id="knight" />
        <img src={rook} alt="rook" id="rook" />
        </div>

        <div>
        <img  src={bush} alt="bush" id="bush" />
        <img src={pawn} alt="pawn" id="pawn" />
        <img src={pawn_small} alt="pawn_small" id="pawn_small" />
        <img  src={rook_small} alt="rook_small" id="rook_small" />
        <img  src={small_tree} alt="small_tree" id="small_tree" />
        </div>

        </div>

    </div>
  );
}

export default App;
