import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import styled from "styled-components";

const theme = createTheme({
  palette: {
    background: {
      paper: "#0f",
    },
  },
});

const Input = styled(TextField)`
  width: 200px;
  font-size: 2rem;
  &:focus {
    outline: none;
    border: 1px solid black;
    background-color: red;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: "white",
            width: "800px",
            height: "540px",
            borderRadius: "15px 15px 150px 15px",
            padding: "2.5rem",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Input label="MONTH" variant="outlined" />
            <Input label="MONTH" variant="outlined" />
            <Input label="YEAR" variant="outlined" />
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
