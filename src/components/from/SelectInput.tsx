import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { ErrorMessage, Field, FieldInputProps } from "formik";

interface SelectItem {
  label: string;
  value: any;
}

interface SelectInputProps {
  label: string;
  name: string;
  items: SelectItem[];
  error: string | boolean;
}

interface MuiSelectFieldProps extends FieldInputProps<string> {
  label: string;
  children: React.ReactNode;
  helperText?: string;
  error?: boolean;
}

const MuiSelectField: React.FC<MuiSelectFieldProps> = (props) => {
  const {
    label,
    children,
    helperText,
    onBlur,
    onChange,
    value,
    name,
    error,
  } = props;
  return (
    <FormControl variant="standard" style={{ width: 180 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        // variant="outlined"
        dir="rtl"
        error={error}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {children}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

const SelectInput: React.FC<SelectInputProps> = (props) => {
  const { label, name, items, error } = props;
  return (
    <Field
      as={MuiSelectField}
      name={name}
      label={label}
      error={error}
      helperText={<ErrorMessage name={name} />}
    >
      {items.map((item, index) => (
        <MenuItem key={index} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Field>
  );
};

export default SelectInput;
