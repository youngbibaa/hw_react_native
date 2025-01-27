import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BalanceScreen = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Ваш счет: 1000000$</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      fontWeight: 'bold',
    },
});

  