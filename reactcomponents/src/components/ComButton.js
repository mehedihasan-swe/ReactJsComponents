import { Badge, badgeClasses, Button, FormControl, FormControlLabel, FormLabel, IconButton, InputAdornment, Radio, RadioGroup, Stack, TextField, Tooltip } from '@mui/material'
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
  const [radData, setradData] = useState('')
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
          helperText={!data ? 'requred this fild' : 'done'}
          onChange={(e) => setData(e.target.value)}

        />

        <TextField label="Filled" variant='filled' />
        <TextField label="standard" variant='standard' />

      </Stack>

      <Stack direction="row" display='flex' justifyContent='center' alignContent='center' marginTop="50px" >
        <Radio
          value="Spanish"
          label="Spanish"
          checked={radData === "Spanish"}
          onChange={(e) => setradData(e.target.value)}
        />
        <Radio
          value="English"
          label="English"
          checked={radData === "English"}
          onChange={(e) => setradData(e.target.value)}
        />

      </Stack>
      <Stack>
        <p>{radData}</p>
      </Stack>

      <Stack direction='row' spacing={2} alignContent='center' marginTop="50px" justifyContent='center'>
        <FormControl>
          <FormLabel><p>Your language</p></FormLabel>
          <RadioGroup 
            name='language you speak'
            aria-labelledby='language_you_speak'
            value={data}
            onChange={e=>setData(e.target.value)}
          >
           <FormControlLabel 
           value='Spanish'
           control={<Radio/>}
           label="Spanish" 
           />

          <FormControlLabel 
           value='German'
           control={<Radio/>}
           label="German" 
          
           />

          <FormControlLabel 
           value='English'
           control={<Radio/>}
           label="English"
          
           />

          </RadioGroup>
        </FormControl>
      </Stack>
      <Stack direction='row' spacing={2} alignContent='center' marginTop="50px" marginBottom="200px" justifyContent='center'>
        <p>{data}</p>
      </Stack>
    </>
  )
}
