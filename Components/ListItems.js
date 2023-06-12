import {styles, listItemsStyle} from "../Styles/styles";
import {
    FlatList,
    Text,
    View,
    Image,
    Pressable
} from "react-native";
import img from '../imgs/test.jpg'
import { useNavigation } from "@react-navigation/native";

export default function ListItems(props) {

    const Navigation = useNavigation()

    const renderItem = ({item}) => {
        return (
            <Pressable
            onPress={() => {
                Navigation.navigate('VideoScreen', item )
            }}
            >

                <View style={listItemsStyle.item}>

                    <View style={listItemsStyle.textContainer}>
                        <Text style={listItemsStyle.text}>
                            {item.video}
                        </Text>
                    </View>

                    <View style={listItemsStyle.imageLastContainer}>

                        <View style={listItemsStyle.imgContainer}>
                            <Image src={item.thumbnail} style={listItemsStyle.img} resizeMode="center"/>
                        </View>

                        <View style={listItemsStyle.lastContainer}>
                            <Text style={listItemsStyle.last}>
                                {item.last} \ {item.fullLength}
                            </Text>
                        </View>

                    </View>
                    
                </View>

            </Pressable>

        )
    }
    
    const Separator = () => {
        return (
            <View style={listItemsStyle.separator}>

            </View>
        )
    }

    return (
        <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<Separator/>}
        />
    )
}