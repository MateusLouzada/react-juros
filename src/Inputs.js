import React from 'react';
import { TextField, Box } from '@mui/material';

export default function inputs({ handleMontante, handleJuros, handlePeriodo }) {

    const pegarMontante = (event) => handleMontante(parseFloat(event.target.value));
    const pegarJuros = (event) => handleJuros(parseFloat(event.target.value))
    const pegarPeriodo = (event) => handlePeriodo(event.target.value);


    return (

        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            mt: 7
        }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignSelf: "center", width: "50%", justifyContent: "space-evenly" }}>
                <TextField sx={{m: 0.5}} id="standard-basic" type="number" label="Montante Inicial" variant="standard" onChange={pegarMontante} />
                <TextField sx={{m: 0.5}} id="standard-basic" type="number" label="Taxa de Juros Mensal" variant="standard" onChange={pegarJuros} />
                <TextField sx={{m: 0.5}} id="standard-basic" type="number" label="Período(Meses)" variant="standard" onChange={pegarPeriodo} />
            </Box>
        </Box>

    );
}
