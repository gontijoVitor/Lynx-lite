import './login.css'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // frontend only — authentication logic will be added later
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-title">Sign In</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-button">
          Sign In
        </button>

        <div className="login-links">
          <a href="#">Forgot your password?</a>
          <a href="#">Create a new account</a>
        </div>
      </form>
    </div>
  )
}

export default Login
