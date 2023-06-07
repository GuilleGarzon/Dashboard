import { useEffect, useState } from "react";
import { useAppContext } from "../../provider/provider";

import Toast from "react-bootstrap/Toast";
import Alert from "react-bootstrap/Alert";
import ToastContainer from "react-bootstrap/ToastContainer";

export const ToastComponent = () => {
  const { myAlert, dispatch } = useAppContext();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (myAlert?.message) {
      setShow(true);
    }
  }, [myAlert]);

  const handleClose = () => {
    setShow(false);
    dispatch({
      type: "ALERT",
      value: {
        error: "",
        message: null,
      },
    });
  };

  return (
    <>
      {myAlert && (
        <ToastContainer
          className="p-3 position-fixed top-0"
          position="top"
          style={{ zIndex: 1000 }}
        >
          <Toast show={show} delay={3000} onClose={handleClose} autohide>
            
            <Toast.Body>
              <Alert variant={myAlert.error ? "danger" : "success"}>
                {myAlert.message}
              </Alert>
            </Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </>
  );
};
