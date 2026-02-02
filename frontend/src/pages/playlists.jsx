function Playlists() {
    return (
        <div className='col' style={{ marginTop: '100px', marginBottom: '180px' }}>

            {/* FILTERS */}
            <div className='border border-solid-1 rounded p-3 col-9 mx-auto mb-3 d-flex gap-3 flex-wrap'>

                <select className='form-select w-25'>
                    <option selected>Sort by</option>
                    <option value="name">Alphabetical (A–Z)</option>
                    <option value="songs">Number of songs</option>
                    <option value="plays">Times played</option>
                    <option value="created_at">Creation date</option>
                    <option value="updated_at">Last updated</option>
                </select>

            </div>

            {/* PLAYLIST LIST */}
            <div className='border border-solid-1 rounded col-9 mx-auto p-3'>

                <table className='table table-hover align-middle mb-0'>
                    <thead>
                        <tr>
                            <th>Playlist</th>
                            <th>Creator</th>
                            <th>Songs</th>
                            <th>Plays</th>
                            <th>Last updated</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Focus Coding</td>
                            <td>Vítor</td>
                            <td>43</td>
                            <td>120</td>
                            <td>2026-01-20</td>
                        </tr>

                        <tr>
                            <td>Japanese Study</td>
                            <td>Vítor</td>
                            <td>60</td>
                            <td>98</td>
                            <td>2026-01-18</td>
                        </tr>

                        <tr>
                            <td>Late Night OSTs</td>
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
