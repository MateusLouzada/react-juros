import React, { useEffect } from 'react';
import { TextField, Box } from '@mui/material';

export default function inputs({ handleMontante, handleJuros, handlePeriodo }) {

    const pegarMontante = (event) => handleMontante(event.target.value);
    const pegarJuros = (event) => handleJuros(event.target.value);
    const pegarPeriodo = (event) => handlePeriodo(event.target.value);


    return (

        <Box sx={{
            display: 'flex',
            justifyContent: 'center',    
            width: '100%',
            height: '40%'
        }}>
            <Box sx={{ display: 'flex', alignSelf: "center", width: "50%", justifyContent: "space-evenly" }}>
                <TextField id="standard-basic" label="Montante Inicial" variant="standard" onChange={pegarMontante} />
                <TextField id="standard-basic" label="Taxa de Juros Mensal" variant="standard" onChange={pegarJuros}/>
                <TextField id="standard-basic" label="Período(Meses)" variant="standard" onChange={pegarPeriodo} />
            </Box>
        </Box>

    );
}
