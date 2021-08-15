import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import img2 from '../../assets/images/banner.jpg';
import img3 from '../../assets/images/10.jpg';
import img4 from '../../assets/images/9.jpg';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const Slider = () => (
  <AutoPlaySwipeableViews>
    <div><img src="https://brilliantorchids.com/wp-content/uploads/2019/08/phalaenopsis-in-pots-e1567358644493.jpg" style={{objectFit:'fill',width:'100%',marginTop:'80px',height:'680px'}} alt='img' /></div>
    <div><img src="https://i.redd.it/a8b69zl7yi151.jpg" style={{objectFit:'fill',width:'100%',marginTop:'80px',height:'680px'}} alt='img' /></div>
    <div><img src="https://archdatam.com/wp-content/uploads/2020/03/House-Plant-00.jpg" style={{objectFit:'fill',width:'100%',marginTop:'80px',height:'680px'}} alt='img' /></div>
  
  </AutoPlaySwipeableViews>

);

export default Slider;





// const Slider = () => (

// <StyledSlide
//   media={<img src={img2} />}
//   title='This is a very cool feature'
//   subtitle='Just using this will blow your mind.'
//   mobile
//   landscape
// />
// );

// export default Slider;