import React, {useMemo} from 'react';
import {
  StatusBar,
  useColorScheme,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';
import ApplicationContext from './context/';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import screens from './screens';

const colors = {
  primary: 'rgb(255, 45, 85)',
  background: 'rgb(242, 242, 242)',
  card: 'rgb(255, 255, 255)',
  text: 'rgb(28, 28, 30)',
  border: 'rgb(199, 199, 204)',
  notification: 'rgb(255, 69, 58)',
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};

const tabConfig = {
  screenOptions: ({route}) => ({
    title: ' ',
    tabBarIcon: ({focused}) => {
      // You can return any component that you like here!
      return (
        <Feather
          style={{padding: 10}}
          name={screens.bottomTabs[route.name].icon}
          size={screens.bottomTabs[route.name].size}
          color={
            focused
              ? screens.bottomTabs[route.name].focusedColor
              : screens.bottomTabs[route.name].defaultColor
          }
        />
      );
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
};

function App() {
  const scheme = useColorScheme();

  const hide = () => Toast.hide();
  const show = (text1, text2, type, onPress = null) => {
    Toast.show({
      type, //'success | error | info',
      position: 'bottom', //'top | bottom',
      text1,
      text2,
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
      onShow: () => {},
      onHide: () => {}, // called when Toast hides (if `autoHide` was set to `true`)
      onPress: () => {
        if (!onPress) {
          Toast.hide();
          return;
        }
        onPress();
      },
      props: {}, // any custom props passed to the Toast component
    });
  };
  const contextStore = useMemo(
    () => ({
      message: {show, hide},
    }),
    [],
  );
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const BottomTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={tabConfig.screenOptions}
        tabBarOptions={tabConfig.tabBarOptions}>
        {Object.entries(screens.bottomTabs)
          .map(([_, v]) => v)
          .map(r => (
            <Tab.Screen key={r.key} name={r.name} component={r.component} />
          ))}
      </Tab.Navigator>
    );
  };

  const MainStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={BottomTabs} />
        {Object.entries(screens.free)
          .map(([_, v]) => v)
          .map(({key, name, component, title}) => (
            <Stack.Screen
              key={key}
              name={name}
              component={component}
              options={({navigation, route}) => ({
                title,
                headerBackTitleVisible: false,
                headerLeft: () => (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.goBack()}>
                    <Feather name={'chevron-left'} size={30} color={'black'} />
                  </TouchableOpacity>
                ),
              })}
            />
          ))}
      </Stack.Navigator>
    );
  };

  return (
    <ApplicationContext.Provider value={contextStore}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
          <StatusBar
            backgroundColor={colors.background}
            barStyle={scheme === 'dark' ? 'dark-content' : 'light-content'}
          />
          <MainStack />
          <Toast ref={ref => Toast.setRef(ref)} />
        </NavigationContainer>
      </SafeAreaView>
    </ApplicationContext.Provider>
  );
}

export default App;
