import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Auth = ({ component }) => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    checkUser();
  }, [component]);

  const checkUser = () => {
    const user = localStorage.getItem("OLSOFTWARELOGIN");
    console.log(user);
    if (!user) {
      navigate("/login");
    } else {
      if (location.pathname === "/login") {
        console.log('pathname', location.pathname)
        navigate("/");
      }
    }

    setStatus(true);
  };

  return status ? (
    <>{component}</>
  ) : (
    <></>
  );
};

