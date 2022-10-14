import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./estilos.css";

const CompVero = () => {
  //setear los hooks useState
  const [codigos, setCodigos] = useState([]);
  const [search, setSearch] = useState("");

  //función para traer los datos de la API
  const URL = "http://127.0.0.1:8000/Sepomex/Listado_Codigos_Postales";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    //console.log(data)
    setCodigos(data);
  };

  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //metodo de filtrado 1
  const results = !search
    ? codigos
    : codigos.filter((dato) =>
        dato.SEP_CodPostal.toLowerCase().includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    showData();
  }, []);

  //renderizamos la vista
  return (
    <>
      <div id="div1">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                type="text"
                label="Código Postal"
                variant="outlined"
                value={search}
                onChange={searcher}
              />
            </Grid>
            <Grid item xs={12}>
              <div id="div2">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">Código Postal</TableCell>
                        <TableCell align="right">Asentamiento</TableCell>
                        <TableCell align="right">Tipo Asentamiento</TableCell>
                        <TableCell align="right">Municipio</TableCell>
                        <TableCell align="right">Estado</TableCell>
                        <TableCell align="right">Ciudad</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {results.map((cp) => (
                        <TableRow
                          key={cp.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="right">
                            {cp.SEP_CodPostal}
                          </TableCell>
                          <TableCell align="right">{cp.SEP_Asenta}</TableCell>
                          <TableCell align="right">
                            {cp.SEP_Tipo_Asenta}
                          </TableCell>
                          <TableCell align="right">
                            {cp.SEP_Municipio}
                          </TableCell>
                          <TableCell align="right">{cp.SEP_Estado}</TableCell>
                          <TableCell align="right">{cp.SEP_Ciudad}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};
export default CompVero;
