import {styles, listItemsStyle} from "../Styles/styles";
import {
    FlatList,
    Text,
    View,
    Image
} from "react-native";
import img from '../imgs/test.jpg'

export default function ListItems({data}) {

    const renderItem = ({item}) => {
        return (
            <View style={listItemsStyle.item}>

                <View style={listItemsStyle.textContainer}>
                    <Text style={listItemsStyle.text}>
                        {item.video}
                    </Text>
                </View>

                <View style={listItemsStyle.imageLastContainer}>

                    <View style={listItemsStyle.imgContainer}>
                        <Image source={img} style={listItemsStyle.img} resizeMode="center"/>
                    </View>

                    <View style={listItemsStyle.lastContainer}>
                        <Text style={listItemsStyle.last}>
                            {item.last}
                        </Text>
                    </View>

                </View>
                
            </View>
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
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<Separator/>}
        />
    )
}