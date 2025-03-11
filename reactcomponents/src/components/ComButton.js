import { Badge, badgeClasses, Button, IconButton, Stack, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import { styled } from '@mui/system';


const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function ComButton() {
  return (
    <>
    <Stack direction="row" spacing={2} display="flex" justifyContent="center" alignContent="center" marginTop="30vh">

        <Button variant="text">Text</Button>
        <Button variant='outlined' size="small" endIcon={<DeleteIcon/>}>Delete </Button>
        <Button variant='contained' size="large" startIcon={<SendIcon/>}>Send</Button> 

    </Stack>

    <Stack direction="row" spacing={2} display="flex" justifyContent="center" alignContent="center" marginTop="50px">

        <Tooltip title="Click to see loading">
            <IconButton aria-label="delete" badgeContent={2} color="primary" overlap="circular" > <DeleteIcon/> </IconButton>
            <CartBadge badgeContent={2} color="primary" overlap="circular" />
        </Tooltip>
        
    </Stack>
    </>
  )
}
