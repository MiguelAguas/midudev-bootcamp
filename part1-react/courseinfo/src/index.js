import React from 'react'
import ReactDOM from 'react-dom'


// así estaba implementado el componente originalmente
//
// const Header = (props) => {
//   return <h1>{props.course}</h1>
// }
//
// este componente(Header), es tan cortito que podríamos llevarlo al siguiente nivel
// usando la desestructuración en JavaScript.
// ¿Qué es la desestructuración?
// Es extraer una propiedad de un objeto directamente.
// ¿Cómo hacemos esto de la desestructuración?
// Usamos una constante para extraer la propiedad

// one liner
//**********
// esto lo que indica es que tienes una función 
// que lo que devuelve es lo primero que está evaluando
// one liner o forma corta
// const Header = ({course}) => <h1>{course}</h1>

//esta es la forma normal o larga
const Header = (props) => {
  return <h1>{props.course}</h1>
}
  
   






const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10 
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course}/>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))