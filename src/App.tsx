import { ThemeProvider, createTheme } from "@mui/material/styles";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Input, Linea, H1, Span, ArrowDownContainer } from "./styled-components"

const theme = createTheme({

});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "white",
          width: "800px",
          height: "540px",
          borderRadius: "15px 15px 150px 15px",
          padding: "2.5rem",

        }}
      >
        <Stack direction="row" spacing={2} marginBottom={4}>
          <Input label="MONTH" variant="outlined" />
          <Input label="MONTH" variant="outlined" />
          <Input label="YEAR" variant="outlined" />
        </Stack>

        <Stack direction='row' spacing={0} alignItems="center" sx={{ position: "relative" }}>
          <Linea></Linea>
          <ArrowDownContainer><img src="./public/assets/images/icon-arrow.svg" alt="" /></ArrowDownContainer>
        </Stack>

        <Stack fontStyle={"italic"} direction="column" spacing={-2} marginTop={4} >
          <H1><Span>{38}</Span> years</H1>
          <H1><Span>{3}</Span> months</H1>
          <H1><Span>{26}</Span> days</H1>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
