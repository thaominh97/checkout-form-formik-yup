import React, {ReactNode} from 'react';
import {CssBaseline, Paper} from '@mui/material';

export const Wrapper: React.FC<{children: ReactNode}> = (props ) => {
  return (
    <div>
      <CssBaseline />
      <Paper>
        {props.children}
      </Paper>
    </div>
  )
}