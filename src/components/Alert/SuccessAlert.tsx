import React, { useState } from "react";
import { Alert } from "react-bootstrap";

interface SuccessAlertProps {
  error: string;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ error }) => {
  const [show, setShow] = useState(true);

  const handleDismiss = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <Alert
          variant="success"
          className="bg-success text-white border-0"
          dismissible
          onClose={handleDismiss}
        >
          {error}
        </Alert>
      )}
    </>
  );
};

export default SuccessAlert;
