import { TextField, Button, Container, Paper } from "@mui/material";
import { useState } from "react";



export default function ContactForm() {
    return (
        <Container
            maxWidth='xs'
            sx={{ maxHeight: 'xs' }}
        >
            <Paper
                elevation={10}
                sx={{
                    marginTop: 3,
                    padding: 2,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridTemplateRows: 'repeat(3, 70px)',
                    gap: '8px'
                }}
            >
                <TextField id="first-name" label="First Name" variant="outlined" sx={{ gridArea: 1 / 1 / 2 / 2 }} />
                <TextField id="surname" label="Last Name" variant="outlined" sx={{ gridArea: 1 / 2 / 2 / 3 }} />
                <TextField id="email" label="Email" variant="outlined" sx={{ gridArea: 2 / 1 / 3 / 3, gridColumn: '1 / span 2' }}
                    type="email"
                />
                <TextField id="message" label="Message" variant="outlined" multiline rows={4} sx={{ gridArea: 3 / 1 / 4 / 3, gridColumn: '1 / span 2', gridRow: ' 3 / span 2', textWrap: 'wrap' }} />
                <Button id="submit" variant="contained" color="primary">Submit</Button>
            </Paper>
        </Container >
    )
}