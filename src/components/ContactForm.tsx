import { TextField, Button, Checkbox, Container, Paper } from "@mui/material";

export default function ContactForm() {
    return (
        <Container
            maxWidth="xs">
            <Paper
                elevation={10}
                sx={{
                    marginTop: 8,
                    padding: 2,
                    display: 'grid',
                    gridTemplateColumns: 'auto auto',
                    gap: '10px'
                }}
            >
                <TextField id="first-name" label="First Name" variant="outlined" />
                <TextField id="surname" label="Last Name" variant="outlined" />
                <TextField id="email" label="Email" variant="outlined" />
            </Paper>
        </Container>
    )
}