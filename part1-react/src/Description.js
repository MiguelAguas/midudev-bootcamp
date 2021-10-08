
// a los componentes se les pasan parámetros o props.
const Description = (props) => {
    console.log(props)
    return <h1>{props.description}</h1>
  }
  
export default Description
 