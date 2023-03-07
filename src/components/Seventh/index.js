import './style.scss'
import barImg from '../../assets/left_side_colors.png'
import logoImg from '../../assets/Walker_World_White.png'
import avartar1 from '../../assets/avartar1.jpg'
import avartar2 from '../../assets/avartar2.jpg'
import avartar3 from '../../assets/avartar3.jpg'
function seventh() {
  return (
    <div className='seventh'>
      <img src={barImg} className="seventh-bar"/>
      <div className='seventh-left' style={{position:"absoloute"}}>
        <img src={logoImg} className="seventh-logo"/>
        <div className='seventh-left-top-bar'>

        </div>

        <div className='seventh-title'>
          The Team
        </div>

        <div className='seventh-desc'>
          <ul>
            <li>
               Senior Game Development Team
            </li>
          </ul>
        </div>

        <div className='seventh-left-bottom-bar'>

        </div>
      </div>
      <div className='seventh-right'>
        <div className='seventh-right-back'>
            <div className='fourth_layer1' style={{position:"absolute",opacity:"0.8"}}></div>
            <div className='seventh_photo'>
              <svg className='photo_back' style={{ marginTop:"15%", marginLeft:"5%"}}></svg>
              <div className='seventh_photo-left'>
                <img src={avartar1} className="seventh-logo"/>
                <p style={{color:"white",textAlign:"center"}}>HENRIK <br/>JOHANSSON</p>
                <p style={{color:"#00ccff",textAlign:"center",fontSize:"1.5vw"}}>Technical Director</p>
                <ur>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Game Director at Remedy Entertainment.
                  </li>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Executive Director Producer at Embark Studies.
                  </li>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Creative Director, Producer and Designer at Electronic Arts(EA)
                  </li>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Lead Game Designer at Rovio
                  </li>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Multiplayer platform Product Manager at Terraplay Systems.
                  </li>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Worked on games like ARC Raiders, Angry Birds 2, Mirror's Edge and more.
                  </li>
                </ur> 
              </div>
              <div className='seventh_photo-center'>
                <img src={avartar2} className="seventh-logo"/>
                <p style={{color:"white",textAlign:"center"}}>ADAM <br/>ORTH</p>
                <p style={{color:"#00ccff",textAlign:"center",fontSize:"1.5vw"}}>Senior VP of Product Growth</p>
                <ur>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Sr.Director of Production at Sony Music
                  </li>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Creative Director at Microsoft(Xbox)
                  </li>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Creative Director at LucasArts
                  </li>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Lead Game Designer at Sony(Playstation)
                  </li>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Lead Designer at Electronic Arts(EA)
                  </li>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Senior Designer at PopCap Games
                  </li>
                </ur> 
              </div>
              <div className='seventh_photo-right'>
                <img src={avartar3} className="seventh-logo"/>
                <p style={{color:"white",textAlign:"center"}}>DAN <br/>TONKIN</p>
                <p style={{color:"#00ccff",textAlign:"center",fontSize:"1.5vw"}}>Senior VP of Product Growth</p>
                <ur>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Co-Founder of IronMonkey Studies/EA Melbourne
                  </li>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Over 25 years in games development across all platforms.
                  </li>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Has held several studio Art Director roles
                  </li>
                  <li style={{color:"white",textAlign:"center", fontSize:"1vw"}}>
                    Knowledge and expertise from pre-production design to asset creation and Techincal art to run-time implementation for commercial games
                  </li>
                </ur> 
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default seventh;
