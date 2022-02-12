import React from 'react';
import { Box, Card, Typography, CardContent, Fade } from '@mui/material';

export default function CardTotal({ montante, juros, periodo }) {

  let cards = [];

  const card = () => {
    for (let index = 0; index < periodo; index++) {
      const array = <React.Fragment>
        <Fade in={true}>
          <Card sx={{ display: 'flex', justifyContent: 'space-evenly' }} variant="outlined">
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
          </Card>
        </Fade>
      </React.Fragment>;
      cards.push(array)
    }

  };

  card();

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '40%'
    }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignSelf: "flex-start", width: "50%", justifyContent: "space-evenly" }}>
        {cards}
      </Box>
    </Box>
  );
}
