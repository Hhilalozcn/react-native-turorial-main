import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const trips = [
  {
    id: 1,
    title: 'Paris Macerası',
    location: 'Paris, Fransa',
    date: '15 Nisan 2024',
    tag: 'Şehir Turu',
    image: require('../../assets/images/imagePlaceholder.jpg'),
    comments: 5
  },
  {
    id: 2,
    title: "New York'ta Hafta Sonu",
    location: 'New York City, ABD',
    date: '2023-09-22',
    comments: 1,
    tag: 'City',
    image: require('../../assets/images/newyork.jpeg') // Added missing image
  },
  {
    id: 3,
    title: "İsviçre Alpleri'nde Yürüyüş",
    location: 'Interlaken, İsviçre',
    date: '2023-06-10',
    comments: 0,
    tag: 'Mountain',
    image: require('../../assets/images/isvicre.jpeg') // Added missing image
  }
]

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Seyahat <Text style={styles.titleHighlight}>Günlüğüm</Text></Text>
      <Text style={styles.subtitle}>Dünya çapındaki maceralarınızı takip edin ve paylaşın</Text>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Yeni Seyahat Ekle</Text>
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        {trips.map((trip) => (
          <View key={trip.id} style={styles.card}>
            <Image 
              source={trip.image}
              style={styles.imagePlaceholder}
            />
            <Text style={[styles.tag, styles.tagPosition]}>{trip.tag}</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{trip.title}</Text>
              <Text style={styles.cardLocation}>{trip.location}</Text>
              <Text style={styles.cardDate}>📅 {trip.date}</Text>
              <Text style={styles.cardComment}>💬 {trip.comments} yorum</Text>
            </View>
          </View>
        ))}
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff'
  },
  image: {
    width: 300, // Görselin genişliği
    height: 200, // Görselin yüksekliği
    borderRadius: 10, // Köşeleri yuvarlatma
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7B2CBF',
  },
  titleHighlight: {
    color: '#D6336C'
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16
  },
  addButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#0FD4C3',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginBottom: 20
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  cardContainer: {
    flexDirection: 'column',
    gap: 20
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3
  },
  imagePlaceholder: {
    height: 160,
    backgroundColor: '#ccc',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10
  },
  tag: {
    backgroundColor: '#FF6B6B',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12
  },
  tagPosition: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  cardContent: {
    padding: 12
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#38B2AC'
  },
  cardLocation: {
    color: '#555',
    marginVertical: 4
  },
  cardDate: {
    color: '#666',
    fontSize: 12
  },
  cardComment: {
    color: '#666',
    fontSize: 12,
    marginTop: 4
  }
})

export default Home
