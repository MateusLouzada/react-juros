import React from 'react';
import { Box, Button, Card, Typography, CardContent } from '@mui/material';

export default function CardTotal({ montante, juros, periodo }) {

    const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Mês
            </Typography>
            <Typography>
            {montante}
            </Typography>
            <Typography>
            {juros}
            </Typography>
            <Typography>
            {periodo}
            </Typography>
          </CardContent>
        </React.Fragment>
      );

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '40%'
        }}>
            <Box sx={{ display: 'flex', alignSelf: "flex-start", width: "50%", justifyContent: "space-evenly" }}>
                <Card variant="outlined">{card}</Card>
            </Box>
        </Box>
    );
}
