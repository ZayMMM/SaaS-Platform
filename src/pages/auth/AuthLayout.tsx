import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import LoginBanner from "../../assets/images/LoginBanner3.png";

interface AccountLayoutProps {
  helpText?: string;
  bottomLinks?: any;
  isCombineForm?: boolean;
  children?: any;
}

const AuthLayout = ({
  helpText,
  bottomLinks,
  children,
  isCombineForm,
}: AccountLayoutProps) => {
  useEffect(() => {
    if (document.body)
      document.body.classList.add(
        "authentication-bg",
        "authentication-bg-pattern"
      );

    return () => {
      if (document.body)
        document.body.classList.remove(
          "authentication-bg",
          "authentication-bg-pattern"
        );
    };
  }, []);

  return (
    <>
      <img
        src={LoginBanner}
        width={"100%"}
        style={{
          position: "relative",
        }}
      />
      <div className="account-pages">
        <Card className="bg-pattern login-card">
          <Card.Body className="p-4">
            <div className="text-center w-75 m-auto">
              <h6 className="login-title mb-4">Log In</h6>
            </div>
            {children}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AuthLayout;
