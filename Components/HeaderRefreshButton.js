import {styles, listItemsStyle} from "../Styles/styles";
import {
    Button
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function HeaderRefreshButton() {

    const refresh = () => {
        console.log('refresh pressed')
    }

    return (
        <Button
        onPress={refresh}
        title='{<AntDesign name="sync" size={24} color="black" />}'
        color="#000"
        />
    )
}