import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../provider/provider";

import { login } from "../../services/login";
import { getUser } from "../../services/users";
import Form from "react-bootstrap/Form";
<<<<<<< HEAD
=======

>>>>>>> 915f3ff (feat:Change url services)

export const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useAppContext();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await login(username, password);

    if (response.length) {
      dispatchUserLogin(response[0]);
      setUsername("");
      setPassword("");
    } else {
      dispatch({
        type: "ALERT",
        value: {
          error: true,
          message: "Usuario o contraseña incorrectos",
        },
      });
    }
  };

  const dispatchUserLogin = async (user) => {
    const response = await getUser(user.userId);
    if (response.data) {
      localStorage.setItem(
        "OLSOFTWARELOGIN",
        (JSON.stringify(response.data))
      );
      dispatch({
        type: "LOGIN",
        value: response.data,
      });
      navigate("/");
    }
  };

  return (       
      <Form onSubmit={handleLogin}>        
          
          <Form.Group className='mb-4' controlId="username">
            <Form.Control type="text" 
              value={username}
              placeholder="Please enter Username" 
              onChange={({ target }) => setUsername(target.value)}
              required
            />
          </Form.Group>    

          <Form.Group className='mb-4' controlId="password">
            <Form.Control type="password" 
              value={password}
              placeholder="Please enter Password" 
              onChange={({ target }) => setPassword(target.value)}
              required
            />
          </Form.Group>
        
        <button className="btn btn-lg btn-outline-primary mb-5" type="button">
          Login
        </button>
      </Form>
  );
};
