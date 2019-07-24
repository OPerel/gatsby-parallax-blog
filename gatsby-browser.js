// import { parallaxController } from 'react-scroll-parallax';

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation) {
    if (location.pathname !== prevLocation.pathname) {
      // console.log(location.pathname, prevLocation.pathname);
      return true;
    }
  }
}
