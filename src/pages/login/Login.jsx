import { Login } from "../../components/login/Login";
import LogoOL from '../../assets/LogoOL.png';

import "../../styles/Login.css";

export const LoginPage = () => {
  return (
    <>
      <section className="login container">
        <div className="card">
          <img className="login__image" src={LogoOL} alt="Logo ol Software" />
          <div className="card-body">
            <h1 className="mb-4"> Bienvenido a OL Software</h1>
            <Login />            
          </div>
        </div>
      </section>
    </>
  );
}
