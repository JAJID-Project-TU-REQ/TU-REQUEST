import React from 'react'
import { Grid, Typography, Box } from '@mui/material'

const InformationBox = (props) => {
  return (
    <div>
        <Grid>
          <Box display="flex" alignItems="center">
            <Typography variant='h6' sx={{ mr: 2, backgroundColor: "#902923", borderRadius: '16px', padding: props.padding, color: '#FFFFFF' }}>
                {props.text}
            </Typography>
          </Box>
        </Grid>
    </div>
  )
}

export default InformationBox
