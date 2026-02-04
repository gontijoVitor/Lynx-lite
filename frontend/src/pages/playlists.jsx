function Playlists() {
    return (
        <div className="col" style={{ marginTop: '100px', marginBottom: '180px' }}>

            {/* ======================
                PAGE HEADER
            ====================== */}
            <div className="col-9 mx-auto mb-4">
                <h2 className="fw-bold mb-1">Playlists</h2>
                <p className="text-muted mb-0">
                    Manage and organize your playlists
                </p>
            </div>

            {/* ======================
                FILTERS & ACTIONS
            ====================== */}
            <div className="border border-solid-1 rounded p-3 col-9 mx-auto mb-3 d-flex flex-wrap align-items-center gap-3">

                <select className="form-select w-auto">
                    <option defaultValue>Sort by</option>
                    <option value="name">Alphabetical (A–Z)</option>
                    <option value="songs">Number of songs</option>
                    <option value="plays">Times played</option>
                    <option value="created_at">Creation date</option>
                    <option value="updated_at">Last updated</option>
                </select>

                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search playlist..."
                />

                <div className="ms-auto">
                    <button className="btn btn-dark">
                        + New playlist
                    </button>
                </div>

            </div>

            {/* ======================
                PLAYLIST TABLE
            ====================== */}
            <div className="border border-solid-1 rounded col-9 mx-auto p-3">

                <table className="table table-hover align-middle mb-0">
                    <thead>
                        <tr className="text-muted">
                            <th>Playlist</th>
                            <th>Creator</th>
                            <th>Songs</th>
                            <th>Plays</th>
                            <th>Last updated</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr style={{ cursor: 'pointer' }}>
                            <td>
                                <div className="d-flex align-items-center gap-3">
                                    <div
                                        className="bg-secondary rounded"
                                        style={{ width: 40, height: 40 }}
                                    />
                                    <div>
                                        <div className="fw-semibold">
                                            Focus Coding
                                        </div>
                                        <small className="text-muted">
                                            Public playlist
                                        </small>
                                    </div>
                                </div>
                            </td>
                            <td>Vítor</td>
                            <td>43</td>
                            <td>120</td>
                            <td>2026-01-20</td>
                        </tr>

                        <tr style={{ cursor: 'pointer' }}>
                            <td>
                                <div className="d-flex align-items-center gap-3">
                                    <div
                                        className="bg-secondary rounded"
                                        style={{ width: 40, height: 40 }}
                                    />
                                    <div>
                                        <div className="fw-semibold">
                                            Japanese Study
                                        </div>
                                        <small className="text-muted">
                                            Private playlist
                                        </small>
                                    </div>
                                </div>
                            </td>
                            <td>Vítor</td>
                            <td>60</td>
                            <td>98</td>
                            <td>2026-01-18</td>
                        </tr>

                        <tr style={{ cursor: 'pointer' }}>
                            <td>
                                <div className="d-flex align-items-center gap-3">
                                    <div
                                        className="bg-secondary rounded"
                                        style={{ width: 40, height: 40 }}
                                    />
                                    <div>
                                        <div className="fw-semibold">
                                            Late Night OSTs
                                        </div>
                                        <small className="text-muted">
                                            Curated
                                        </small>
                                    </div>
                                </div>
                            </td>
                            <td>Admin</td>
                            <td>32</td>
                            <td>75</td>
                            <td>2026-01-12</td>
                        </tr>

                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default Playlists;
