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
  
const Part = (props) => {
  console.log(props)
  return <p>{props.name} {props.exercices} </p>
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part name={props.part.name} exercices={props.part.exercises} />
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

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

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
      <Content part={part1} />
      <Content part={part2} />
      <Content part={part3} />
      {/* <Content parts={parts} /> */}
      <Total exercices1={part1.exercises} exercices2={part2.exercises} exercices3={part3.exercises} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))