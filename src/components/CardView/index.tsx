import { Button, Image, Text, View } from "react-native";
import { styles } from "./style";

import Logo from '../../../assets/logo.png'
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import BuyButton from "../../buttons/BuyButton";
import { useEffect, useState } from "react";
import { CarModel } from "./CardView.types";
import { handleNextItem, handlePreviousItem, loadCarData } from "./viewModel";


export default function CardView(){
    const renderCarDetail = () => (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.carName}>Lamborghini</Text>
            <Text style={styles.carBrand}>{carData?.carName}</Text>
        </View>
    )
    
    const renderCarImage = () => (
        <Image
            style={styles.image}
            source={{uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`}}
        />
    )
    
    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>        
            <Button title="<" color={"#01A6B3"} onPress={() => handlePreviousItem(carData, setCarData)}/>
            <Text style={styles.priceLabel}>{carData?.price}</Text>
            <Button title=">" color={"#01A6B3"} onPress={() => handleNextItem(carData, setCarData)}/>
        </View>
    );

    const [carData, setCarData] = useState<CarModel | null>(null);
    
    useEffect(() =>{
        (async() => {
            await loadCarData(1, setCarData)
        })();
    }, []);


    return (
    <View style={styles.imgContainer}>
        <View style={styles.logoContainer}>
            <Image style={styles.imgLogo} source={Logo}  />
        </View>
        {renderCarDetail()}
        {renderCarImage()} 
        <BuyButton />
        {renderPriceControls()}
    </View>
    )
}