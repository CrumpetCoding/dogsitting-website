import { Box, Grid, Typography } from '@mui/material';

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
                px: { xs: 4, sm: 12, md: 16 },
                textAlign: 'left',
                borderRadius: theme => theme.shape.borderRadius,
            }}
        >
            <Grid container spacing={6}
                sx={{
                    justifyContent: { xs: "center", md: "space-around" },
                    alignItems: "center",
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <Grid size={{ xs: 12, md: 4, lg: 6 }}>
                    <img src='src\images\dog.jpg' />
                </Grid>
                <Grid size={{ xs: 12, md: 8, lg: 6 }}>
                    <Typography
                        component="h2"
                        variant="h3"
                        color="text.primary"
                        gutterBottom
                        sx={{ gridArea: '1' }}
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
                            gridArea: '2',
                        }}
                    >
                        {body}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}