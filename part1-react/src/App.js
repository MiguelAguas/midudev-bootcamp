import './App.css';
import Mensaje from './Mensaje.js';
import Description from './Description';

//los componentes de React son funciones
//aunque también pueden ser clases
//pero es mejor usar funciones para hacer componentes
const App = () => {

  const mensaje = 'Hola Mundo Cruel'
  return (
    <div className='App'>
      <h1>hola hola</h1> 
      {mensaje + ' hola desde evaluación JSX'}
      <Mensaje color='yellow' message='Estamos trabajando'/>
      <Mensaje color='green' message='En un curso'/>
      <Mensaje color='blue' message='de React'/>
      <Description  description='Esto es una descripción'/>
    </div>
  ) 
}

//exporatamos por defecto la App para exponerla y que se pueda renderizar.
export default App;