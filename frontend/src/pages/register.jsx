function Register() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // frontend only — validation and API integration will be added later
  }

  return (
    <>
      <div className="border border-solid-1 p-3 col-11 col-md-8 col-lg-4 mx-auto">
        <form className="row m-3" onSubmit={handleSubmit}>
          <h2 className="text-center">Register</h2>
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
          <button type="submit" className="mx-auto my-1 bg-black text-white fw-bold rounded w-75 fs-5">
            Create Account
          </button>
          <div className="my-1 text-center">
            <a href="login">Already have an account? Sign in</a>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
