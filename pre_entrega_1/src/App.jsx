import './App.css'
import NavBar from './Componentes/NavBars/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting='En Construcción' />
        </div>
    )
}
    export default App;