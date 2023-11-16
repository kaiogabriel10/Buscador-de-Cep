import { useState } from "react"


function Componente1({resposta}){

    const [Cep , setCep] = useState("")

    const AtzdoInput = (event) => {
        setCep(event.target.value)
    }

    const FecthData = () => {
    fetch(`https://viacep.com.br/ws/${Cep}/json/`)
        .then((response) => response.json())
        .then((data) => resposta(data))
        .catch((err) => console.error(err))
    } 



    return(
        <div>
            <input type="Number" value={Cep} onChange={AtzdoInput}></input>
            <button onClick={FecthData}>Buscar</button>
        </div>
    )
}

export default Componente1