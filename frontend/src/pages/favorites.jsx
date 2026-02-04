function Favorites() {
    return (
        <div className="col" style={{ marginTop: '100px', marginBottom: '180px' }}>

            {/* PAGE HEADER */}
            <div className="col-9 mx-auto mb-4">
                <h4 className="fw-semibold mb-1">Favorite Songs</h4>
                <small className="text-muted">
                    Songs you have marked as favorites
                </small>
            </div>

            {/* FILTERS */}
            <div className="
                border border-solid-1 rounded
                p-3
                col-9 mx-auto
                mb-4
                d-flex
                gap-3
                flex-wrap
                align-items-center
                bg-light-subtle
            ">
                <select className="form-select" style={{ maxWidth: '220px' }}>
                    <option defaultValue>Select artist</option>
                    <option value="1">Matsumoto Fuminori</option>
                    <option value="2">Keiichi Okabe</option>
                </select>

                <select className="form-select" style={{ maxWidth: '220px' }}>
                    <option defaultValue>Select album</option>
                    <option value="1">Wonderful Everyday OST</option>
                    <option value="2">NieR Automata</option>
                </select>

                <select className="form-select" style={{ maxWidth: '220px' }}>
                    <option defaultValue>Sort by</option>
                    <option value="favorited_at">Recently favorited</option>
                    <option value="title">Alphabetical (A–Z)</option>
                    <option value="plays">Times played</option>
                    <option value="duration">Duration</option>
                    <option value="release_date">Release date</option>
                </select>
            </div>

            {/* FAVORITES LIST */}
            <div className="border border-solid-1 rounded col-9 mx-auto p-0 overflow-hidden">

                <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                        <tr>
                            <th className="ps-4">#</th>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th className="text-end">Duration</th>
                            <th className="text-end">Plays</th>
                            <th className="text-end pe-4">Favorited</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="ps-4">1</td>
                            <td className="fw-medium">Yoru no Himawari</td>
                            <td>Matsumoto Fuminori</td>
                            <td>Wonderful Everyday OST</td>
                            <td className="text-end">3:12</td>
                            <td className="text-end">42</td>
                            <td className="text-end pe-4">
                                <small className="text-muted">2026-01-22</small>
                            </td>
                        </tr>

                        <tr>
                            <td className="ps-4">2</td>
                            <td className="fw-medium">City Ruins</td>
                            <td>Keiichi Okabe</td>
                            <td>NieR Automata</td>
                            <td className="text-end">4:20</td>
                            <td className="text-end">37</td>
                            <td className="text-end pe-4">
                                <small className="text-muted">2026-01-19</small>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Favorites;
