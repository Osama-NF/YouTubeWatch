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

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Watching">
        <Tab.Screen name="المشاهدة لاحقاً" component={WatchLater} 
        options={{tabBarIcon: ()=> <MaterialIcons name="watch-later" size={24} color="black" />}}/>
        <Tab.Screen name="يُشاهَد" component={Watching} 
        options={{tabBarIcon: () => <AntDesign name="eye" size={24} color="black" />}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

