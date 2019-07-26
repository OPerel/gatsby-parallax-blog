import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

export const wrapRootElement = ({ element }) => {
  return (
    <ParallaxProvider>
      {element}
    </ParallaxProvider>
  )
}


// export const onRouteUpdate = ({ location, prevLocation }) => {
  // if (prevLocation) {
  //   if (location.pathname !== prevLocation.pathname) {
  //     // console.log(location.pathname, prevLocation.pathname);
  //     return true;
  //   }
  // }
// }
