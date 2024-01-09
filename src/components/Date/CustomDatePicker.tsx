import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import classNames from "classnames";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

interface DatepickerInputProps {
  onClick?: () => void;
  value?: string;
  inputClass: string;
  children?: React.ReactNode;
}

/* Datepicker with Input */
const DatepickerInput = forwardRef<HTMLInputElement, DatepickerInputProps>(
  (props, ref) => {
    const onDateValueChange = () => {
      console.log("date value changed");
    };
    return (
      <input
        type="text"
        className={classNames("form-control", props.inputClass)}
        onClick={props.onClick}
        value={props.value}
        onChange={onDateValueChange}
        ref={ref}
      />
    );
  }
);

/* Datepicker with Addon Input */
const DatepickerInputWithAddon = forwardRef<
  HTMLInputElement,
  DatepickerInputProps
>((props, ref) => (
  <div className="input-group input-group-sm" ref={ref}>
    <span className="input-group-text ">
      <i className="mdi mdi-calendar-range"></i>
    </span>
    <input
      type="text"
      className={classNames("form-control", props.inputClass)}
      onClick={props.onClick}
      value={props.value}
      style={{ maxWidth: "130px" }}
      readOnly
    />
  </div>
));

interface HyperDatepickerProps {
  value: Date;
  onChange: (date: any) => void;
  hideAddon?: boolean;
  inputClass?: string;
  dateFormat?: string;
  minDate?: Date;
  maxDate?: Date;
  showTimeSelect?: boolean;
  tI?: number;
  timeCaption?: string;
  timeFormat?: string;
  showTimeSelectOnly?: boolean;
  monthsShown?: number;
  inline?: boolean;
  showYearPicker?: boolean;
}

const CustomDatePicker = (props: HyperDatepickerProps) => {
  // handle custom input
  // ;

  const formattedValue = format(props.value, props.dateFormat || "MM/dd/yyyy");

  console.log(formattedValue);

  const input =
    (props.hideAddon || false) === true ? (
      <DatepickerInput inputClass={props.inputClass!} value={formattedValue} />
    ) : (
      <DatepickerInputWithAddon
        inputClass={props.inputClass!}
        value={formattedValue}
      />
    );

  return (
    <>
      {/* date picker control */}
      <DatePicker
        customInput={input}
        timeIntervals={props.tI}
        selected={props.value}
        onChange={(date) => props.onChange(date)}
        showTimeSelect={props.showTimeSelect}
        timeFormat={props.timeFormat}
        timeCaption={props.timeCaption}
        dateFormat={props.dateFormat || "MM/dd/yyyy"}
        minDate={props.minDate}
        maxDate={props.maxDate}
        monthsShown={props.monthsShown}
        showTimeSelectOnly={props.showTimeSelectOnly}
        inline={props.inline}
        autoComplete="off"
        showYearPicker={props.showYearPicker}
      />
    </>
  );
};

export default CustomDatePicker;
