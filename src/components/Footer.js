import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

const Footer = ({onSubmit}) => {
  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity style={styles.button} activeOpacity={0.3} onPress={onSubmit} >
        <Text style={styles.text} >CALCULAR</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
  viewFooter: {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    backgroundColor: colors.PRIMARY_COLOR,
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  button:{
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    padding: 16,
    borderRadius: 20,
    width: "75%",
    alignItems: 'center'
  }
})