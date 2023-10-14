import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SubMainFeatured = ({ MyImages, Title, Color }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <View style={{
                    backgroundColor: Color,
                    padding: 4,
                    borderRadius: 10,
                }}>
                    <Image source={MyImages} style={styles.MyImage} />
                </View>
                <Text style={styles.MyTitle}>{Title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SubMainFeatured

const styles = StyleSheet.create({
    contianer: {
        borderRadius: 10,
        overflow: 'hidden',
        shadowOpacity: 100,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 7.50,
        // elevation: 1,
        width: '20%',
        marginHorizontal: 2,
        marginBottom: 15,
        alignItems: 'center',
    },
    MyImage: {
        width: 50,
        height: 50,
    },
    MyTitle: {
        fontFamily: 'TitilliumWeb-Regular',
        textAlign: 'center',
        color: 'black'
    }
})