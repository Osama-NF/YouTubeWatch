import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
// Screens
import Watching from './screens/WatchingScreen';
import WatchLater from './screens/WatchLaterScreen';

// Icons
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function TabNavigation() {
  
  const Tab = createBottomTabNavigator()

  return (
      <Tab.Navigator initialRouteName="Watching">

        <Tab.Screen name="Watch Later" component={WatchLater} 
        options={{tabBarIcon: ()=> <MaterialIcons name="watch-later" size={24} color="black" />}}/>

        <Tab.Screen name="Watching" component={Watching} 
        options={{tabBarIcon: () => <AntDesign name="eye" size={24} color="black" />}}/>

      </Tab.Navigator>
  );
}

