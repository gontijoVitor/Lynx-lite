import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardStep , faPlay , faPause , faBackwardStep , faRepeat , faShuffle , faMaximize , faMinimize } from "@fortawesome/free-solid-svg-icons";

function Player() {
  const [count, setCount] = useState(0)

  var design = 1;

  if (design == 1){
    return (
      <>
      <div className='border border-1 p-4'>
          <p>Wonderful Everyday Original Soundtrack</p>
          <img className='m-2' alt='Album cover' src='../test-img.png' width="350px"></img>
          <h3>Yoru no Himawari</h3>
          <p>Matsumoto Fuminori</p>
          <div className='song-progress-bar d-inline'>
            <p>00:25</p>
              progress bar goes here
            <p>02:45</p>
          </div>
          
          <div className="d-inline">
{/*             <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faMinimize} /></button> */}
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faShuffle} /></button>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faBackwardStep} /></button>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faPause} /></button>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faForwardStep} /></button>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faRepeat} /></button>
          </div>
        </div>
      </>
    )
  }
  else if(design == 2){/* make a full inline design */
    return (
      <>
      <div className=''>
          <p>Album name</p>
          <img alt='Album cover' src='../test-img.png'></img>
          <h3>Song name</h3>
          <p>Artist</p>
          <div className='song-progress-bar'>{/* inline elements */}
            <p>Current time stamp</p>
              progress bar goes here
            <p>Full song time</p>
          </div>
          
          <div className="card">
            <button>alt design</button>
            <button>Shuffle</button>
            <button>Previous</button>
            <button>Pause</button>
            <button>Next</button>
            <button>Repeat</button>
          </div>
        </div>
      </>
    )
  }
}

export default Player;
