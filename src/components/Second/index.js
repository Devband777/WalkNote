import './style.scss'
import barImg from '../../assets/left_side_colors.png'
import logoImg from '../../assets/Walker_World_White.png'
import topImg from '../../assets/top.png'
import bottomImg from '../../assets/bottom.png'
import backVideo from '../../assets/back.mp4'
import secondImg from '../../assets/second.png'

function Second() {
  return (
    <div className='second'>
      <img src={barImg} className="second-bar"/>
      <div className='second-left'>
        <img src={logoImg} className="second-logo"/>
        <div className='second-left-top-bar'>

        </div>

        <div className='second-title'>
          Problem
        </div>

        <div className='second-desc'>
          <ul>
            <li>
               In traditional gaming all hours, effort and money invested by the player is locked in one experience and can't be utilized after the plaer leaves the game.
            </li>
            <li>
            - Players are not able to bring their digital identity across games and are stuck in a silos where they dont own or control anything.
            </li>
            <li>
            - Blockchain gaming has bbeen met with skepticism by players and game developers alike and is struggling to break into the $255B video game market.
            </li>
          </ul>
        </div>

        <div className='second-left-bottom-bar'>

        </div>
      </div>
      <div className='second-right'>
        <div className='second-right-back'>
          <img src={secondImg} className="top">
          </img>
        </div>
      </div>
    </div>
  );
}

export default Second;
