import Album_Layout from '../components/album_layout';

function Albuns() {
    return (
        <div className="col" style={{ marginTop: '100px', marginBottom: '180px' }}>

            {/* ======================
                PAGE HEADER
            ====================== */}
            <div className="col-9 mx-auto mb-4">
                <h2 className="fw-bold mb-1">Albums</h2>
                <p className="text-muted mb-0">
                    Browse albums by your favorite artists
                </p>
            </div>

            {/* ======================
                FILTERS
            ====================== */}
            <div className="border border-solid-1 rounded p-3 col-9 mx-auto mb-4 d-flex align-items-center gap-3 flex-wrap">

                <select className="form-select w-auto">
                    <option defaultValue>Select artist</option>
                    <option value="1">Matsumoto Fuminori</option>
                    <option value="2">Keichi Okabe</option>
                    <option value="3">Nobuo Uematsu</option>
                </select>

                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search album..."
                />

                <div className="ms-auto text-muted">
                    12 albums
                </div>

            </div>

            {/* ======================
                ALBUM GRID
            ====================== */}
            <div className="border border-solid-1 rounded col-9 mx-auto p-4">

                <div className="row g-4">

                    <div className="col-6 col-md-4 col-lg-3">
                        <Album_Layout />
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Album_Layout />
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Album_Layout />
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <Album_Layout />
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Albuns;
