import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import SellList from './SellList'
function App() {

  return (
    <div style={{ padding: 30}}>
      <SellList
        img={["//thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/1040/a361ea9f2bcd71c916b1eca1b90844f009a9d4d7f40f681978033fdc1163.jpg","//thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/da86/f3d462666c6828c0e15a95d83191ed9f49323aafe6b50ab3bba1bfb2e849.jpg","//thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/8020/1a48f0944dc09e0992c23a519a62165dac58a421909f7876f84fde347ec1.jpg"]}
        name={['신라면 120g, 10개','육개장 사발면 86g, 6개','짜파게티 140g, 5개']}
        count={[10,6,5]}
        price={[7800,4680,4280]}
        eaPrice={[780,780,856]}
        tage="내일(월) 도착 보장"
      />
    </div>
  )
}

export default App
