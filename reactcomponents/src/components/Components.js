import { Box, Button, Divider, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'

export default function Components() {
    return (
        <>
            <Box sx={{
                margin: "120px", display: "block", '&:hover': {
                    backgroundColor: "secondary.main",
                },
            }} component='h3' bgcolor="primary.main"> This is my Box </Box>


            <Stack direction="column" spacing={2} p={2} divider=<Divider orientation='horizontal' flexItem /> >
                <Button variant="contained" bgcolor="primary.main">Button one</Button>
                <Button variant="contained" bgcolor="primary.main">Button two</Button>
            </Stack>


            <Container maxWidth="xl">
                <Typography fontFamily={700} fontSize={30} mb={2} mt="200px" bgcolor="primary.main" color='#fff'>Hellow World</Typography>
            </Container>

            <Container maxWidth="lg">
                <Typography fontFamily={700} fontSize={30} mb={2} bgcolor="primary.main" color='#fff'>Hellow World</Typography>
            </Container>

            <Container maxWidth="md">
              <Typography fontFamily={700} fontSize={30} mb={2} bgcolor="primary.main" color='#fff'>Hellow World</Typography>
           </Container>
              <Container maxWidth="sm">
              <Typography fontFamily={700} fontSize={30} mb={2}  bgcolor="primary.main" color='#fff'>Hellow World</Typography>
           </Container>
              <Container maxWidth="xs">
              <Typography fontFamily={700} fontSize={30} mb={2}  bgcolor="primary.main" color='#fff'>Hellow World</Typography>
           </Container>
              <Container fixed>
              <Typography fontFamily={700} fontSize={30} mb={2}  bgcolor="primary.main" color='#fff'>Hellow World</Typography>
           </Container>

        </>
    )
}
