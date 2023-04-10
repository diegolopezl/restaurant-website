import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";

export default function Login({ setAuth }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberUser, setRememberUser] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("rememberedUser");
    if (storedUsername) {
      setUsername(storedUsername);
      setRememberUser(true);
    }
  }, []);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleRememberUserChange(event) {
    setRememberUser(event.target.checked);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log("response data:", data);
      if (response.ok) {
        if (rememberUser) {
          localStorage.setItem("rememberedUser", username);
        } else {
          localStorage.removeItem("rememberedUser");
        }
        navigate("/dashboard");
      } else {
        setLoginError(data.message);
      }
    } catch (error) {
      console.log("fetch error:", error);
      setLoginError("An error occurred. Please try again later.");
    }
  }

  return (
    <section className="login-bg">
      <div className="login-card">
        <div className="login-title">
          <h1>¡Bienvenido de vuelta!</h1>
          <p>Ingrese sus credenciales para continuar al panel de control.</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username-input"
            name="username"
            placeholder="Ingrese su Usuario"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password-input"
              name="password"
              placeholder="●●●●●●●●●●●●●●"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <button
              type="button"
              className="show-password-btn"
              onClick={toggleShowPassword}
            >
              {showPassword ? <RxEyeOpen /> : <RxEyeClosed />}
            </button>
          </div>
          <div className="remember-user">
            <input
              type="checkbox"
              id="remember-user-checkbox"
              name="remember-user"
              checked={rememberUser}
              onChange={handleRememberUserChange}
            />
            <label htmlFor="remember-user-checkbox">Recordar Usuario</label>
          </div>
          {loginError && <p className="login-error">{loginError}</p>}
          <button type="submit" className="login-btn">
            Iniciar Sesión
          </button>
        </form>
        <Link to="/" className="back-home-btn">
          Volver al Inicio
        </Link>
      </div>
    </section>
  );
}
