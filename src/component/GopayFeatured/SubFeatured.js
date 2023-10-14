import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SubFeatured = ({ MyImage, Title }) => {
    return (
        <TouchableOpacity
            style={{
                marginHorizontal: 5,
            }}
        >
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={MyImage} style={styles.image} />
                <Text style={styles.title}>{Title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SubFeatured

const styles = StyleSheet.create({
    image: {
        height: 30,
        width: 30,
    },
    title: {
        alignSelf: 'center',
        color: 'black'
    }
})