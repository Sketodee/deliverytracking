import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";


export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      minDate={new Date()}
      selected={(field.value && new Date(field.value)) || null}
      dateFormat="MMMM d, yyyy"
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />
  );
};

export default DatePickerField;