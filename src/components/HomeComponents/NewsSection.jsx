import './NewsSection.css'
import imgEx from '../../assets/images/header-test.jpg'

function NewsSection() {

    return (

        <>
            <div className="news-section">

                <h1 className="news-title">
                    Últimos proyectos
                </h1>
                <div className="news-cards">
                    <img src={imgEx} alt="" />
                    <img src={imgEx} alt="" />
                    <img src={imgEx} alt="" />
                    <img src={imgEx} alt="" />
                    <img src={imgEx} alt="" />
                    <img src={imgEx} alt="" />
                    <img src={imgEx} alt="" />
                    <img src={imgEx} alt="" />

                </div>
            </div>

        </>

    )

}

export default NewsSection