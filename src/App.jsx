import Header from './components/header and footer/Header'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/header and footer/Footer'
function App() {

  return (
    <>
      <div className="max-w-screen mx-auto manrope-normal">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
