import React from "react";
import TextField from "@material-ui/core/TextField";

export default function CustomTextField({
  param,
  errors,
  touched,
  handleChange,
  autoFocus = false,
}) {
  return (
    <TextField
      error={errors[param] && touched[param]}
      name={param}
      variant="outlined"
      fullWidth
      onChange={handleChange}
      id={param}
      label={param.charAt(0).toUpperCase() + param.slice(1)}
      autoFocus={autoFocus}
      helperText={errors[param] && touched[param] ? errors[param] : null}
    />
  );
}
