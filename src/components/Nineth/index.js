import './style.scss'
import barImg from '../../assets/left_side_colors.png'
import logoImg from '../../assets/Walker_World_White.png'
import ninethImg from '../../assets/eighth.jpeg'

function nineth() {
  return (
    <div className='nineth'>
      <img src={barImg} className="nineth-bar" />
      <div className='nineth-left'>
        <img src={logoImg} className="nineth-logo" />
        <div className='nineth-left-top-bar'>

        </div>

        <div className='nineth-title'>
          Walker World
        </div>

        <div className='nineth-desc'>
          Walker World is a massive free to play open world 
          &nbsp; <strong>experience</strong> that consists of many
          different engaging <strong>activities</strong> such as
          land building, collaborative exploration quests and a
          multiplayer shooter.
        </div>

        <div className='nineth-left-bottom-bar'>

        </div>
      </div>
      <div className='nineth-right'>
        <div className='nineth-right-back'>
          <img src={ninethImg} className="top">
          </img>
        </div>
      </div>
    </div>
  );
}

export default nineth;
