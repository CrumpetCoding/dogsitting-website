import { Box, Container, Typography, Button, Stack } from '@mui/material';

export default function HeroSection() {
    return (
        <Box
            sx={{
                backgroundColor: '#e6e6e6',
                pt: { xs: 8, sm: 12, md: 16 },
                pb: { xs: 8, sm: 12, md: 16 },
                textAlign: 'center',
            }}
        >
            <Container maxWidth="md">
                <Typography
                    component="h1"
                    variant="h2"
                    color="text.primary"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                        lineHeight: 1.2,
                    }}
                >
                    Design Websites Faster with Material UI
                </Typography>

                <Typography
                    variant="h5"
                    color="text.secondary"
                    sx={{
                        mb: 4,
                        fontWeight: 'normal',
                        maxWidth: '600px',
                        mx: 'auto', // Centers the paragraph horizontally
                        fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    }}
                >
                    Build beautiful, consistent, and highly responsive user interfaces.
                    Save development time by using pre-styled React components.
                </Typography>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    sx={{ mt: 2, justifyContent: "center" }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        disableElevation
                        sx={{ px: 4, py: 1.5 }}
                    >
                        Get Started
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        sx={{ px: 4, py: 1.5 }}
                    >
                        Live Demo
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}