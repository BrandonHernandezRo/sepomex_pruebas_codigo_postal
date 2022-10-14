import { TextFieldCP } from '../Tools/TextField'
import {SelectColonias} from '../Tools/SelectColonias'
import {useState, useEffect} from 'react';
import {getData} from '../../api/data'
 
function CompBrandon() {

  const [colonias, setColonias] = useState([])
  const [buttonName, setButtonName] = useState("Buscar")
  const [CodPostal, setCodPostal] = useState("")
  const [createSelect, setCreateSelect] = useState(false)
  const [SEP_Asenta, setSEP_Asenta] = useState([])

  const [SEP_Tipo_Asenta, setSEP_Tipo_Asenta] = useState("")
  const [SEP_Centro_Codigo, setSEP_Centro_Codigo] = useState("")
  const [SEP_Cod_Estado, setSEP_Cod_Estado] = useState("")
  const [SEP_Cod_ofi_central, setSEP_Cod_ofi_central]= useState("")
  const [SEP_Clv_Municipio, setSEP_Clv_Municipio] = useState("")
  const [SEP_Clv_Ciudad, setSEP_Clv_Ciudad] = useState("")
  const [SEP_fechaModificacion, setSEP_fechaModificacion] = useState("")
  const [SEP_nombreModifica, setSEP_nombreModifica] = useState("")
  const [SEP_Municipio, setSEP_Municipio] = useState("")
  const [SEP_Estado, setSEP_Estado] = useState("")
  const [SEP_Ciudad, setSEP_Ciudad] = useState("")


  const [errorState, setErrorState] = useState({ hasError: false })

  const handleSubmit = (e) => {
    e.preventDefault()
    if(CodPostal===""){
      alert('Ingresa un código postal')
 
    }else{
      // 1. render elements
       // 2. fetch API
       getData('http://127.0.0.1:8000/Sepomex/Listado_Codigos_Postales')
       .then( data => setColonias(data.filter( id => id.SEP_CodPostal  === CodPostal)))
       .catch(error => setErrorState({ hasError: true}))
      setButtonName("Buscando...")
    }
  }

const getInfoAsenta = (e) => {

  const dataColonia = parseInt(e.target.value)
  colonias.forEach(element => {
    if(dataColonia===element.id){
      setSEP_Municipio(element.SEP_Municipio)
      setSEP_Estado(element.SEP_Estado)
      setSEP_Ciudad(element.SEP_Ciudad)
      setSEP_Tipo_Asenta(element.SEP_Tipo_Asenta)
      setSEP_Centro_Codigo(element.SEP_Centro_Codigo)
      setSEP_Cod_Estado(element.SEP_Cod_Estado)
      setSEP_Cod_ofi_central(element.SEP_Cod_ofi_central)
      setSEP_Clv_Municipio(element.SEP_Clv_Municipio)
      setSEP_Clv_Ciudad(element.SEP_Clv_Ciudad)
      setSEP_fechaModificacion(element.SEP_fechaModificacion)
      setSEP_nombreModifica(element.SEP_nombreModifica)
    }
  });
}

useEffect(() => {
  console.log(colonias)
  if(colonias.length > 0){
    setCreateSelect(true)
    setButtonName("Buscar")
  }
},[colonias])

  return (
    <div style={{ alignItems: 'center',
    justifyContent: 'center'}}>
  <form>
        <div style={{textAlign: 'center', padding: '10px'}}>
          
          <TextFieldCP label={'Código Postal'} value={CodPostal} entradaValor={event => setCodPostal(event.target.value)} />
          <button onClick={handleSubmit}>{buttonName}</button>
          <button>Limpiar</button>
          <br></br>
          
          <br></br>
            { !createSelect ? null : <SelectColonias colonias={colonias} selecciona={getInfoAsenta}/> }
          <br></br>
        </div>
        <div style={{ textAlign: 'center'}}>
          <div >
            <TextFieldCP label={'Municipio'} readOnly={true} value={SEP_Municipio}/>
            <TextFieldCP label={'Estado'} readOnly={true} value={SEP_Estado}/>
            <TextFieldCP label={'Ciudad'} readOnly={true} value={SEP_Ciudad}/>
            <TextFieldCP label={'Tipo de asentamiento'} readOnly={true} value={SEP_Tipo_Asenta}/>
            <TextFieldCP label={'Código de centro'} readOnly={true} value={SEP_Centro_Codigo}/>
            <TextFieldCP label={'Código de Estado'} readOnly={true} value={SEP_Cod_Estado}/>
            <TextFieldCP label={'Código de Oficina Central'} readOnly={true} value={SEP_Cod_ofi_central}/>
            <TextFieldCP label={'Clave Municipio'} readOnly={true} value={SEP_Clv_Municipio}/>
            <TextFieldCP label={'Clave Ciudad'} readOnly={true} value={SEP_Clv_Ciudad}/> 
            <TextFieldCP label={'Fecha modificación'} readOnly={true} value={SEP_fechaModificacion}/> 
            <TextFieldCP label={'Nombre del modificador'} readOnly={true} value={SEP_nombreModifica}/> 
          </div>
        </div>
  </form>
    </div>
  );

}

export default CompBrandon;

