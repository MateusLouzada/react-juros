import React from 'react';
import { Box, Card, Typography, CardContent, Fade } from '@mui/material';

export default function CardTotal({ montante, juros, periodo }) {

  let cards = [];

  let saldoTotal = parseFloat(montante);
  let rendimento = 0;
  let porcentagem = 0;

  
  
  const calculo = () => {

    saldoTotal = saldoTotal + saldoTotal * (0.01 * parseFloat(juros));
    rendimento = saldoTotal * (0.01 * parseFloat(juros));
    saldoTotal > parseFloat(montante) ? porcentagem = ((saldoTotal / parseFloat(montante)) - 1) * 100 : porcentagem = ((parseFloat(montante) - saldoTotal) * 100) / parseFloat(montante);

    if(isNaN(porcentagem)) porcentagem = 0;
    
    if(isNaN(montante)) saldoTotal = 0;
  }

  const card = () => {
    for (let index = 1; index <= parseInt(periodo); index++) {
      calculo();
      const array = <React.Fragment key={index}>
        <Fade in={true}>
          <Card sx={{ display: 'flex',m: 1 , justifyContent: 'space-evenly' }} variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {index}
              </Typography>
              <Typography sx={saldoTotal > parseFloat(montante) ? {color: "success.main"} : {color: "error.main"}}>
                R$ {saldoTotal.toFixed(2)}
              </Typography>
              <Typography sx={rendimento >= 0 ? {color: "success.main"} : {color: "error.main"}}>
                 {rendimento > 0 ? '+' : ''}{rendimento.toFixed(2)}
              </Typography>
              <Typography sx={saldoTotal > parseFloat(montante) ? {color: "primary.main"} : {color: "error.main"}}>
                {porcentagem.toFixed(2)}%
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      </React.Fragment>;
      //console.log(array)
      cards.push(array)
    }

  };

  card();

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      mt: 7 
    }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignSelf: "flex-start", width: "50%", justifyContent: "space-evenly" }}>
        {cards}
      </Box>
    </Box>
  );
}
