import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  textField: {
    color: "red"
  },
});

function SignUp() {
  return (
    <Box >
    <TextField>
      autoFocus={true}
      id="nameRegister"
      label="Name"
      required={true}
    </TextField>
    <TextField>
      autoFocus={true}
      id="surnameRegister"
      label="surName"
      required={true}
    </TextField>
    </Box>
  );
}

export default SignUp
