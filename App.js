import { StatusBar } from 'expo-status-bar';
import styles from './Styles/styles';
import { 
  Text,
  View,
  FlatList
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Watching from './Components/Watching';
import WatchLater from './Components/WatchLater';
export default function App() {
  
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Watching">
        <Tab.Screen name="Watch Later" component={WatchLater} />
        <Tab.Screen name="Watching" component={Watching} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

