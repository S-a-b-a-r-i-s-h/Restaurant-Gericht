import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin:"2rem 0" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Veniam cupiditate facere at perferendis exercitationem 
        excepturi porro quisquam nemo dolorum ex.
      </p>
      <button type='button' className='custom__button'>Explore Now</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header-image" />
    </div>
  </div>
);

export default Header;
