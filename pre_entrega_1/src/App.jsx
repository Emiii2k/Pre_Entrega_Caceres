import './App.css'
import NavBar from './Componentes/NavBars/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartWidget from './Componentes/CartWidget/cartWidget'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/product/:id' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/cart/' element={<CartWidget />} />
            </Routes>
        </BrowserRouter>
        
    )
}
export default App