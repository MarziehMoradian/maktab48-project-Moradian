import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import img2 from '../../assets/images/9.jpg';
import img3 from '../../assets/images/7.jpg';
import img4 from '../../assets/images/8.jpg';
const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const KeySidbar = () => (
  <BindKeyboardSwipeableViews>
      <div><img src={img2} style={{objectFit:'fill'}}/></div>
    <div><img src={img3} style={{objectFit:'fill'}}/></div>
    <div><img src={img4}style={{objectFit:'fill'}}/></div>
  </BindKeyboardSwipeableViews>
);

export default KeySidbar;