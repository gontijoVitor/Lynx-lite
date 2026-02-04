import SongRow from '../components/song_row';

function Songs() {
    return (
        <div className="col" style={{ marginTop: '100px', marginBottom: '180px' }}>

            {/* ======================
                PAGE HEADER
            ====================== */}
            <div className="col-9 mx-auto mb-4">
                <h2 className="fw-bold mb-1">Songs</h2>
                <p className="text-muted mb-0">
                    All tracks from your library
                </p>
            </div>

            {/* ======================
                FILTERS
            ====================== */}
            <div className="border border-solid-1 rounded p-3 col-9 mx-auto mb-4 d-flex align-items-center gap-3 flex-wrap">

                <select className="form-select w-auto">
                    <option defaultValue>Select artist</option>
                    <option value="1">Matsumoto Fuminori</option>
                    <option value="2">Keiichi Okabe</option>
                    <option value="3">Nobuo Uematsu</option>
                </select>

                <select className="form-select w-auto">
                    <option defaultValue>Select album</option>
                    <option value="1">Wonderful Everyday OST</option>
                    <option value="2">NieR Automata</option>
                </select>

                <select className="form-select w-auto">
                    <option defaultValue>Sort by</option>
                    <option value="title">Alphabetical (A–Z)</option>
                    <option value="duration">Duration</option>
                    <option value="plays">Times played</option>
                    <option value="release_date">Release date</option>
                    <option value="created_at">Date added</option>
                </select>

                <div className="ms-auto text-muted">
                    128 songs
                </div>

            </div>

            {/* ======================
                SONG LIST
            ====================== */}
            <div className="border border-solid-1 rounded col-9 mx-auto p-3">

                <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                        <tr>
                            <th style={{ width: '40px' }}>#</th>
                            <th>Song</th>
                            <th>Album</th>
                            <th className="text-end">Duration</th>
                            <th className="text-end">Plays</th>
                        </tr>
                    </thead>

                    <tbody>

                        <SongRow
                            index={1}
                            title="Yoru no Himawari"
                            artist="Matsumoto Fuminori"
                            album="Wonderful Everyday OST"
                            duration="3:12"
                            plays={42}
                        />

                        <SongRow
                            index={2}
                            title="City Ruins"
                            artist="Keiichi Okabe"
                            album="NieR Automata"
                            duration="4:20"
                            plays={37}
                        />

                        <SongRow
                            index={3}
                            title="Weight of the World"
                            artist="Keiichi Okabe"
                            album="NieR Automata"
                            duration="5:38"
                            plays={29}
                        />

                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Songs;
