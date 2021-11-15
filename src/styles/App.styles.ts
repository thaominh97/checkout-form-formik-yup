import {makeStyles} from '@mui/styles';


export const useAppStyles = makeStyles(() => ({
  stepper: {
    padding: "30px 0 50px 0",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop:  "30px",
    marginLeft:  "10px",
  },
  wrapper: {
    margin: "10px",
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
}))