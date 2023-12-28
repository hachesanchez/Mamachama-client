import 'bootstrap/dist/css/bootstrap.min.css'
import './MainApp.css'
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'



function MainApp() {

  return (
    <>
      <Navigation />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default MainApp
