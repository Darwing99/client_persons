import React, { useReducer } from 'react'
import FormInsert from './components/FormInsert'
import Header from './components/Header'
import Persons from './components/Persons'
import { personReducer } from './reducers/PersonsReducer'
 let person=[
    {
      id:"8972",
      TipoDocumento:"certificado",
      Documento:"basdhsa",
      Nombres:"DArwing",
      Apellidos:"Hernandez",
      Hobbie:"Jugar"
    },{
      id:"8972",
      TipoDocumento:"certificado",
      Documento:"basdhsa",
      Nombres:"DArwing",
      Apellidos:"Hernandez",
      Hobbie:"Jugar"
    }
  ]
const App = () => {
 
  const reducer=useReducer(personReducer,person)
  return (
    
    <div>
    <Header/>
    <FormInsert/>
    <Persons persons={person}/>


    </div>
  )
}

export default App