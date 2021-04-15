import HomePage from './Home';
import ThingsILovePage from './ThingsILoveYou';

const screens = {
  home: {
    key: 'screen-1',
    name: 'home',
    component: HomePage,
    icon: 'home',
    size: 28,
    defaultColor: 'grey',
    focusedColor: 'red',
  },
  thingsILove: {
    key: 'screen-2',
    name: 'thingsILove',
    component: ThingsILovePage,
    icon: 'heart',
    size: 28,
    defaultColor: 'grey',
    focusedColor: 'red',
  },
};

export default screens;
