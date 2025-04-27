import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'

const Profil = () => {
  const user = {
    name: 'Hilal Özcan',
    email: 'hılalozcan@example.com',
    travelCount: 3,
    avatar: require('../../assets/images/avatar.jpeg'), // Yerel resim dosyası için require kullanın
    recentTrip: {
      title: "Bali'de Yaz",
      location: 'Bali, Endonezya',
      date: '2023-07-15',
    },
  }

  const handleEditProfile = () => {
    // Profil düzenleme işlevi
    console.log('Edit Profile Clicked')
  }

  const handleLogout = () => {
    // Çıkış yapma işlevi
    console.log('Logout Clicked')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profil Fotoğrafı ve Adı */}
      <View style={styles.profileHeader}>
        <Image 
          source={user.avatar} 
          style={styles.avatar} 
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      {/* Seyahat Sayısı */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Toplam Seyahat:</Text>
        <Text style={styles.statsValue}>{user.travelCount}</Text>
      </View>

      {/* En Son Seyahat */}
      <View style={styles.recentTripContainer}>
        <Text style={styles.recentTripTitle}>En Son Seyahatin:</Text>
        <Text style={styles.recentTrip}>{user.recentTrip.title}</Text>
        <Text style={styles.recentTripDetails}>{user.recentTrip.location} - {user.recentTrip.date}</Text>
      </View>

      {/* Profil Düzenleme Butonu */}
      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.editButtonText}>Profili Düzenle</Text>
      </TouchableOpacity>

      {/* Çıkış Yap Butonu */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7B2CBF',
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
  statsContainer: {
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 16,
    color: '#555',
  },
  statsValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#38B2AC',
  },
  recentTripContainer: {
    marginBottom: 24,
  },
  recentTripTitle: {
    fontSize: 16,
    color: '#555',
  },
  recentTrip: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7B2CBF',
  },
  recentTripDetails: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    backgroundColor: '#0FD4C3',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#D6336C',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default Profil
