import { Form } from "react-bootstrap";

interface CustomSwitchProps {
  leftLabel: string;
  rightLabel: string;
}

const CustomSwitch = ({ leftLabel, rightLabel }: CustomSwitchProps) => {
  return (
    <>
      <div className="d-flex align-items-center gap-2">
        <Form.Label className="fs-14 pt-1">{leftLabel}</Form.Label>
        <Form.Check
          type="switch"
          id="custom-switch"
          label={rightLabel}
          className="fs-14"
        />
      </div>
    </>
  );
};

export default CustomSwitch;
