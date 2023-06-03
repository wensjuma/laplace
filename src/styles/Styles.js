import { Divider, TextField, styled, Button,Card, TextareaAutosize } from "@mui/material";
const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

export const StyledTextField = styled(TextField)(() => ({
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    border: "none !important"

}));

export const StyledDivider = styled(Divider)(() => ({
    margin: 4,
    textAlign: "center"

}));

export const RoundButton = styled(Button)(() => ({
    // borderRadius: "30%",
    minWidth:300,
    minHeight:60,
    float:"center",
    position: "absolute",
    padding: 6,
    alignContent:"flex-end",
    backgroundColor: "#007b55",
    "&: hover":{
        backgroundColor: "#007b55",
    }

}));

export const SubmitButton= styled(Button)(()=>({
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius:25,
    backgroundColor: "#007b55",
}))
export const AuthCard= styled(Card)(()=>({
    padding: "35px", 
    marginTop: "40%", 
}))

export const ServiceCard= styled(Card)(()=>({
    padding: "35px", 
    marginTop: "10%", 
    marginBottom: "10%", 
    margin:6,
    boxShadow: 0,
    borderRadius: 6,
    minHeight:350,
    maxHeight: 350,
    "&:hover":{
      transition: "all 0.9s ease-out",
      boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)",
      top: "-7px",
      border: "1px solid #b1f2ff",
      color:"#ffffff",
      fontWeight:"700",
      backgroundColor: "#73a4d4",
      borderRadius:16
  }


}))
export const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
 
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

