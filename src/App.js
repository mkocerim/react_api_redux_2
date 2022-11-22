import { HashRouter, Route, Routes } from 'react-router-dom';



import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Login from '../src/pages/login/login'
import Categories from '../src/pages/categories/categories'
import Services from '../src/pages/services/services'
import Register from './pages/register/register';


function App() {
  return (
    <div className="container py-3">

      <Header/>


      <HashRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route  path ="login" element = {<Login/>}/>
          <Route  path ="register" element = {<Register/>}/>
          <Route  path ="categories" element = {<Categories/>}/>
          <Route  path ="services" element = {<Services/>}/>



          
        </Routes>
      </HashRouter>




  
      <Footer/>




    </div>

  )

    
}

export default App;
