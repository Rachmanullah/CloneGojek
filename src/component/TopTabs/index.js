import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SearchNormal1, User } from 'iconsax-react-native'

const MyTopTabs = () => {
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: '#EFEFEF',
                flexDirection: 'row',
                alignItems: 'center',
                color: 'black',
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderRadius: 50,
                width: '75%',
                marginRight: 20,
            }}>
                <SearchNormal1 size="32" color="#FF8A65" />
                <TextInput placeholder='Cari Layanan, Makanan' placeholderTextColor='black' style={styles.textInput} />
            </View>
            <View style={{
                backgroundColor: '#EFEFEF',
                borderRadius: 50,
                padding: 5,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
            }}>
                <User size="25" color="#FF8A65" />
            </View>
        </View>
    )
}

export default MyTopTabs

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignContent: 'space-between',
        flexWrap: 'wrap',
    },
    textInput: {
        fontFamily: 'TitillumWeb-Regular',
        color: 'black'
    }
})