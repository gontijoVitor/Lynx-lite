import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Add() {
    return (
        <div className='col' style={{marginTop:'100px', marginBottom:'180px'}}>
            <div className='border border-solid-1 col-9 py-5 mx-auto d-flex justify-content-around'>
                <button className='m-2 pt-2 px-3 rounded bg-white border border-solid-1'>
                    <FontAwesomeIcon icon={faPlus} size='xl' />
                    <p>Add new album</p>
                </button>
                <button className='m-2 pt-2 px-3 rounded bg-white border border-solid-1'>
                    <FontAwesomeIcon icon={faPlus} size='xl' />
                    <p>Create new playlist</p>
                </button>
                <button className='m-2 pt-2 px-3 rounded bg-white border border-solid-1'>
                    <FontAwesomeIcon icon={faPlus} size='xl' />
                    <p>Add new song</p>
                </button>
            </div>
        </div>
    )
}

export default Add;