import 'bootstrap/dist/css/bootstrap.min.css'
import './MainApp.css'
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import ScrollToTop from './ScrollToTop'
// import { ParallaxProvider } from 'react-scroll-parallax'


function MainApp() {
  return (
    <>
      <ScrollToTop>
        {/* <ParallaxProvider> */}
        <Navigation />
        <AppRoutes />
        {/* </ParallaxProvider> */}
        <Footer />
      </ScrollToTop>
    </>
  )
}

export default MainApp
