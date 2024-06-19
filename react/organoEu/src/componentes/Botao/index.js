import './Botao.css'

const Botao = props => {
  return (
      // children para mandar todo filho com a props
    <button className='botao'>
      {props.children} 
    </button>
  )
}

export default Botao