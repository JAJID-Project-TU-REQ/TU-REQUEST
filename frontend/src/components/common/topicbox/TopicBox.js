import React from 'react'
import { Grid, Typography, Box } from '@mui/material'

const TopicBox = (props) => {
  return (
    <div>
        <Grid>
          <Box sx={{display:"flex", width: props.width, flexGrow: 1}}>
            <Typography variant='h6' sx={{ backgroundColor: "#902923", borderRadius: 4, padding: props.padding, color: '#FFFFFF'}}>
                {props.text}
            </Typography>
          </Box>
        </Grid>
    </div>
  )
}

export default TopicBox
