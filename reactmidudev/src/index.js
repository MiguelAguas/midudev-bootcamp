import ReactDOM from 'react-dom';

//import App from "./App";



 const App = (props) => {
  return <h1>Contador inicial: {props.contadorInicial} </h1>
}

//Puedes declararlo así: le pasas directamente el document.getElementById("root")
/* ReactDOM.render(
    <App />,
  document.getElementById('root')
); */

// O puedes declararte una const rootElement donde guardes el document.getElementById
const rootElement = document.getElementById("root");

let contador = 0

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

const refresh = () => {
  ReactDOM.render(
    <App contadorInicial={contador} />,
     rootElement
    );
}

//vamos a usar un método llamado setInterval(): se le pasa una función como primer parámetro
// y como segundo parámetro se le pasa el tiempo en milisegundos que tiene que pasar para que
// se ejecute la función
setInterval(() => {
  console.log(contador);
  refresh()
  contador++
}, 1000)

ReactDOM.render(
  <App contadorInicial={contador} />,
   rootElement
  );