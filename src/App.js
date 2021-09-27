
import './App.css';
import Menu from './componentes/navbar/navbar'
import cartWidget from './componentes/cartWidget/cartWidget'
import itemListContainer from "./componentes/listContainer/itemListContainer"

function App() {
  return (
    <div className="App">
        <Menu/>
        <cartWidget/>
        <itemListContainer
          saludo="Hola coder"
          greeting="Angel"
        />
    </div>
    
  );
}

export default App;
