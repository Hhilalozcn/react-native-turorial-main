import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

interface Trip {
  id: string; // Firestore'dan gelen id string olur
  title: string;
  location: string;
  date: string;
  tag: string;
  imageUrl: string; // Firestore'da image'ı URL olarak tutuyoruz
  comments: number;
}

const Home = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "trips"));
        console.log("querySnapshot:", querySnapshot);
        const tripsData: Trip[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Trip[];
        setTrips(tripsData);
      } catch (error) {
        console.error("Veriler çekilirken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#7B2CBF" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Seyahat <Text style={styles.titleHighlight}>Günlüğüm</Text>
      </Text>
      <Text style={styles.subtitle}>
        Dünya çapındaki maceralarınızı takip edin ve paylaşın
      </Text>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Yeni Seyahat Ekle</Text>
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        {trips.map((trip) => (
          <View key={trip.id} style={styles.card}>
            <Image
              source={{ uri: trip.imageUrl }}
              style={styles.imagePlaceholder}
              resizeMode="cover"
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
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#7B2CBF",
  },
  titleHighlight: {
    color: "#D6336C",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
  },
  addButton: {
    alignSelf: "flex-end",
    backgroundColor: "#0FD4C3",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginBottom: 20,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cardContainer: {
    flexDirection: "column",
    gap: 20,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
  },
  imagePlaceholder: {
    width: "100%",
    height: 160,
    backgroundColor: "#ccc",
  },
  tag: {
    backgroundColor: "#FF6B6B",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
  },
  tagPosition: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#38B2AC",
  },
  cardLocation: {
    color: "#555",
    marginVertical: 4,
  },
  cardDate: {
    color: "#666",
    fontSize: 12,
  },
  cardComment: {
    color: "#666",
    fontSize: 12,
    marginTop: 4,
  },
});

export default Home;
