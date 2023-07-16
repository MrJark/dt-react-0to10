import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors"; // colores ya predeterminados del material


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#0C9A9D',
            dark: '#000707',
        },
        secondary: {
            main: '#AB79DD',
            400: '#6627A5',
            dark: '#0C0116'
        },
        error: {
            main: '#a11315'
        },
        background: {
            darkmode: '#222222',
            light: '#ECF5F5',
            grey: '#A8A8A8'
        },
        letters: {
            dark: '#1C1C1C',
            light: '#F9F9F9',
        }

    }
})