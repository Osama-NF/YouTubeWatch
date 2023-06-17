import {listItemsStyle} from "../Styles/styles";
import * as React from 'react'
import {
    FlatList,
    Text,
    View,
    Image,
    Pressable,
    RefreshControl
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { addToDB } from "../scripts/db";
import * as SQLite from 'expo-sqlite'

export default function ListItems(props) {

    const Navigation = useNavigation()
    const [isRefreshing, setIsRefreshing] = React.useState(false)


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

    const handleRefresh = () => {
        setIsRefreshing(true)
        addToDB().then(setIsRefreshing(false))
    }

    return (
        <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<Separator/>}
        refreshControl={
            <RefreshControl
            onRefresh={handleRefresh}
            refreshing={isRefreshing}
            />
        }
        />
    )
}