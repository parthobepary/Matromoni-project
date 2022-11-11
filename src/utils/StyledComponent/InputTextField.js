import { styled } from '@mui/system';
import { TextField } from "@mui/material";

const InputTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#379cf6',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#379cf6',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '2px solid #379cf6',
        borderRadias: '5px'
      },
      '&:hover fieldset': {
        borderColor: '#379cf6',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#379cf6',
      },
    },
  });

export default InputTextField;