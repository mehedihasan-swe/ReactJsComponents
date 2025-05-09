import { Accordion,  AccordionDetails, AccordionSummary, Box, Button, Card, CardActions, CardContent, CardMedia,   ThemeProvider, Typography } from '@mui/material'

import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {  lightTheme,darkTheme} from './theme';
import Ctupo from './componentsStyle';
import '../New.css';





export default function Components() {
    const [theme, settheme]=useState(true)
    return (

        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        
   
            <Box bgcolor='bw.main'>

            <Ctupo p='90px' variant='h3'>Lorem Ipsum Header TEST</Ctupo>
            <Typography className='titles'>This is ClassName </Typography>
            <Button  className='custombtn' variant="contained" color="primary" onClick={() => settheme(!theme)}
        >
          Color Change
        </Button>
                <Box display='flex' flexDirection='column' justifyContent='center' sx={{padding:'80px 50px'}}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component='p' textAlign='left'>
                                IpsumLoremIpsumLoremIpsum LoremIpsumLor emIpsumLoremIpsumLoremIpsumLore mIpsumLoremIpsumLoremIpsumLorem</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component='p'>
                                IpsumLoremIpsumLoremIpsum LoremIpsumLor emIpsumLoremIpsumLoremIpsumLore mIpsumLoremIpsumLoremIpsumLorem</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography>Accordion 3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component='p'>
                                IpsumLoremIpsumLoremIpsum LoremIpsumLor emIpsumLoremIpsumLoremIpsumLore mIpsumLoremIpsumLoremIpsumLorem</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box display='flex' justifyContent='center' mt='120px'>
                    <Card sx={{ width: 500 }}>
                        <CardMedia component='img' height='250px' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5JUWxhme21VhVQO3FbWenJbsR8wyqf5FXQ&s' />
                        <CardContent>
                            <Typography variant='h4' >Lorem Ipsum Header</Typography>
                            <Typography>Lorem  Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum  </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" width="100%" gap='20px'>
                                <Button size='large' variant='contained'>Send</Button>
                                <Button sx={{
                                    backgroundColor: '#444',

                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: 'green'
                                    }
                                }} size='large' variant='contained'>Receive</Button>
                            </Box>
                        </CardActions>

                    </Card>



                </Box>

            </Box>

          

      
        </ThemeProvider>
    )
}
