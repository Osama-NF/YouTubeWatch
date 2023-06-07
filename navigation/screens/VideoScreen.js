import { 
  Text,
  View
} from 'react-native';


export default function VideoScreen(props) {
  
  console.log(props)
  return (
    <View>
        <Text>
          This is video screen
        </Text>
        <Text>Title: {props.route.params.video}</Text>
        <Text>Last: {props.route.params.last}</Text>
    </View>
    );
}

