import { useEffect, useState } from "react"
import { url } from "./pages/url"
import axios from 'axios'

const App = () => {
  const [wizerds, setWizerds] = useState([])
useEffect(() => {
  getWizweds()
}, [])
  const getWizweds = () => {
  axios.get(url) 
  .then((res) => {
    console.log(res.data)
    setWizerds(res.data)

  }) .then((erro) => {
    console.log(erro)
    
  })
  
  }

  return (
    <>
    ola mundo
    </>
  )
}

export default App
