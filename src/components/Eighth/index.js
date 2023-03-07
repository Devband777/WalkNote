import './style.scss'
import barImg from '../../assets/left_side_colors.png'
import logoImg from '../../assets/Walker_World_White.png'
import eighthImg from '../../assets/eighth.jpeg'

function eighth() {
  return (
    <div className='eighth'>
      <img src={barImg} className="eighth-bar" />
      <div className='eighth-left'>
        <img src={logoImg} className="eighth-logo" />
        <div className='eighth-left-top-bar'>

        </div>

        <div className='eighth-title'>
          Background
        </div>

        <div className='eighth-desc'>
          <ul>
            <li>
              First 3D animated, full body and fully rigged collection on Ethereum.
            </li>
            <li>
              4 collections minted, all sold out.
            </li>
            <li>
              $3.5M revenue to date.
            </li>
            <li>
              Outlier Ventures alumni.
            </li>
            <li>
              VASP license (Gibraltar).
            </li>
            <li>
              $2M token investment round in May 2022
            </li>
            <li>
              Started early building out a AAA experienced team.
            </li>
          </ul>
        </div>

        <div className='eighth-left-bottom-bar'>

        </div>
      </div>
      <div className='eighth-right'>
        <div className='eighth-right-back'>
          <img src={eighthImg} className="top">
          </img>
        </div>
      </div>
    </div>
  );
}

export default eighth;
