import './App.css';
import React, {useState} from 'react';
import Input from './Inputs';
import { Box } from '@mui/material';
import CardTotal from './CardTotal';

function App() {

  const [montante, setMontante] = useState(0);
  const [juros, setJuros] = useState(0);
  const [periodo, setPeriodo] = useState(0);

  const handleMontante = (montante) => setMontante(montante);
  const handleJuros = (juros) => setJuros(juros);
  const handlePeriodo = (periodo) => setPeriodo(periodo);

  return (
    <Box sx={{width: '100vw', height: '100vh'}}>
      <Input handleMontante={handleMontante} handleJuros={handleJuros} handlePeriodo={handlePeriodo} />
      <CardTotal montante={montante} juros={juros} periodo={periodo} />
    </Box>
  );
}

export default App;
