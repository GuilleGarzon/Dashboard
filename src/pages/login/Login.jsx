import { Login } from "../../components/login/Login";
import LogoOL from '../../assets/LogoOL.png';

import "../../styles/Login.css";
import { Card } from "react-bootstrap";

export const LoginPage = () => {
  return (
    <>
      <section className="login container">
        <Card className="text-bg-light">
          <img className="login__image" src={LogoOL} alt="Logo ol Software" />
          <Card.Body>
            <h1 className="mb-4"> Bienvenido a OL Software</h1>
            <Login />            
          </Card.Body>
        </Card>
      </section>
    </>
  );
}
