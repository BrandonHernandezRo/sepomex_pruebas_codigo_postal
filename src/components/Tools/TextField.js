import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function TextFieldCP(props) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    fullWidth
                    variant="outlined"
                    type={props.type}
                    label={props.label}
                    helperText={props.helperText}
                    size={props.size}
                    value={props.value}
                    onChange={props.entradaValor}
                    style={{
                      background: 'white',
                      width: 240,
                    }}
                    color="secondary"
                    disabled={props.disabled}
                />
            </div>
        </Box>
    );
}