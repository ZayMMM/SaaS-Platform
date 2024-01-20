import React, { useEffect } from "react";
import { Button, Alert, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import SupportImage from "../../assets/images/support.png";

// actions
import { resetAuth, loginUser } from "../../redux/actions";

// store
import { RootState, AppDispatch } from "../../redux/store";

// components

import AuthLayout from "./AuthLayout";
import EmailInput from "../../components/EmailInput";
import VerticalForm from "../../components/VerticalForm";
import FormInput from "../../components/FormInput";

interface UserData {
  username: string;
  password: string;
}

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
        <p className="">Or</p>
        <div className="d-flex justify-content-center gap-2">
          <img src={SupportImage} alt="Support" width={"24px"} />
          <span className="support">Support</span>
        </div>
      </Col>
    </Row>
  );
};

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { user, userLoggedIn, loading, error } = useSelector(
    (state: RootState) => ({
      user: state.Auth.user,
      loading: state.Auth.loading,
      error: state.Auth.error,
      userLoggedIn: state.Auth.userLoggedIn,
    })
  );

  useEffect(() => {
    dispatch(resetAuth());
  }, [dispatch]);

  /*
  form validation schema
  */
  const schemaResolver = yupResolver(
    yup.object().shape({
      username: yup.string().required(t("Please enter Username")),
      password: yup.string().required(t("Please enter Password")),
    })
  );

  /*
  handle form submission
  */

  const onSubmit = (formData: UserData) => {
    dispatch(loginUser(formData["username"], formData["password"]));
  };

  return (
    <>
      <AuthLayout bottomLinks={<BottomLink />}>
        {error && (
          <Alert variant="danger" className="my-2">
            {error}
          </Alert>
        )}

        <VerticalForm<UserData>
          onSubmit={onSubmit}
          resolver={schemaResolver}
          defaultValues={{ username: "test", password: "test" }}
        >
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
                disabled={loading}
                style={{ height: "50px", width: "100%" }}
              >
                {t("Log In")}
              </Button>
            </Link>
          </div>
        </VerticalForm>

        <div className="text-center">
          <BottomLink />
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
