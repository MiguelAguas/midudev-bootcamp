import ReactDOM from 'react-dom';
import { useState } from 'react';
//import App from "./App";

// O puedes declararte una const rootElement donde guardes el document.getElementById
const rootElement = document.getElementById("root");

 const App = (props) => {
  //let contador = 0

  //llamamos al useState y le pasamos como parámetro el valor inicial de este estado
  // en este caso; contador es igual a "0".
  
  // el estado, useState nos devuelve un array de 2 posiciones
  // donde la primera posición nos devuelve el valor del estado

  //const contadorValue = contador[0]

  // y donde la segunda posición nos devuelve un método, que al ejecutarlo
  // podemos actualizar el estado.

  //const updateContador = contador[1]

  // sabiendo todo esto
  // podemos usar una técnica de JavaScript llamada desestructuración.
  // como ya sabemos que devuelve un estado, hacemos lo siguiente...
// de una forma declarativa, estamos mostrando cosas en la UI
// una vez que sabes que en userState tienes un array con 2 elementos
// lo que hacemos es extraer diréctamente estas dos posicones donde están estos 2 elementos.

// esto : 
//******
// const contador = useState(0) */
// const contadorValue = contador[0]
// const updateContador = contador[1]
//*********************************** */

// es lo mismo que esto:
// contadorValue  el valor del estado
// setContador método, que al ejecutarlo podemos actualizar el estado.
// ****
  const [contadorValue, setContador] = useState(0)

  // lo de los intervalos es peligroso
  // puedes petar un navegador.
  //cada vez que actualizas un estado
  // lo que ocurre es que se vuelve a renderizar el componente
  // el cuerpo de return se vuelve a ejecutar
  //  y refleja esos cambios en la UI del usuario.
  // un componente se renderiza cada vez que cambia de estado
  // o cada vez que le llegan props nuevas..

  // error muy común
  // nunca jamas tienes que usar un setInterval de esta manera 
  // manejar estados sin setInterval
  // en el cuerpo de un componente no puedes manejar el estado con un setInterval.

  // se hace bien usando eventos
  // por ejemplo, un evento click
  // ponemos un botón que cada vez que hagamos click en él, el contador aumente.

  /* setInterval(() => {
    console.log(contadorValue);
    updateContador(contadorValue + 1)
  }, 10000) */

  // funciones helper
  // un componente puede crear funciones dentro de él mismo (helpers) o llamadas utilidades, funciones dentro del componente.

  // extraemos el eventHandler en una función
  const handleClick = () => {
    setContador(contadorValue + 1)
  }

  // creamos el helper para el botón de resetear contador
  const handleResetClick = () => {
    setContador(0)
  }

  // renderizado condicional
  // dependiendo de la evalución de algo, queremos renderizar una cosa u otra

  //para saber si un número es par, el resto de la división de ese número entre 2, tiene que ser 0.

  const isEven = contadorValue % 2 === 0


  return <>
      <h6>esto es un H6</h6>
      <h1>Contador inicial: {contadorValue} </h1>
      <p>{isEven ? "Es par" : "Es Impar"}</p>
      <p>botón que incrementa el contador: pulse por favor!</p>
      <button 
        onClick={handleClick}>
        Incrementar
      </button>
      <p>botón que resetea el contador: pulse por favor!</p>
      <button
        onClick={handleResetClick}
        >
          Reset
        </button>
      </>
  
}

//Puedes declararlo así: le pasas directamente el document.getElementById("root")
/* ReactDOM.render(
    <App />,
  document.getElementById('root')
); */
//vamos a crear una función que refresque la app cada cierto tiempo
//veamos...
//renderizar la app cada segundo, o cada dos segundos, una funcion que le decimos cada
//cuanto tiempo queremos que se renderize
//así que declaramos la función refresh que lo que hace es renderizar la App

//esto es un ejemplo para ver cómo funciona una app en React
//Pero no es una buena práctica de codificación ya que estamos renderizando la App entera
// Y eso , no es escalable, no da una buena performance, un buen rendimiento.
// react maneja el estado como un interruptor:
//la UI percibe ese estado como encendido o apagado
// en este caso, el estado es el número, el contador
// podemos aplicar lo mismo a un boton:
// estado de boton desactivado
// estado de boton que está cargando algo...

// hay que usar un estado en el propio componente
// y para eso usamos Hook, un gancho
// que nos permite ejecutar código en determinados lugares de nuestro componente
// para eso importamos el useState para poder jugar con los estados.

/* const refresh = () => {
  ReactDOM.render(
    <App contadorInicial={contador} />,
     rootElement
    );
} */

//vamos a usar un método llamado setInterval(): se le pasa una función como primer parámetro
// y como segundo parámetro se le pasa el tiempo en milisegundos que tiene que pasar para que
// se ejecute la función
/* setInterval(() => {
  console.log(contador);
  refresh()
  contador++
}, 1000) */

ReactDOM.render(
  <App />,
   rootElement
  );