import { Badge, badgeClasses, Button, IconButton, InputAdornment, Stack, TextField, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react'
import { styled } from '@mui/system';
import MailIcon from '@mui/icons-material/Mail';


const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;




export default function ComButton() {
  const [data, setData] = useState('');
  return (
    <>
      <Stack direction="row" spacing={2} display="flex" justifyContent="center" alignContent="center" marginTop="30vh">

        <Button variant="text">Text</Button>
        <Button variant='outlined' size="small" onClick={() => { alert('Alert for this btn') }} endIcon={<DeleteIcon />}>Delete </Button>
        <Button variant='contained' size="large" startIcon={<SendIcon />}>Send</Button>

      </Stack>

      <Stack direction="row" spacing={2} display="flex" justifyContent="center" alignContent="center" marginTop="50px">

        <Tooltip title="Click to see loading">
          <IconButton aria-label="delete" badgeContent={2} color="primary" overlap="circular" > <DeleteIcon /> </IconButton>
          <CartBadge badgeContent={2} color="primary" overlap="circular" />
        </Tooltip>

        <Tooltip title="Click to see loading">
          <Badge color="secondary" badgeContent={99}>
            <MailIcon />
          </Badge>
        </Tooltip>
        
      </Stack>

      <Stack direction="row" spacing={2} display="flex" justifyContent="center" alignContent="center" marginTop="50px">
        <TextField
          label="outlined"
          variant='outlined'
          helperText="This is input fild"
          type='text'
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  $
                </InputAdornment>
              )
            }
          }}

        />
     
        <TextField
        variant='outlined'
        label="Please write here"
        value={data}
        error={!data}
        helperText={!data ? 'requred this fild': 'done'}
        onChange={(e)=>setData(e.target.value)}
        />



        <TextField label="Filled" variant='filled' />
        <TextField label="standard" variant='standard' />

      </Stack>
    </>
  )
}
