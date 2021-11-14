import React from 'react';
import {TextField, TextFieldProps} from '@mui/material';
import {useField} from 'formik';
import {at} from 'lodash';

interface PropsType {
 errorText?: string;
 defaultProps?: TextFieldProps;
}

export const InputField: React.FC<PropsType> = (props)  => {
  const {errorText, ...restProps} = props;
  const [field, meta] = useField(props.defaultProps?.name)
  const renderHelperText = () => {
    const [ touched, error ] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }
  return (
   <TextField
     type={'text'}
     helperText={renderHelperText()}
     {...field}
     {...restProps.defaultProps}
   />
  )
}