import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";


export default function BuyButton(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text>Buy This</Text>
            </TouchableOpacity>
        </View>
    )
}