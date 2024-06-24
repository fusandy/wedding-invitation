
import landingPhoto from '../assets/landing-photo.jpg';
import flower from '../assets/flower-1.png';

import './style/wedding.scss';

const Wedding = () => {
  return (
    <div className='wedding-container'>
      <div className='landing-photo-wrapper'>
        <div className='landing-photo'>
          <img src={landingPhoto} alt='landing' />
        </div>
      </div>
      <div className='landing-text-wrapper'>
        <div className='name'>Charlie & Sandy</div>
        <div className='greeting-words'>Invite You To Celebrate With US</div>
        <div className='date'>Saturday, Sep. 14, 2024</div>
        <div className='location'>GUMGUM NOT ONLY BEER & WINGS NEIKE</div>
        <div className='flower'>
          <img src={flower} alt='flower'/>
        </div>
      </div>
    </div>
  )
}

export default Wedding