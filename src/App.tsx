import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {
  Input,
  Linea,
  H1,
  Span,
  ArrowDownContainer,
  Label,
} from "./styled-components";
import {
  differenceInDays,
  differenceInYears,
  differenceInMonths,
} from "date-fns";
import { useState } from "react";
import { FormHelperText } from "@mui/material";

interface Datos {
  day: string;
  month: string;
  year: string;
}

interface AgeCalc {
  yearCalc: string;
  monthCalc: string;
  dayCalc: string;
}

function App() {
  const [datos, setDatos] = useState<Datos>({
    day: "",
    month: "",
    year: "",
  });

  const [ageCalc, setAgeCalc] = useState<AgeCalc>({
    yearCalc: "",
    monthCalc: "",
    dayCalc: "",
  });

  const [error, setError] = useState<Boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatos((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateAge = () => {
    if (datos.day !== "" && datos.month !== "" && datos.year !== "") {
      const { year, month, day } = datos;
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      const currentDate = new Date();
      const yearData = differenceInYears(currentDate, date).toString();
      const monthData = differenceInMonths(currentDate, date).toString();
      const dayData = differenceInDays(currentDate, date).toString();
      setAgeCalc({
        yearCalc: yearData,
        monthCalc: monthData,
        dayCalc: dayData,
      });
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "800px",
        height: "580px",
        borderRadius: "15px 15px 150px 15px",
        padding: "2.5rem",
        paddingTop: "1.5rem",
      }}
    >
      <Stack direction="row" spacing={2} marginBottom={4}>
        <Stack spacing={1}>
          <Label htmlFor="day" sx={{ color: error ? "red" : null }}>
            DAY
          </Label>
          <Input
            id="day"
            name="day"
            value={datos.day}
            onChange={handleInputChange}
            sx={{
              "& .MuiInputBase-input": {
                borderColor: error ? "red" : "",
              },
            }}
          />
          {error && (
            <FormHelperText error={true} sx={{ fontSize: "1rem" }}>
              The field is required
            </FormHelperText>
          )}
        </Stack>
        <Stack spacing={1}>
          <Label htmlFor="month" sx={{ color: error ? "red" : null }}>
            MONTH
          </Label>
          <Input
            id="month"
            name="month"
            value={datos.month}
            onChange={handleInputChange}
            sx={{
              "& .MuiInputBase-input": {
                borderColor: error ? "red" : "",
              },
            }}
          />
          {error && (
            <FormHelperText error={true} sx={{ fontSize: "1rem" }}>
              The field is required
            </FormHelperText>
          )}
        </Stack>
        <Stack spacing={1}>
          <Label htmlFor="year" sx={{ color: error ? "red" : null }}>
            YEAR
          </Label>
          <Input
            id="year"
            name="year"
            value={datos.year}
            onChange={handleInputChange}
            sx={{
              "& .MuiInputBase-input": {
                borderColor: error ? "red" : "",
              },
            }}
          />
          {error && (
            <FormHelperText error={true} sx={{ fontSize: "1rem" }}>
              The field is required
            </FormHelperText>
          )}
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={0}
        alignItems="center"
        sx={{ position: "relative" }}
      >
        <Linea></Linea>
        <ArrowDownContainer onClick={calculateAge}>
          <img src="./public/assets/images/icon-arrow.svg" alt="" />
        </ArrowDownContainer>
      </Stack>

      <Stack fontStyle={"italic"} direction="column" spacing={-2} marginTop={4}>
        <H1>
          <Span>{ageCalc.yearCalc !== "" ? ageCalc.yearCalc : "_ _"}</Span>{" "}
          years
        </H1>
        <H1>
          <Span>{ageCalc.monthCalc !== "" ? ageCalc.monthCalc : "_ _"}</Span>{" "}
          months
        </H1>
        <H1>
          <Span>{ageCalc.dayCalc !== "" ? ageCalc.dayCalc : "_ _"}</Span> days
        </H1>
      </Stack>
    </Box>
  );
}

export default App;
