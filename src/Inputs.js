import React from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/material'

export default function inputs() {
    return (


        <Box sx={{
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        }}>
            <Box sx={{ display:'flex', width: '60%', justifyContent: "space-around" }}>
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
        </Box>

    );
}
