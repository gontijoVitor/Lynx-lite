function Album_Layout() {
    return (
        <div className='border border-solid-1 p-3 rounded m-2' style={{ width: '280px' }}>
            <img className="my-2 rounded mx-auto d-block" alt='album image' src='../../test-img.png' width="230px" ></img>
            <h4 className="text-wrap text-center">Wonderful Everyday Original Soundtrack</h4>
            <p className="text-wrap text-center mb-1">Matsumoto Fuminori</p>
        </div>
    )
}

export default Album_Layout;