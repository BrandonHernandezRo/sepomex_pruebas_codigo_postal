import { useState } from "react";
import { Button,TextField } from "@mui/material";


const Post_Paises = () => {

    const [CTRY_Pais, setCTRY_Pais] = useState("");

    const handleSubmit = () => {
        fetch('http://127.0.0.1:8000/paises/list/', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    
                }, 
                body: JSON.stringify(
                        {
                            CTRY_Pais,
                        })})}

    
    
        return (
            <form>
                <TextField label="Paises" onChange={event => setCTRY_Pais(event.target.value)}/>
                <br/>
                <Button onClick={handleSubmit}>Enviar los datos</Button>
    
                
            </form>
        )
    

   
}
export default Post_Paises;