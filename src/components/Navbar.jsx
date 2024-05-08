import { Box, Stack, Typography, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import React from 'react'

const Navbar = ({ eventFire }) => {
  return (
    <Stack sx={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      boxShadow: '0 7px 10px #0009',
    }} >
      <Box >
        <Typography sx={{ color: '#000', fontWeight: '600', fontFamily: 'cursive', fontSize: '25px', marginLeft: '10px' }}>
          {/* Mr-H */}
          <span > HS</span>QUARE
        </Typography>
      </Box>
      <Box>
        <Button sx={{
          backgroundColor: '#000',
          color: '#fff',
          "&hover": {
            backgroundColor: 'red ',
            color: '#000 !important',
          }
        }}
          onClick={eventFire}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Stack>
  )
}

export default Navbar