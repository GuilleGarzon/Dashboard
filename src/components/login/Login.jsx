import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../provider/provider";

import { login } from "../../services/login";
import { getUser } from "../../services/users";
import { Form } from "react-bootstrap";
import Swal from 'sweetalert2'

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
      Swal.fire({        
        text: `Bienvenido al Dashboard!`,
        icon: 'success',
        confirmButtonText: `Vamos`,
      });     
    } else {
      Swal.fire({          
        text: 'Credenciales inválidas',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });      
    }
  };

  const dispatchUserLogin = async (user) => {
    const response = await getUser(user.userId);
    if (response.data) {
      localStorage.setItem(
        "profile",
        btoa(JSON.stringify(response.data))
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
          
          <Form.Group className='mb-4 input-group input-group-lg' controlId="username">
            <Form.Control type="text" 
              value={username}
              placeholder="Please enter Username" 
              onChange={({ target }) => setUsername(target.value)}
              required
            />
          </Form.Group>    

          <Form.Group className='mb-4 input-group input-group-lg' controlId="password">
            <Form.Control type="password" 
              value={password}
              placeholder="Please enter Password" 
              onChange={({ target }) => setPassword(target.value)}
              required
            />
          </Form.Group>
        
        <button className=" btn btn-outline-primary btn-lg" type="submit">
          Login
        </button>
      </Form>
  );
};
