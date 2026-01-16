function Register() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // frontend only — validation and API integration will be added later
  }

  return (
    <>
      <div className="border border-solid-1 p-3 w-75 mx-auto">
        <form className="row m-3" onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <div className="form-group">
            <input
              className="form-control my-2"
              id="username"
              type="text"
              placeholder="Choose a username"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control my-2"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group col-6">
            <input
              className="form-control my-2"
              id="password"
              type="password"
              placeholder="Create a password"
              required
            />
          </div>
          <div className="form-group col-6">
            <input
              className="form-control my-2"
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="mx-auto my-1">
            Create Account
          </button>
          <div className="my-1">
            <a href="#">Already have an account? Sign in</a>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
