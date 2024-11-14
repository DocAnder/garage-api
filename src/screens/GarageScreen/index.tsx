import { Text, View } from "react-native";
import { styles } from "./style";
import CardView from "../../components/CardView";

export default function GarageScreen(){
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.corner}></View>
                <View style={[styles.corner, styles.topRigth]}></View>
                <View style={[styles.corner, styles.bottomLefth]}></View>
                <View style={[styles.corner, styles.bottomRigth]}></View>                            
                <CardView />
            </View>
        </View>
    )
}