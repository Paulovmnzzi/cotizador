import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const ResultCalculation = ({ errorMessage, total, interes, capital, mes }) => {
    
    return (
        <View style={styles.content}>
            {total && (
                <ScrollView style={styles.boxResult}>
                    <Text style={styles.title}> Resultado </Text>
                    <View style={styles.value}>
                        <Text>Cantidad solicitada:</Text>
                        <Text> $ {capital}</Text>
                    </View>
                    <View style={styles.value}>
                        <Text>Interés:</Text>
                        <Text> % {interes}</Text>
                    </View>
                    <View style={styles.value}>
                        <Text>Plazo de devolución: </Text>
                        <Text> {mes} meses</Text>
                    </View>
                    <View style={styles.value}>
                        <Text>Pago mensual: </Text>
                        <Text> $ {total.monthlyFee} </Text>
                    </View>
                    <View style={styles.value}>
                        <Text>Pago total: </Text>
                        <Text> $ {total.total} </Text>
                    </View>
                </ScrollView>)}
            <View>
                <Text style={styles.error}> {errorMessage} </Text>
            </View>
        </View>

    )
}

export default ResultCalculation

const styles = StyleSheet.create({
    error: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 90
        
    },
    content: {
        marginHorizontal: 40,
    },
    value:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    }
})