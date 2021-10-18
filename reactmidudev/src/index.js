import ReactDOM from 'react-dom';


const rootElement = document.getElementById("root");

const App = (props) => {
  return <h1>Contador inicial: {props.contadorInicial} </h1>
}

//Puedes declararlo así: le pasas directamente el document.getElementById("root")
/* ReactDOM.render(
    <App />,
  document.getElementById('root')
); */

// O puedes declararte una const rootElement donde guardes el document.getElementById
 
let contador = 1

//vamos a crear una función que refresque la app cada cierto tiempo
//veamos...
//renderizar la app cada segundo, o cada dos segundos, una funcion que le decimos cada
//cuanto tiempo queremos que se renderize
//así que declaramos la función refresh que lo que hace es renderizar la App

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
  contador++
  refresh()
}, 1000)