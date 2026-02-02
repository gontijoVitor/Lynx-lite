import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay
} from '@fortawesome/free-solid-svg-icons'

function Playlist() {
  return (
    <div className="border border-solid-1 rounded col-9 mx-auto p-3">

      {/* HEADER */}
      <header className="mb-4">
        <small className="text-muted text-uppercase">
          Playlist
        </small>

        <h2 className="fw-bold mb-1">
          Animelike
        </h2>

        <p className="text-muted mb-0">
          Vítor • 13 songs • 42 min
        </p>
      </header>

      {/* CONTROLS */}
      <section className="mb-4">
        <button className="btn btn-dark rounded px-4"><FontAwesomeIcon icon={faPlay} /></button>
      </section>

      {/* TRACK LIST */}
      <section>

        {/* HEADER ROW */}
        <div className="d-flex px-3 py-2 border-bottom text-muted small">
          <div style={{ width: 40 }}>#</div>
          <div className="flex-grow-1">Title</div>
          <div className="d-none d-md-block" style={{ width: 220 }}>
            Album
          </div>
          <div style={{ width: 60 }} className="text-end">
            ⏱
          </div>
        </div>

        {/* SONGS */}
        <div className="list-group list-group-flush">

          <div className="list-group-item d-flex align-items-center">
            <div style={{ width: 40 }}>1</div>

            <div className="flex-grow-1">
              <div className="fw-semibold">
                unbreakable tie
              </div>
              <small className="text-muted">
                伊藤真澄
              </small>
            </div>

            <div
              className="d-none d-md-block text-muted"
              style={{ width: 220 }}
            >
              ベルノナ2 サウンドコレクション
            </div>

            <div style={{ width: 60 }} className="text-end text-muted">
              4:02
            </div>
          </div>

          <div className="list-group-item d-flex align-items-center">
            <div style={{ width: 40 }}>2</div>

            <div className="flex-grow-1">
              <div className="fw-semibold">
                Burn My Dread
              </div>
              <small className="text-muted">
                川村ゆみ
              </small>
            </div>

            <div
              className="d-none d-md-block text-muted"
              style={{ width: 220 }}
            >
              Persona 3 OST
            </div>

            <div style={{ width: 60 }} className="text-end text-muted">
              1:36
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Playlist
