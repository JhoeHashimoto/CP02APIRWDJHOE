import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css'
import Fotos from "./componentes/Fotos";
import Posts from "./componentes/Posts";
import Usuarios from "./componentes/Usuarios";
import Home from "./componentes/Home";
function App(){
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-6xl font-bold" >CHECKPOINT JHOE HASHIMOTO RM553831</header>
        <nav>
          <ul className="flex justify-center space-x-4 flex-grow bg-blue-500 text-orange p-4 text-3xl semi-bold">
            <li><Link to='/' className="hover:text-blue-900 font-semibold">HOME</Link></li>
            <li><Link to='/posts' className="hover:text-blue-800 font-semibold">POSTS</Link></li>
            <li><Link to='/usuarios' className="hover:text-blue-800 font-semibold">USUÁRIO</Link></li>
            <li><Link to='/fotos' className="hover:text-blue-800 font-semibold">FOTOS</Link></li>
          </ul>
        </nav>
        <main className="flex-grow bg-blue-300">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/posts" element={<Posts/>}></Route>
            <Route path="/fotos" element={<Fotos/>}></Route>
            <Route path="/usuarios" element={<Usuarios/>}></Route>
          </Routes>
        </main>
        <footer className="bg-gradient-to-r from-blue-800 to-blue-500 text-white p-4">
          <p>JHOE YOSHIO KOCHI HASHIMOTO 553831</p>
          <p>https://github.com/JhoeHashimoto</p>
        </footer>
      </div>
      </BrowserRouter>
  )
}

export default App
