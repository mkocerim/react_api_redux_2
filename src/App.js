import { HashRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';



import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Login from '../src/pages/login/login'
import Categories from '../src/pages/categories/categories'
import Services from '../src/pages/services/services'
import Register from './pages/register/register';
import useApi from './Hooks/useApi';
import { SET_CATEGORIES } from './redux/reducers/categoriesReducer/categoriesReducer';


function App(props) {
  console.log('>> APP PROPS', props) 
  const api=useApi()

  if(props.categoriesState.initialized===false){

  api.get('https://api.adoptez1artisan.com/public/categories/listMainCategories')
  .then((response)=>{
    console.log('>>KATEGORI LISTESI CEVAP',response)
    
    const action = {
      type:SET_CATEGORIES,
      payload: {
        categories:response.data.data
      }

    }
    props.dispatch(action)
  })
  .catch((err)=>{
    console.error('>>KATEGORI LISTESI HATASI',err)
  })
}

  return (
    <div className="container py-3">

      <Header/>

      <HashRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route  path ="login" element = {<Login/>}/>
          <Route  path ="register" element = {<Register/>}/>
          <Route  path ="categories" element = {<Categories/>}/>
          <Route  path ="category/:slug" element = {<Categories/>}/>
          <Route  path ="services" element = {<Services/>}/>          
        </Routes>
      </HashRouter>
  
      <Footer/>

    </div>

  )
    
}
const mapStateToProps=(state)=>{


  return{
    ...state,


  }
}

export default connect(mapStateToProps)(App);
