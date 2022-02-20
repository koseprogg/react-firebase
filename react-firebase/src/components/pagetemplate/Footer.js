import React from "react"
import { Box, Container } from "@mui/material";

export default function Footer() {
    return (
        <footer>
            <Box px={{xs:2, sm:2}} py={{xs: 2, sm: 2}} bgcolor="#1976d2" color="white">
                <Container maxWidth="lg">
                    <Box textAlign="center" pt={{xs:2, sm:2}} pb={{xs:2, sm: 2}}>
                        © 2022 Abakus Technologies AS
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}