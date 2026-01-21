function Home() {
  return (
    <div className="container-fluid col-11 mx-auto mt-4">

      {/* HEADER */}
      <header className="mb-4">
        <h2 className="fw-bold">Good afternoon</h2>
        <p className="text-muted mb-0">
          Continue listening where you left off
        </p>
      </header>

      {/* MAIN GRID */}
      <div className="row g-4">

        {/* LEFT COLUMN */}
        <aside className="col-12 col-lg-4">

          {/* PLAYLISTS */}
          <section className="mb-4">
            <h5 className="mb-3">Your playlists</h5>

            <div className="list-group">
              <div className="list-group-item d-flex justify-content-between">
                <span>Focus coding</span>
                <small className="text-muted">43 songs</small>
              </div>
              <div className="list-group-item d-flex justify-content-between">
                <span>Japanese Study</span>
                <small className="text-muted">60 songs</small>
              </div>
              <div className="list-group-item d-flex justify-content-between">
                <span>Late Night OSTs</span>
                <small className="text-muted">32 songs</small>
              </div>
              <div className="list-group-item d-flex justify-content-between">
                <span>Workout Mix</span>
                <small className="text-muted">21 songs</small>
              </div>
            </div>
          </section>

          {/* ALBUMS */}
          <section>
            <h5 className="mb-3">Saved albums</h5>

            <div className="row g-2">
              <div className="col-6">
                <div className="border rounded p-2 text-center">
                  <div className="mb-2 bg-secondary rounded" style={{ height: 90 }} />
                  <small>Subarashiki Hibi OST</small>
                </div>
              </div>

              <div className="col-6">
                <div className="border rounded p-2 text-center">
                  <div className="mb-2 bg-secondary rounded" style={{ height: 90 }} />
                  <small>Nier Automata</small>
                </div>
              </div>
            </div>
          </section>
        </aside>

        {/* RIGHT COLUMN */}
        <main className="col-12 col-lg-8">

          {/* LAST PLAYED */}
          <section className="mb-4">
            <h5 className="mb-3">Last played songs</h5>

            <div className="list-group">
              <div className="list-group-item d-flex justify-content-between">
                <span>Yoru no Himawari</span>
                <small className="text-muted">3:12</small>
              </div>

              <div className="list-group-item d-flex justify-content-between">
                <span>City Ruins</span>
                <small className="text-muted">4:20</small>
              </div>

              <div className="list-group-item d-flex justify-content-between">
                <span>Weight of the World</span>
                <small className="text-muted">5:38</small>
              </div>
            </div>
          </section>

          {/* MOST PLAYED */}
          <section>
            <h5 className="mb-3">Most played this month</h5>

            <div className="row g-3">
              <div className="col-md-6">
                <div className="border rounded p-3">
                  <h6 className="mb-1">Yoru no Himawari</h6>
                  <small className="text-muted">42 plays</small>
                </div>
              </div>

              <div className="col-md-6">
                <div className="border rounded p-3">
                  <h6 className="mb-1">City Ruins</h6>
                  <small className="text-muted">37 plays</small>
                </div>
              </div>
            </div>
          </section>

        </main>

      </div>
    </div>
  )
}

export default Home
