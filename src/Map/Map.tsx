import React from "react"
import { View, StyleSheet } from "react-native"
import MapView, { Marker, Region } from "react-native-maps"

const LatLongDelta = 0.015;
const UniversityOfMarylandRegion : Region = {
    latitude: 38.987081,
    longitude: -76.9436006,
    latitudeDelta: LatLongDelta,
    longitudeDelta: LatLongDelta
}


export const Map: React.FC = ({}) => {
    return <View style={styles.container}>
        <MapView style={styles.map} initialRegion={UniversityOfMarylandRegion}>
            <Marker
                key={"xrc"}
                coordinate={{ latitude: 38.990793245453666, longitude: -76.93637497878876 }}
                title={"XR Club"}
            />
        </MapView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: "100%",
        height: "100%"
    }
})