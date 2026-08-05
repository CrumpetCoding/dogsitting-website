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

        // Custom example
        gradients: {
            heroColor: 'linear-gradient(45deg, #020024 0%, #090979 35%, #00d4ff 100%)',
            heroOverlay: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.4))',
        },
    },
});

declare module '@mui/material/styles' {
    interface Palette {
        gradients: {
            heroColor: string;
            heroOverlay: string;
        };
    }
    interface PaletteOptions {
        gradients?: {
            heroColor?: string;
            heroOverlay?: string;
        };
    }
}