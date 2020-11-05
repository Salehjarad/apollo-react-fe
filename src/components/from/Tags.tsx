import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  AutocompleteRenderInputParams,
} from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { Field } from "formik";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export interface ChipData {
  key: number;
  title: string;
}

interface TagsProps {
  label: string;
  name: string;
  list: string[];
  onChange(e: React.ChangeEvent<{}>, v: string[]): void;
}

interface MyInputProps {
  onKeyDown: (event: any) => void;
}
interface MyParams extends AutocompleteRenderInputParams {
  inputProps: MyInputProps;
}

const Tags: React.FC<TagsProps> = (props) => {
  return (
    <Autocomplete
      dir="rtl"
      multiple
      freeSolo
      onChange={(e, v) => props.onChange(e, v)}
      id="checkboxes-tags-demo"
      options={props.list}
      getOptionLabel={(option) => {
        if (typeof option === "string") {
          return option;
        }
        return "new";
      }}
      renderOption={(option, { selected }: any) => (
        <React.Fragment>
          <Checkbox
            dir="rtl"
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {typeof option === "string" ? option : "خاطئ"}
        </React.Fragment>
      )}
      style={{ width: "100%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          style={{ height: 60 }}
          label={props.label}
          placeholder="المفضلة"
        />
      )}
    />
  );
};

const TagsField: React.FC<TagsProps> = ({ label, name, list, onChange }) => {
  return (
    <Field
      as={Tags}
      label={label}
      list={list}
      name={name}
      onChange={onChange}
    />
  );
};

export default TagsField;
