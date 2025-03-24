import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Button from './components/Button'
import Landing from './pages/Landing'
import Books from './pages/Books'
import SingleBooks from './pages/SingleBooks'
import AddBook from './pages/AddBook'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Landing/>} />
      <Route path='/books'element={<Books/>} /> 
      <Route path='/single-books'element={<SingleBooks/>} />
      <Route path='/add-book'element={<AddBook/>} />
      <Route path='/'element={<Landing/>} />
    </Routes>
    </BrowserRouter>

  )
}

export default App
