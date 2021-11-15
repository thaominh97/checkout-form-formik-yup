import { makeStyles } from '@mui/material';
import { theme } from './theme.styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    '& p': {
      color: 'white',
      '& span': {
        color: 'grey',
      },
    },
    fontSize: "30px",
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + parseInt(theme.spacing(3)) * 2)]: {
      marginTop: "auto",
      marginBottom: "auto",
      padding: theme.spacing(3)
    },
    fontSize: "30px",
  }
}))