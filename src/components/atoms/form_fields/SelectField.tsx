import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText, TextFieldProps
} from '@mui/material';

interface PropsType {
  data: Array<{ label: string; value: string }>;
  label: string;
  name: string;
  fullWidth?: boolean;
}
export const SelectField: React.FC<PropsType> = (props) => {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} value={selectedValue ? selectedValue : ''}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  );
}
