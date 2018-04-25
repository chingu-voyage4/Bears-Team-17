import React from 'react'
import { Navigation, Mya } from './commonComp'

class HomePage extends React.Component {

render () {

return (
  <div className='wrapper'>

  <Navigation />

  <hr />
      <div style={{width:'100%',height:'600px',backgroundSize:'cover',backgroundImage:`url(${require('./headerImg2.jpg')})`,display:'flex',
      flexDirection:'column',justifyContent:'center',alignItems:'center',color:'white',fontSize:'28px'

    }}>

           <h1 style={{color:'white',margin:'0'}}>ZOEZI BOOK</h1>
           <h4 style={{color:'white'}}>Organise your Fitness Records</h4>
           <div className="signinUp">
              <Mya type="submit" linkStyle='buttonStyle' lnkhref="signin" linkText="SIGNIN"/>
              <Mya type="submit" linkStyle='buttonStyle' lnkhref="signup" linkText="JOIN"/>
           </div>
      </div>
      <div style={{height:'100px',padding:'20px',bordertop:'1px solid gray'}}>
      Thanks to <a href="https://unsplash.com">Beautifull Images| unsplash</a>
      </div>
  </div>
    )
  }

  TestClick =() =>{
    console.log('Test click')
  }
}

export default HomePage;
