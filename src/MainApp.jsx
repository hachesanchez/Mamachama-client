import 'bootstrap/dist/css/bootstrap.min.css'
import './MainApp.css'
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import ScrollToTop from './ScrollToTop'


function MainApp() {

  return (
    <>
      <ScrollToTop>
        <Navigation />
        <AppRoutes />
        <Footer />
      </ScrollToTop>
    </>
  )
}

export default MainApp
