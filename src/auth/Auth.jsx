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
    const user = localStorage.getItem("profile");
    if (!user) {
      navigate("/login");
    } else {
      if (location.pathname === "/login") {
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

