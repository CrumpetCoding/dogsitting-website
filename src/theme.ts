import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: '#266070',
        },
        secondary: {
            main: '#f50057',
        },
        custom: {
            cream: {
                backgroundColor: "#fdedcf",
                textColor: "#286070",
            }
        },
    },
});

declare module '@mui/material/styles' {
    interface Palette {
        custom: {
            cream: {
                backgroundColor: string;
                textColor: string;
            }
        };
    }
    interface PaletteOptions {
        custom: {
            cream: {
                backgroundColor: string;
                textColor: string;
            }
        };
    }
}