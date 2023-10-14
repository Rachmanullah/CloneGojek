import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EmptyWallet } from 'iconsax-react-native'
import SubFeatured from './SubFeatured'
import { IconsMore, IconsUpArrow, iconsFile } from '../../assets'

const GopayFeatured = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <EmptyWallet size="32" color="#2aacb8" variant="Bold" style={{ backgroundColor: '#EFEFEF', borderRadius: 10, padding: 10, alignSelf: 'center' }} />
                <View style={{ marginLeft: 10, }}>
                    <Text style={{ fontFamily: 'TitilliumWeb-Bold', color: 'black', fontSize: 20 }}>Rp.0</Text>
                    <Text style={{ fontFamily: 'TitilliumWeb-Regular', color: 'black', fontSize: 15 }}>0 Coins</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                <SubFeatured MyImage={IconsUpArrow} Title="Bayar" />
                <SubFeatured MyImage={iconsFile} Title="Riwayat" />
                <SubFeatured MyImage={IconsMore} Title="Lainnya" />
            </View>
        </View>
    )
}

export default GopayFeatured

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
    },
    labelIcons: {
        color: 'black',
        fontFamily: 'TitilliumWeb-Regular',
    }
})