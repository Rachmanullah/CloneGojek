import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SubMainFeatured from './SubMainFeatured'
import { IconsBag, IconsBasket, IconsBill, IconsBox, IconsCar, IconsCutlery, IconsMotor, IconsOther } from '../../assets'

const MainFeatured = () => {
    return (
        <View style={styles.container}>
            <SubMainFeatured MyImages={IconsMotor} Title='GoRide' Color='#c1f5cf' />
            <SubMainFeatured MyImages={IconsCar} Title='GoCar' Color='#c1f5cf' />
            <SubMainFeatured MyImages={IconsCutlery} Title='GoFood' Color='#f5b8bc' />
            <SubMainFeatured MyImages={IconsBox} Title='GoSend' Color='#c1f5cf' />
            <SubMainFeatured MyImages={IconsBasket} Title='GoMart' Color='#f5b8bc' />
            <SubMainFeatured MyImages={IconsBill} Title='GoTagihan' Color='#bee4ed' />
            <SubMainFeatured MyImages={IconsBag} Title='GoShop' Color='#f5b8bc' />
            <SubMainFeatured MyImages={IconsOther} Title='Lainnya' Color='#c7c3c3' />
        </View>
    )
}

export default MainFeatured

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '90%',
    }
})