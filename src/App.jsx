import React from 'react'
import Header from './component/header/Header.jsx';
import Banner from './component/banner/Banner.jsx';
import About from './component/about/About.jsx';
import Services from './component/services/Services.jsx';
import Clients from './component/clients/Clients.jsx';
import Choose from './component/choose/Choose.jsx';
import Hire from './component/hire/Hire.jsx';
import Techstack from './component/techstack/Techstack.jsx';
import Industries from './component/industries/Industries.jsx';
import Testimonial from './component/testimonial/Testimonial.jsx';
import MyForm from './component/form/MyForm.jsx';
import Footer from './component/footer/Footer.jsx';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Clients></Clients>
      <Choose></Choose>
      <Hire></Hire>
      <Techstack></Techstack>
      <Industries></Industries>
      <Testimonial></Testimonial>
      <MyForm></MyForm>
      <Footer></Footer>
    </div>
  )
}

export default App
