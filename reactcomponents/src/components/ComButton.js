import { Autocomplete, Badge, badgeClasses, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, InputAdornment, MenuItem, Radio, RadioGroup, Rating, Select, Stack, Switch, TextField, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react'
import { styled } from '@mui/system';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteIcon from '@mui/icons-material/Favorite';


const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;
// const Btns = styled(Button)`
//   &.${buttonClasses.root} {
//     padding: 15px 35px;
//     background-color: purple;
//     color: white;
//     font-size: 18px;
//   }

//   &:hover {
//     background-color: darkviolet;
//     cursor: pointer;
//   }
// `;


export default function ComButton() {

  const [data, setData] = useState('');
  const [datas, setDatas] = useState([]);
  const [star, setStar] = useState(2);
  const [radData, setradData] = useState('')
  const [language, setLanguage] = useState([]);
  const [switchCondition, setChecked] = useState(false);
  const handlechange = (e) => {
    const index = language.indexOf(e.target.value);
    if (index === -1) {
      setLanguage([...language, e.target.value])
    } else {
      setLanguage(language.filter((item) => item !== e.target.value))
    }
  }
  const selectChange = (event) => {
    // const { target: { value } } = event;
    const value = event.target.value;
    setDatas(typeof value === 'string' ? value.split(',') : value);
  };
  const [values, setValues] = useState(null);
  const options = ['React', 'Vue', 'Angular'];
  return (
    <>

      <Stack direction="row" spacing={2} justifyContent="center" margin={5}>
        <Autocomplete sx={{ width: '100%' }}
          value={values}
          onChange={(event, newValue) => {
            setValues(newValue)

            console.log('event:', event);       // DOM Event
            console.log('newValue:', newValue); // সিলেক্ট করা মান
          }}
          options={options}
          renderInput={(params) => <TextField {...params} label="Framework" />}
        />
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center" margin={5} sx={{
        width: '100%', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Select label="language" value={datas} onChange={selectChange} multiple
          fullWidth sx={{
            width: '50%', display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <MenuItem value="Spanish">Spanish</MenuItem>
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="French">French</MenuItem>
        </Select>
      </Stack>


      <Stack direction="row" spacing={2} justifyContent="center" margin={5} sx={{ width: '50%' }}>
        {datas}
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="center" margin={5}>
        <FormControlLabel
          label="Dark Mode"
          control={
            <Rating
              value={star}
              precision={.2}
              onChange={(event, neewvalue) => {
                setStar(neewvalue)
              }}
              icon={<FavoriteIcon fontSize="inherit" color='error' />}
              emptyIcon={<FavoriteIcon style={{ opacity: 0.9 }} fontSize="inherit" color="primary" />}
            />
          }
        />
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="center" margin={5}>
        <FormControlLabel
          label="Dark Mode"
          control={
            <Switch
              checked={switchCondition}
              onChange={e => setChecked(e.target.checked)}
            />
          }
        />
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="center" margin={5}>
        {switchCondition ? "True" : "False"}
      </Stack>

      {/* Swtch End */}

      <Stack direction="row" spacing={2} display="flex" justifyContent="center" alignContent="center" marginTop="20vh">
        <FormControl>
          <FormLabel>Your Favourite language</FormLabel>
          <FormGroup>
            <FormControlLabel
              value="Spanish"
              label="Spanish"
              control={<Checkbox checked={language.includes('Spanish')} onChange={handlechange} />}
            />
            <FormControlLabel
              value="English"
              label="English"
              control={<Checkbox checked={language.includes('English')} onChange={handlechange} />}
            />
            <FormControlLabel
              value="Bangla"
              label="Bangla"
              control={<Checkbox checked={language.includes('Bangla')} onChange={handlechange} />}
            />
          </FormGroup>
        </FormControl>
      </Stack>


      <Stack>
        {language}
      </Stack>


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
            onChange={e => setData(e.target.value)}
            row
          >

            <FormControl
              value="Spanish"
              control={<Radio size='large' color='secondary' />}
              label="Spanish"
            />



            <FormControlLabel
              value='Spanish'
              control={<Radio size='large' color='secondary' />}
              label="Spanish"
            />

            <FormControlLabel
              value='German'
              control={<Radio size='large' color='secondary' />}
              label="German"
            />

            <FormControlLabel
              value='English'
              control={<Radio size='large' color='secondary' />}
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
