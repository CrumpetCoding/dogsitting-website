import { Box, Typography } from '@mui/material';

type Params = {
    heading: string,
    body: string,
    backgroundColour?: string,
}

export default function TextSection({
    heading,
    body,
    backgroundColour = "custom.cream.backgroundColor",
}: Params) {
    return (
        <Box
            sx={{
                backgroundColor: backgroundColour,
                py: { xs: 4, sm: 6, md: 8 },
                px: { xs: 8, sm: 12, md: 16 },
                textAlign: 'center',
                borderRadius: theme => theme.shape.borderRadius,
            }}
        >
            <Typography
                component="h2"
                variant="h3"
                color="text.primary"
                gutterBottom
            >
                {heading}
            </Typography>

            <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                    mb: 4,
                    fontWeight: 'normal',
                    mx: 'auto',
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                }}
            >
                {body}
            </Typography>
        </Box>
    );
}