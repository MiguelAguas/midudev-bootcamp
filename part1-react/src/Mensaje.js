
// a los componentes se les pasan parámetros o props.
const Mensaje = (props) => {
    console.log(props)
    return <h3 style={{ color: props.color}}>{props.message}</h3>
  }
  
export default Mensaje
 