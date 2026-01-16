function Home() {
  return (
    <div className="border p-3 col-11 mx-auto">

      {/* Linha principal */}
      <div className="row">

        {/* Coluna esquerda */}
        <div className="col-4">
          <div className="border mb-3">
            <h1>Playlists</h1>
          </div>

          <div className="border">
            <h1>Albuns</h1>
          </div>
        </div>

        {/* Coluna direita */}
        <div className="col-8 row">
          <div className="border mb-3 col">
            <h1>Last played songs</h1>
          </div>

          <div className="border col">
            <h1>Most played songs this month</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
