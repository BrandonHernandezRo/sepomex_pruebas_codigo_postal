import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export  function SelectColonias(props) {
  const array_of_cp = [props.colonias]
  return (
    <div>   
      <Box sx={{ minWidth: 120 }}>
        <FormControl >
          <InputLabel id="slc-caso-label">Colonia/Fraccionamiento/Barrio</InputLabel>
          <Select
            labelId="slc-caso-label"
            label="Colonia/Fraccionamiento/Barrio"
            id="slc-caso"
            defaultValue= '0'
            onChange = {props.selecciona}
            size="small"
            sx={{
              width: 240,
              background: 'white',
            }}
          >  
            <MenuItem value={'0'} disabled>Selecciona una opción</MenuItem>

            {array_of_cp[0].map(cp =>{
              return (
                  <MenuItem value={cp.id} key = {cp.id}>{cp.SEP_Asenta}</MenuItem> 
              )
            })}
          </Select>
        </FormControl>
      </Box>
      
    </div>

  );
}