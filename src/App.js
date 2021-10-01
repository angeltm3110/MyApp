
import './App.css';
import Menu from './componentes/navbar/navbar'
import CartWidget from './componentes/cartWidget/cartWidget'
import ItemListContainer from "./componentes/listContainer/itemListContainer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  return (
    <div className="App">
        <Menu/>
        <ItemListContainer
          saludo="Hola coder"
          greeting="Angel"
        />
    </div>
    
  );
}

export default App;
