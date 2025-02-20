
import './App.css'
import Navbar from './component/navbar/Navbar'
import Banner from './component/banner/Banner'
import About from './component/about/About'
import Service from './component/services/Service'
import Mission_vision from './component/mission_vission/Mission_vision'
import Testimonial from './component/testimonial/Testimonial'
import Join_us from './component/join_us/Join_us'
import Contect from './component/contact_us/Contact'
import Footer from './component/footer/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Banner/>
      <About/>
      <Service/>
      <Mission_vision/>
      <Testimonial/>
      <Join_us/>
      <Contect/>
      <Footer/>
    </>
  )
}

export default App
