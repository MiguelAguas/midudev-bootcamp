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
  console.log(props)
  return <h1>{props.course}</h1>
}
  
const Content = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.part1.name} {props.part1.exercises}
      </p>
      <p>
        {props.part2.name} {props.part2.exercises}
      </p>
      <p>
        {props.part3.name} {props.part3.exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.exercices1 + props.exercices2 + props.exercices3} </p>
  )
}
  

const App = () => {
  const course = 'Half Stack application development'
  const part1 = (
    {
      name : 'Fundamentals of React',
      exercises :10
    }
  )
  const part2 = (
    {
      name : 'Using props to pass data',
      exercises :7
    }
  )  
  const part3 = (
    {
      name : 'State of a component',
      exercises :14
    }
  )
    
  return (
    <>
      <Header course={course} />
      {/* <Content name={part1.name} exercices={part1.exercises} />
      <Content name={part2.name} exercices={part2.exercises} />
      <Content name={part3.name} exercices={part3.exercices} /> */}
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercices1={part1.exercises} exercices2={part2.exercises} exercices3={part3.exercises} />
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises} </p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))