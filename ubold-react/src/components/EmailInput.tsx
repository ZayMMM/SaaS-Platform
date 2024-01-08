import { InputGroup, Form } from "react-bootstrap";
import classNames from "classnames";
import { FieldErrors, Control } from "react-hook-form";
import MailImage from "../assets/images/mail.png";

interface EmailInputProps {
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  register?: any;
  errors?: FieldErrors;
  control?: Control<any>;
  className?: string;
  labelClassName?: string;
  containerClass?: string;
  refCallback?: any;
  children?: any;
  rows?: string;
  inputGroupClassName?: string;
}

const EmailInput = ({
  label,
  type,
  name,
  placeholder,
  register,
  errors,
  control,
  className,
  labelClassName,
  containerClass,
  refCallback,
  children,
  rows,
  inputGroupClassName,
  ...otherProps
}: EmailInputProps) => {
  return (
    <>
      <Form.Group className={containerClass}>
        {label ? (
          <>
            {" "}
            <Form.Label className={labelClassName}>{label}</Form.Label>{" "}
            {children}{" "}
          </>
        ) : null}
        <InputGroup
          className={`mb-0 ${inputGroupClassName}`}
          style={{ height: "50px" }}
        >
          <div
            className={classNames("input-group-text", "input-group-password")}
          >
            <img src={MailImage} width={"18px"} alt="Mail" />
          </div>
          <Form.Control
            placeholder={placeholder}
            name={name}
            id={name}
            as="input"
            style={{ borderLeft: "0px" }}
            ref={(r: HTMLInputElement) => {
              if (refCallback) refCallback(r);
            }}
            className={className}
            isInvalid={errors && errors[name] ? true : false}
            {...(register ? register(name) : {})}
            autoComplete={name}
          />
        </InputGroup>
      </Form.Group>
    </>
  );
};

export default EmailInput;
