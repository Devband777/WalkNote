import './style.scss'
import barImg from '../../assets/left_side_colors.png'
import logoImg from '../../assets/Walker_World_White.png'
import tenthImg from '../../assets/tenth.jpeg'

function tenth() {
  return (
    <div className='tenth'>
      <img src={barImg} className="tenth-bar" />
      <div className='tenth-left'>
        <img src={logoImg} className="tenth-logo" />
        
        <div className='tenth-pillar'>Pillar 1</div>
        <div className='tenth-left-top-bar' />
        <div className='tenth-title'>
          Ownership
        </div>

        <div className='tenth-desc'>
          Walker World is built around digital 
          assets(NFTs) that players own on the BlockChain.
          These assests can be traded inside the Walker World Marketplace
          or freely on decentralized exchanges such as Opensea.
        </div>

        <div className='tenth-left-bottom-bar'>

        </div>
      </div>
      <div className='tenth-right'>
        <div className='tenth-right-back'>
          <img src={tenthImg} className="top">
          </img>
        </div>
      </div>
    </div>
  );
}

export default tenth;
