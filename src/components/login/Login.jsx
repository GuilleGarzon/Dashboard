import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../provider/provider';

import { login } from "../../services/login";
import { Form } from "react-bootstrap";
import Swal from 'sweetalert2';

export const Login = () => {  
  const [form, setForm] = useState({});
  const { dispatch } = useAppContext();

  const navigate = useNavigate();

  const handleChange = e => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };    

  const handleLogin = (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {        
    const response = await login(form.username, form.password);
    if (response.length) {
      localStorage.setItem(
      "profile",
      (JSON.stringify(response))
      );
      dispatch({
        type: "LOGIN",
        value: response,
      });
      navigate("/");
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
  
  return (       
      <form onSubmit={handleLogin}>        
          
          <Form.Group className='mb-4 input-group input-group-lg' controlId="username">
            <Form.Control 
              type="text" 
              name="username"
              placeholder="Please enter Username" 
              onChange={handleChange}
              required
            />
          </Form.Group>    

          <Form.Group className='mb-4 input-group input-group-lg' controlId="password">
            <Form.Control 
              type="password" 
              name="password"              
              placeholder="Please enter Password" 
              onChange={handleChange}
              required
            />
          </Form.Group>
        
        <button className=" btn btn-outline-primary btn-lg" type="submit">
          Login
        </button>
      </form>
  );
};
