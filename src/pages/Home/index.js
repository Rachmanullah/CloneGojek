import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BannerFood1, BannerFood2, BannerImages, BannerTokped } from '../../assets'
import { GopayFeatured, MainFeatured, MyTopTabs } from '../../component'

const Home = () => {
    return (
        <ScrollView >
            <View>
                <MyTopTabs />
            </View>
            <Image source={BannerImages} />
            <View style={{ top: -20 }}>
                <GopayFeatured />
            </View>
            <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
                <MainFeatured />
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 10, }}>
                <ScrollView horizontal>
                    <Image style={styles.MyBanner} source={BannerFood1} />
                    <Image style={styles.MyBanner} source={BannerFood2} />
                </ScrollView>
                <Text
                    style={{
                        fontFamily: 'TitilliumWeb-Bold',
                        fontSize: 20,
                        color: 'black'
                    }}
                >
                    Belanja Makin Hemat
                </Text>
                <Text
                    style={{
                        color: 'black',
                        fontFamily: 'TitilliumWeb-Regular'
                    }}
                >
                    Dapetin diskon dan harga spesialnya di Tokopedia sekarang sebelum kehabisan!
                </Text>
                <Image source={BannerTokped} style={{ width: '100%', objectFit: 'contain', height: 200 }} />
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    MyBanner: {
        width: 300,
        objectFit: 'contain',
        height: 200,
        marginEnd: 10
    }
})