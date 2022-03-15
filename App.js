import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, View, StatusBar, Button } from 'react-native';
import Footer from './src/components/Footer';
import Form from './src/components/Form';
import ResultCalculation from './src/components/ResultCalculation';
import colors from './src/utils/colors';



const App = () => {

  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [mes, setMes] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, seterrorMessage] = useState('');

  useEffect(() => {
    if(capital && interes && mes) onSubmit();
    else reset();
  }, [capital, interes, mes])
  

  const onSubmit = () => {
    reset();
    if (!capital || !interes || !mes) {
      seterrorMessage('Complete todos los campos por favor ! ')
    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -mes)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        total: (fee * mes).toFixed(2).replace('.', ',')
      })
    }
  };

  const reset = () => {
    seterrorMessage('');
    setTotal(null);
  }

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.texto}>Cotizador de prestamos</Text>
        <Form setCapital={setCapital} setInteres={setInteres} setMes={setMes} />
      </SafeAreaView>
      <ResultCalculation total={total} mes={mes} interes={interes} capital={capital} errorMessage={errorMessage} />

      <Footer onSubmit={onSubmit} />
    </>
  )
};


const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 240,
    marginBottom: 40,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'center'
  },
  texto: {
    color: "#E1E5F2",
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 50,
    marginTop: 20
  }
})




export default App;