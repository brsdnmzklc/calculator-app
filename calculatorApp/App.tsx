import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Button from './src/components/Button/Button';
import buttonValuesArray from './src/utils/buttonValuesArray';

function App(): JSX.Element {
  const [firstNum, setFirstNum] = useState('0');
  const [secondNum, setSecondNum] = useState('0');
  const [operator, setOperator] = useState();

  const calculator = value => {
    if (value === 'C') {
      setSecondNum('0');
      setFirstNum('0');
      setOperator();
    } else if (value === '+/-') {
      setFirstNum(Number(firstNum) * -1);
    } else if (value === '%') {
      setFirstNum(Number(firstNum) / 100);
    }
    else if (
      value === '/' ||
      value === 'x' ||
      value === '-' ||
      value === '+'
    ) {
      setOperator(value);
    } else if (operator) {
      setSecondNum(secondNum + value);
    } else {
      setFirstNum(firstNum + value);
    }
    if (value === '=') {
      if (operator === '+') {
        setFirstNum(Number(firstNum) + Number(secondNum));
        setSecondNum('0');
      }
      if (operator === '-') {
        setFirstNum(Number(firstNum) - Number(secondNum));
        setSecondNum('0');
      }
      if (operator === '/') {
        setFirstNum(Number(firstNum) / Number(secondNum));
        setSecondNum('0');
      }
      if (operator === 'x') {
        setFirstNum(Number(firstNum) * Number(secondNum));
        setSecondNum('0');
      }
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{Number(firstNum)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FlatList
          numColumns={4}
          data={buttonValuesArray}
          renderItem={({ item }) => (
            <Button
              title={item.value}
              backgrounColor={item.backgroundColor}
              onPress={calculator}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  resultContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  resultText: {
    color: '#fff',
    fontSize: 50,
  },
  buttonContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 60,
  },
});

export default App;
