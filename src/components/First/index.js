import './style.scss'
import barImg from '../../assets/left_side_colors.png'
import logoImg from '../../assets/Walker_World_White.png'
import topImg from '../../assets/top.png'
import bottomImg from '../../assets/bottom.png'
import backVideo from '../../assets/back.mp4'
import firstVideo from '../../assets/first.mp4'

function First() {
  return (
    <div className='first'>
      <img src={barImg} className="first-bar"/>
      <div className='first-left'>
        <img src={logoImg} className="first-logo"/>
        <div className='first-left-top-bar'>

        </div>

        <div className='first-title'>
          Walker <br />World
        </div>

        <div className='first-desc'>
          We are building the next evolution of gaming giving power and value back to the player.
        </div>

        <div className='first-left-bottom-bar'>

        </div>
      </div>
      <div className='first-right'>
        <video src={backVideo} autoPlay={true} loop muted />
        <div className='first-right-back'>
          <img src={topImg} className="top">
          </img>
          
          <video src={firstVideo} autoPlay={false} controls loop muted />
        </div>
        <img src={bottomImg} className="bottom" />
      </div>
    </div>
  );
}

export default First;
