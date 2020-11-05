import React from "react";
import { TextField, withStyles } from "@material-ui/core";
import { useField, ErrorMessage, Field } from "formik";

type TextType = "text" | "password" | "file" | "textarea" | "number";

interface TextInputProps {
  name: string;
  label: string;
  error: boolean;
  type?: string;
  multiline?: boolean;
  fullWidth?: boolean;
  onChange(e: React.ChangeEvent): void;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  error,
  type = "text",
  multiline = false,
  fullWidth = false,
  onChange,
}) => {
  // const [field, meta, helpers] = useField(props);
  return (
    <Field
      as={TextField}
      dir="rtl"
      name={name}
      label={label}
      required
      error={error}
      fullWidth={fullWidth}
      type={type}
      variant="outlined"
      onChange={onChange}
      helperText={<ErrorMessage name={name} />}
      multiline={multiline}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default TextInput;
