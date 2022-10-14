
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'


const columns = [
  { field: 'SEP_CodPostal', headerName: 'Codigo Postal', width: 200 },
  { field: 'SEP_Tipo_Asenta', headerName: 'Asentamiento', width: 180 },
  { field: 'SEP_Asenta', headerName: 'Colonia', width: 180 },
  { field: 'SEP_Municipio', headerName: 'Municipio', width: 180 },
  { field: 'SEP_Ciudad', headerName: 'Ciudad', width: 180 },
]

const CompDavid = () => {

  const [tableData, setTableData] = useState([])


  useEffect(() => {
    fetch("http://127.0.0.1:8000/Sepomex/Listado_Codigos_Postales?format=json")
      .then((data) => data.json())
      .then((data) => setTableData(data))
    
  }, [])

  console.log(tableData);

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={tableData }
        columns={columns}
        pageSize={12}
        onSelectionModelChange={({ selectionModel }) => {
        }}
      />
    </div>
  )
}

export default CompDavid