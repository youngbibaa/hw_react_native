import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const user = {
    name: 'Бекжан Бибарыс',
    email: 'bekzhanbibarys@gmail.com',
    phone: '+7 (777) 777-77-77',
    address: 'г. Астана, ул. Астана, д. 10, кв. 5',
    age: 20,
    profession: 'Разработчик',
    company: 'ООО "Темка"',
  };

export const UserInfoScreen = () => (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Информация о пользователе</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Имя: </Text>
          {user.name}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Email: </Text>
          {user.email}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Телефон: </Text>
          {user.phone}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Адрес: </Text>
          {user.address}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Возраст: </Text>
          {user.age} лет
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Профессия: </Text>
          {user.profession}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Компания: </Text>
          {user.company}
        </Text>
      </View>
    </ScrollView>
);
  
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: '#f2f2f2',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    infoContainer: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    infoText: {
      fontSize: 16,
      marginBottom: 10,
    },
    label: {
      fontWeight: 'bold',
      color: '#333',
    },
});
  