import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
 
// Screens
import TabNavigation from './TabNavigation';
import VideoScreen from './screens/VideoScreen'

export default function StackNavigation() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TabNavigation'>

        <Stack.Screen name='TabNavigation' component={TabNavigation} options={{headerShown: false}}/>
        <Stack.Screen name='VideoScreen' component={VideoScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

