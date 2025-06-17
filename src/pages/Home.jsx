import React from 'react'
import HomeSlider from '../Component/HomeSlider'
import ProductSlider from '../Component/ProductSlider'
import NewArrivals from '../Component/NewArrivals'
import OffersSection from '../Component/OffersSection'
import SmartphoneList from '../Component/SmartphoneList'
import Smartphone from '../Component/Smartphone'
import AudioProductList from '../Component/AudioProductList'
import PowerAccessories from '../Component/PowerAccessories'
import OppoFooter from '../Component/OppoFooter'




const Home = () => {
  return (
    <div>
       <HomeSlider/>
       <ProductSlider/>
       <NewArrivals/>
       <OffersSection/>
       <SmartphoneList/>
       <Smartphone/>
       <AudioProductList/>
       <PowerAccessories/>
       <OppoFooter/>
    </div>
  )
}

export default Home