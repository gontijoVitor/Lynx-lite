function SongRow({ index, title, artist, album, duration, plays }) {
    return (
        <tr style={{ cursor: 'pointer' }}>

            <td className="text-muted">{index}</td>

            <td>
                <div className="d-flex align-items-center gap-3">

                    {/* Album cover */}
                    <div
                        className="bg-secondary rounded"
                        style={{
                            width: '44px',
                            height: '44px',
                            flexShrink: 0
                        }}
                    />

                    <div>
                        <div className="fw-semibold">
                            {title}
                        </div>
                        <small className="text-muted">
                            {artist}
                        </small>
                    </div>

                </div>
            </td>

            <td className="text-muted">
                {album}
            </td>

            <td className="text-end text-muted">
                {duration}
            </td>

            <td className="text-end text-muted">
                {plays}
            </td>

        </tr>
    );
}

export default SongRow;
