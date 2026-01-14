import './register.css'

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // frontend only — validation and API integration will be added later
  }

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2 className="register-title">Create Account</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Choose a username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
          />
        </div>

        <button type="submit" className="register-button">
          Create Account
        </button>

        <div className="register-links">
          <a href="#">Already have an account? Sign in</a>
        </div>
      </form>
    </div>
  )
}

export default Register
