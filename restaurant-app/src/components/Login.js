import { Link } from "react-router-dom";
import { useState } from "react";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <section className="login-bg">
      <div className="login-card">
        <div className="login-title">
          <h1>¡Bienvenido de vuelta!</h1>
          <p>Ingrese sus credenciales para continuar al panel de control.</p>
        </div>
        <form className="login-form">
          <input
            type="text"
            id="username-input"
            name="username"
            placeholder="Ingrese su Usuario"
            required
          />
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password-input"
              name="password"
              placeholder="●●●●●●●●●●●●●●"
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
            />
            <label htmlFor="remember-user-checkbox">Recordar Usuario</label>
          </div>
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
