import './App.css';
import React, { useState } from 'react';
import Input from './Inputs';
import { Box } from '@mui/material';
import CardTotal from './CardTotal';

function App() {

  const [montante, setMontante] = useState(0);
  const [juros, setJuros] = useState(0);
  const [periodo, setPeriodo] = useState(0);

  const handleMontante = (montante) => isNaN(montante) ? setMontante(0) : setMontante(montante);
  const handleJuros = (juros) => isNaN(juros) ? setJuros(0) : setJuros(juros);
  const handlePeriodo = (periodo) => isNaN(periodo) ? setPeriodo(0) : setPeriodo(periodo);

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: 'auto',
        color: 'info.main',
        mt: 4
      }}><h2>React Juros Compostos</h2> </Box>
      <Input handleMontante={handleMontante} handleJuros={handleJuros} handlePeriodo={handlePeriodo} />
      <CardTotal montante={montante} juros={juros} periodo={periodo} />
    </Box>
  );
}

export default App;
