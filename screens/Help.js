import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HelpScreen = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Тыкайте кнопки</Text>
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


  