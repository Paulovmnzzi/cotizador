import React, { useState, useRef } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import colors from '../utils/colors'
import { Picker } from '@react-native-picker/picker';


const Form = ({ setCapital, setInteres, setMes }) => {

    const [selectedPercent, setSelectedPercent] = useState();

    return (
        <>
            <View style={style.viewForm}>
                <View style={style.ViewInputs}>
                    <TextInput
                        onChange={e => setCapital(e.nativeEvent.text)}
                        style={style.Input}
                        keyboardType='numeric'
                        placeholder='Cantidad a solicitar'
                    />
                    <TextInput
                        onChange={e => setInteres(e.nativeEvent.text)}
                        style={[style.Input, style.InputPorcentaje]}
                        keyboardType='numeric'
                        placeholder='Interes %'
                    />
                </View>
                <Picker
                    style={pickerStyle.inputAndroid}
                    mode='dialog'
                    selectedValue={selectedPercent}
                    onValueChange={(itemValue, itemIndex) =>
                        (setSelectedPercent(itemValue), setMes(itemValue))
                    }>
                    <Picker.Item label='Seleccione el período' value={null} />
                    <Picker.Item label="3 meses" value="3" />
                    <Picker.Item label="6 meses" value="6" />
                    <Picker.Item label="12 meses" value="12" />
                    <Picker.Item label="18 meses" value="18" />
                </Picker>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: -50,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        height: 180,
        borderRadius: 30,
        justifyContent: 'center',
    },
    ViewInputs: {
        flexDirection: 'row',
    },
    Input: {
        height: 50,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.PRIMARY_COLOR,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        paddingHorizontal: 20,
        color: '#000'
    },
    InputPorcentaje: {
        width: "40%",
        marginLeft: 5
    }
})

const pickerStyle = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        paddingRight: 30,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "grey",
        backgroundColor: colors.PRIMARY_COLOR_DARK
    },
})

export default Form