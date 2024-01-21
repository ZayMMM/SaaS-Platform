import { Button, Alert, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SupportImage from "../../assets/images/support.png";

import AuthLayout from "./AuthLayout";
import EmailInput from "../../components/EmailInput";
import FormInput from "../../components/FormInput";
import ErrorAlert from "../../components/Alert/ErrorAlert";
import SuccessAlert from "../../components/Alert/SuccessAlert";

/* bottom links */
const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col className="text-center">
        <p>
          <Link to={"#"} className=" ms-1 text-blue-15 fw-600">
            {t("Forgot Password")}
          </Link>
        </p>
        <div className="or-container">
          <div className="line"></div>
          <div className="or-text">Or</div>
          <div className="line"></div>
        </div>

        <div className="d-flex justify-content-center gap-2">
          <img src={SupportImage} alt="Support" width={"24px"} />
          <span className="support">Support</span>
        </div>
      </Col>
    </Row>
  );
};

const Login = () => {
  return (
    <>
      <AuthLayout>
        <ErrorAlert error="Error Alert" />
        <SuccessAlert error="Success Alert" />
        <form>
          <EmailInput
            type="text"
            name="username"
            placeholder="Your Email"
            containerClass={"mb-3"}
            inputGroupClassName={"inputGroupTransparent"}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="Enter your password"
            containerClass={"mb-3"}
            inputGroupClassName={"inputGroupTransparent"}
          ></FormInput>

          <div className="text-center d-grid">
            <Link to={"/home"}>
              <Button
                variant="primary"
                type="submit"
                style={{ height: "50px", width: "100%" }}
              >
                Log In
              </Button>
            </Link>
          </div>
        </form>
        <div className="text-center">
          <BottomLink />
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
