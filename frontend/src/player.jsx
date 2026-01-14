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
          <img className='m-2 img-thumbnail' alt='Album cover' src='../test-img.png' width="350px"></img>
          <h3>Yoru no Himawari</h3>
          <p>Matsumoto Fuminori</p>
          <div className='song-progress-bar d-inline'>
            <div className='song-progress-bar'>{/* inline elements */}
              <p className='my-2'>0:32 * progress bar goes here * 2:46</p>
            </div>
          </div>
          
          <div className="d-inline">
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faShuffle} /></button>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faBackwardStep} /></button>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faPause} /></button>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faForwardStep} /></button>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faRepeat} /></button>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faMinimize} /></button>
          </div>
        </div>
      </>
    )
  }
  else if(design == 2){/* make a full inline design */
    return (
      <>
        <div className='border border-solid-1 row p-2 py-3'>
          <div className='col-2'>
              <img className="img-thumbnail" alt='Album cover' src='../test-img.png'></img>
          </div>
          <div className='col-6 my-2'>
            <p className='m-0'>Subarashiki Hibi Official Soundtrack</p>
            <h3 className='m-0'>Yoru no Himawari</h3>
            <p className='m-0'>szak</p>
          </div>
          <div className="col-4 d-inline">
            <div className='song-progress-bar'>{/* inline elements */}
              <p className='my-2'>0:32 * progress bar goes here * 2:46</p>
            </div>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faShuffle} /></button>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faBackwardStep} /></button>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faPause} /></button>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faForwardStep} /></button>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faRepeat} /></button>
            <button className='p-2 m-1 border rounded'><FontAwesomeIcon icon={faMinimize} /></button>
          </div>
        </div>
      </>
    )
  }
}

export default Player;
