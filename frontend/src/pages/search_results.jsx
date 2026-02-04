function Search() {
    return (
        <div className="col" style={{ marginTop: '100px', marginBottom: '180px' }}>

            {/* ======================
                SEARCH FILTERS / TABS
            ====================== */}
            <div className="border border-solid-1 rounded p-3 col-9 mx-auto mb-4 d-flex gap-2 flex-wrap">

                <button className="btn btn-light btn-sm">All</button>
                <button className="btn btn-outline-light btn-sm">Songs</button>
                <button className="btn btn-outline-light btn-sm">Albums</button>
                <button className="btn btn-outline-light btn-sm">Playlists</button>
                <button className="btn btn-outline-light btn-sm">Artists</button>

            </div>

            {/* ======================
                SONGS
            ====================== */}
            <div className="border border-solid-1 rounded col-9 mx-auto p-3 mb-4">

                <h5 className="fw-bold mb-3">Songs</h5>

                <table className="table table-hover align-middle mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th className="text-end">Duration</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>City Ruins (Rays of Light)</td>
                            <td>岡部啓一</td>
                            <td>NieR:Automata OST</td>
                            <td className="text-end">6:22</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Song of the Ancients / Devola</td>
                            <td>SQUARE ENIX MUSIC</td>
                            <td>NieR Replicant OST</td>
                            <td className="text-end">3:04</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            {/* ======================
                ARTISTS
            ====================== */}
            <div className="border border-solid-1 rounded col-9 mx-auto p-3 mb-4">

                <h5 className="fw-bold mb-3">Artists</h5>

                <div className="d-flex gap-4 flex-wrap">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="text-center">
                            <div
                                className="rounded-circle bg-secondary mx-auto"
                                style={{ width: 96, height: 96 }}
                            />
                            <div className="mt-2 fw-semibold">
                                Nier
                            </div>
                            <small className="text-muted">
                                Artist
                            </small>
                        </div>
                    ))}
                </div>

            </div>

            {/* ======================
                ALBUMS
            ====================== */}
            <div className="border border-solid-1 rounded col-9 mx-auto p-3 mb-4">

                <h5 className="fw-bold mb-3">Albums</h5>

                <div className="row g-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="col-6 col-md-3 col-lg-2">
                            <div
                                className="bg-secondary rounded mb-2"
                                style={{ aspectRatio: '1 / 1' }}
                            />
                            <div className="fw-semibold">
                                NieR:Automata OST
                            </div>
                            <small className="text-muted">
                                Album
                            </small>
                        </div>
                    ))}
                </div>

            </div>

            {/* ======================
                PLAYLISTS
            ====================== */}
            <div className="border border-solid-1 rounded col-9 mx-auto p-3">

                <h5 className="fw-bold mb-3">Playlists</h5>

                <table className="table table-hover align-middle mb-0">
                    <thead>
                        <tr>
                            <th>Playlist</th>
                            <th>Creator</th>
                            <th>Songs</th>
                            <th>Plays</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Animelike</td>
                            <td>Vítor</td>
                            <td>43</td>
                            <td>120</td>
                        </tr>

                        <tr>
                            <td>Late Night OSTs</td>
                            <td>Admin</td>
                            <td>32</td>
                            <td>75</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default Search;
