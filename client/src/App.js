import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import {useSelector} from "react-redux"
import Spinner from './components/spinner';
import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoute from './components/PublicRoute';
function App() {
  const {loding} = useSelector(state => state.alerts)
  return (
   <>
    <BrowserRouter>
    {loding ? <Spinner/>:
    <Routes>
        <Route path='/' element={
          <ProtectedRoutes>
            <HomePage/>
          </ProtectedRoutes>
        }/>
        <Route path='/login' element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        }/>
        <Route path='/register' element={
          <PublicRoute>
            <Register/>
          </PublicRoute>
        }/>
      </Routes>
    
    }
      
    </BrowserRouter>
   </>
  );
}

export default App;