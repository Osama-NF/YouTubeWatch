import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
// Screens
import Watching from './screens/WatchingScreen';
import WatchLater from './screens/WatchLaterScreen';
import Finished from './screens/FinishedScreen';

// Icons
import { AntDesign } from '@expo/vector-icons';


export default function TabNavigation() {
  
  const Tab = createBottomTabNavigator()

  return (
      <Tab.Navigator initialRouteName="Watching">

        <Tab.Screen name="Watch Later" component={WatchLater} 
        options={{tabBarIcon: () => <AntDesign name="clockcircleo" size={24} color="black" />}}/>

        <Tab.Screen name="Watching" component={Watching} 
        options={{tabBarIcon: () => <AntDesign name="eyeo" size={24} color="black" />}}/>

        <Tab.Screen name="Finished" component={Finished} 
        options={{tabBarIcon: () => <AntDesign name="checkcircleo" size={24} color="black" />}}/>

      </Tab.Navigator>
  );
}

