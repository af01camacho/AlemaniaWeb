import Navbar from '../components/Navbar/Navbar'
import Carrousel from '../components/Carrousel/Carrousel'
import Historia from '../components/sections/historia'
import Gobierno from '../components/sections/gobierno'
import Vida from '../components/sections/vida'
import Educacion from '../components/sections/educacion'

const Home = () => {
  return (
    <>
        <Navbar />
        <Carrousel />

        <Historia />
        <Gobierno />
        <Vida />
        <Educacion />
    </>
  )
}

export default Home