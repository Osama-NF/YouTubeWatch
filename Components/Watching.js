import { useState } from "react";
import {
    FlatList,
    Text,
    View
} from "react-native";
import data from "../scripts/data";

export default function Watching() {
    
    const renderItem = ({item}) => {
        return (
            <Text>{item.video}</Text>
        )
    }
    
    return (
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    )
}