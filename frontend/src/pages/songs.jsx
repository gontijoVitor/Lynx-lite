function Songs() {
    return (
        <div className='col' style={{ marginTop: '100px', marginBottom: '180px' }}>

            {/* FILTERS */}
            <div className='border border-solid-1 rounded p-3 col-9 mx-auto mb-3 d-flex gap-3 flex-wrap'>

                <select className='form-select w-25'>
                    <option selected>Select artist</option>
                    <option value="1">Matsumoto Fuminori</option>
                    <option value="2">Keiichi Okabe</option>
                    <option value="3">Nobuo Uematsu</option>
                </select>

                <select className='form-select w-25'>
                    <option selected>Select album</option>
                    <option value="1">Wonderful Everyday OST</option>
                    <option value="2">NieR Automata</option>
                </select>

                <select className='form-select w-25'>
                    <option selected>Sort by</option>
                    <option value="title">Alphabetical (A–Z)</option>
                    <option value="duration">Duration</option>
                    <option value="plays">Times played</option>
                    <option value="release_date">Release date</option>
                    <option value="created_at">Date added</option>
                </select>

            </div>

            {/* SONG LIST */}
            <div className='border border-solid-1 rounded col-9 mx-auto p-3'>

                <table className='table table-hover align-middle mb-0'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>Duration</th>
                            <th>Plays</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Yoru no Himawari</td>
                            <td>Matsumoto Fuminori</td>
                            <td>Wonderful Everyday OST</td>
                            <td>3:12</td>
                            <td>42</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>City Ruins</td>
                            <td>Keiichi Okabe</td>
                            <td>NieR Automata</td>
                            <td>4:20</td>
                            <td>37</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Weight of the World</td>
                            <td>Keiichi Okabe</td>
                            <td>NieR Automata</td>
                            <td>5:38</td>
                            <td>29</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Songs;
