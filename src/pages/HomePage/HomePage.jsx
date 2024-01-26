import { Container } from 'react-bootstrap'
import './HomePage.css'
import Header from '../../components/HomeComponents/Header'
import Hacemos from '../../components/HomeComponents/Hacemos'

function HomePage() {

    return (

        <div className="Homepage">

            <Header />
            <Hacemos />

        </div>
    )
}

export default HomePage