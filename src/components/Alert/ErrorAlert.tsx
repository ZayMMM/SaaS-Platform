import React, { useState } from "react";
import { Alert } from "react-bootstrap";

interface ErrorAlertProps {
  error: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ error }) => {
  const [show, setShow] = useState(true);

  const handleDismiss = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <Alert
          variant="danger"
          className="bg-danger text-white border-0"
          dismissible
          onClose={handleDismiss}
        >
          {error}
        </Alert>
      )}
    </>
  );
};

export default ErrorAlert;
