import './style.scss'
import barImg from '../../assets/left_side_colors.png'
import logoImg from '../../assets/Walker_World_White.png'
import topImg from '../../assets/top.png'
import bottomImg from '../../assets/bottom.png'
import backVideo from '../../assets/back.mp4'
import thirdVideo from '../../assets/third.mp4'

function Third() {
  return (
    <div className='third'>
      <img src={barImg} className="third-bar"/>
      <div className='third-left'>
        <img src={logoImg} className="third-logo"/>
        <div className='third-left-top-bar'>

        </div>

        <div className='third-title'>
          Solution
        </div>

        <div className='third-desc'>
          <ul>
            <li>
               Giving power back to the players by offering them complete control and ownership of their assets.
            </li>
            <li>
                Building cross-game interoperability between differnt games and experiences.
            </li>
            <li>
              Creating a AAA quality, fun and engaging gameplay experience that traditional players are familiar and <u>comfortable with</u>.
            </li>
          </ul>
        </div>

        <div className='third-left-bottom-bar'>

        </div>
      </div>
      <div className='third-right'>
        <div className='third-right-back'>
          <video src={thirdVideo} controls/>
        </div>
      </div>
    </div>
  );
}

export default Third;
