import HomePage from './Home';
import ThingsILovePage from './ThingsILoveYou';
import ThingDetailsPage from './ThingDetails';

const screens = {
  free: {
    thingDetails: {
      title: 'Post',
      key: 'details',
      name: 'thingDetails',
      component: ThingDetailsPage,
      icon: 'heart',
      size: 28,
      defaultColor: 'grey',
      focusedColor: 'red',
    },
  },
  bottomTabs: {
    thingsILove: {
      title: '',
      key: 'screen-2',
      name: 'thingsILove',
      component: ThingsILovePage,
      icon: 'heart',
      size: 28,
      defaultColor: 'grey',
      focusedColor: 'red',
    },
    home: {
      title: '',
      key: 'screen-1',
      name: 'home',
      component: HomePage,
      icon: 'home',
      size: 28,
      defaultColor: 'grey',
      focusedColor: 'red',
    },
  }
};

export default screens;
