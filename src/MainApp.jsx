import 'bootstrap/dist/css/bootstrap.min.css'
import './MainApp.css'
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation'



function MainApp() {

  return (
    <>
      <Navigation />
      <AppRoutes />
    </>
  )
}

export default MainApp
