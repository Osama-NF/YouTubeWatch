import { useState } from "react";
import {
    FlatList,
    Text,
    View
} from "react-native";
import data from "../scripts/data";

export default function WatchLater() {
    
    const renderItem = (item) => {
        return (
            <Text>{item.video}</Text>
        )
    }
    

    return (
        <View>
            <FlatList
            data={data}
            renderItem={renderItem}
            />
        </View>
        )
}