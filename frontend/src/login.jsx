function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // frontend only — authentication logic will be added later
  }

  return (
    <>
      <div className="border border-solid-1 p-3 w-75 mx-auto">
        <form className="row m-3" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="form-group">
            <input
              className="form-control my-2"
              id="username"
              type="text"
              placeholder="Username"
              required
            />
            <input
              className="form-control my-2"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="mx-auto my-1">
            Sign In
          </button>
          <div className="my-1">
            <a href="#">Forgot your password?</a> • <a href="#">Create a new account</a>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
