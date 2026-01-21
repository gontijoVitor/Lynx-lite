import Album_Layout from '../components/album_layout';

function Albuns() {
    return (
        <div className='col' style={{marginTop:'100px', marginBottom:'180px'}}>
            <div className='border border-solid-1 rounded p-2 col-9 mx-auto mb-3'>
                <select className='form-select my-3 mx-auto w-25'>
                    <option selected>Select artist</option>
                    <option value="1">Matsumoto Fuminori</option>
                    <option value="2">Keichi Okabe</option>
                    <option value="3">Nobuo Uematsu</option>
                </select>
            </div>
            <div className="border border-solid-1 rounded col-9 mx-auto p-3 d-flex gap-3 flex-wrap">
                <Album_Layout />
                <Album_Layout />
                <Album_Layout /> 
            </div>
        </div>
    )
}

export default Albuns;