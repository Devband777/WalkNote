import backImage from '../assets/4.png'
import markImage from '../assets/Walker_World_White.png'
import avartar1 from '../assets/avartar1.jpg'
import avartar2 from '../assets/avartar2.jpg'
import avartar3 from '../assets/avartar3.jpg'
import backvideo from '../assets/backvideo.mp4'
import colorline from '../assets/left_side_colors.png'
function Sixth() {
  return (
    <div className='page-container'>
    <video style={{position:"absolute"}}>
      <source src={backvideo} type="video/mp4"  autoplay={true} loop muted/>
    </video>
      <div className='fourth_layer1' style={{position:"absolute",opacity:"0.8"}}>
      </div>
    <div className='row' style={{position:"absolute"}}>
      <div className='col-md-3' style={{padding:"5%"}}>
          <img src={markImage}/>
          <div>
          <svg id="1" style={{backgroundColor:"#00ccff",marginTop:"20%",position:"absolute"}} height="20px" width="3vw"></svg>
            <p style={{color:"white",fontSize:"5.2vw",fontWeight:600,fontFamily:"Arial Black",marginTop:"5.2vw"}}>The Team</p>
            <h3 style={{color:"white"}}> </h3>
          </div>
      </div>
      <div className='col-md-9' style={{padding:"5%"}}>
        <div className='row'>
          <div className='col-md-3'>
            <img src={avartar1} class="img-thumbnail rounded-circle" alt="Cinque Terre" width="2.6vw" height="50px"/>
          </div>
          <div className='col-md-3'>
            <img src={avartar2} class="img-thumbnail rounded-circle" alt="Cinque Terre" width="2.6vw" height="50px"/>
          </div>
          <div className='col-md-3'>
            <img src={avartar3} class="img-thumbnail rounded-circle" alt="Cinque Terre" width="2.6vw" height="50px"/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <h1 style={{color:"white",textAlign:"center"}}>HENRIK <br/>JOHANSSON</h1>
          </div>
          <div className='col-md-3'>
            <h1 style={{color:"white",textAlign:"center"}}>ADAM<br/> ORTH</h1>
          </div>
          <div className='col-md-3'>
            <h1 style={{color:"white", textAlign:"center"}}>DAN <br/>TONKIN</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <p style={{color:"#00ccff",textAlign:"center",fontSize:"1.5vw"}}>Technical Director</p>
          </div>
          <div className='col-md-3'>
            <p style={{color:"#00ccff",textAlign:"center",fontSize:"1.5vw"}}>Creative Director</p>
          </div>
          <div className='col-md-3'>
            <p style={{color:"#00ccff",textAlign:"center",fontSize:"1.5vw"}}>Game Economy Strategy</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <ur>
              <li style={{color:"white"}}>
                Principal Game Developer at Minecraft(Mojang) for 12 years.
                <ul>
                  <li style={{color:"white"}}>Aron was one of the first programmers at Minecraft and was instrumental in building the game from scratch.</li>
                </ul>
              </li>
              <li style={{color:"white"}}>
                Game Developer at King
                <ul>
                  <li style={{color:"white"}}>Aron came up with and developed the early versions of popular game Candy Crush.</li>
                </ul>
              </li>
            </ur>
          </div>
          <div className='col-md-3'>
            <ur>
              <li style={{color:"white"}}>
                Load Environment Artist at Electron Asts(EA).
              </li>
              <li style={{color:"white"}}>
                Senior Lighting Artist at Ublsoft, Avalanche & Weta Workshop.
              </li>
              <li style={{color:"white"}}>
                Created the Neal Stepenson:Snow Crash "Sward One'1/1NFT sold on auction through Sothebys for Lamlna1 and Weta Workshop."
              </li>
            </ur>
          </div>
          <div className='col-md-3'>
            <ur>
              <li style={{color:"white"}}>
                Principal Game Designer at Minecraft(Mojang)
              </li>
              <li style={{color:"white"}}>
                Senior Game Designer at DICE.
              </li>
              <li style={{color:"white"}}>
                Gameplay & Monetization Designer at Ubisoft.
              </li>
              <li style={{color:"white"}}>
                Worked on games like Battlefield 2042, Star Wars Battlefront 2, Battlefield V and more.
              </li>
              <li style={{color:"white"}}>
                Entrepreneur, author, and financial mindset coach.
              </li>
            </ur>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Sixth;
