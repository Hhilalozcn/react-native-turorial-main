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
  id: string;
  title: string;
  location: string;
  date: string;
  tag: string;
  imageUrl: string;
  comments: number;
}

const Home = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const snapshot = await getDocs(collection(db, "trips"));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Trip[];
        setTrips(data);
      } catch (error) {
        console.error("Veriler alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#7B2CBF" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Seyahat <Text style={styles.highlight}>Günlüğüm</Text>
      </Text>

      {trips.length === 0 ? (
        <Text style={styles.noTrips}>Henüz seyahat yok</Text>
      ) : (
        trips.map((trip) => (
          <View key={trip.id} style={styles.card}>
            <Image
              source={{ uri: trip.imageUrl || "https://via.placeholder.com/300" }}
              style={styles.image}
            />
            <Text style={styles.tag}>{trip.tag || "Etiket Yok"}</Text>
            <View style={styles.content}>
              <Text style={styles.tripTitle}>{trip.title}</Text>
              <Text style={styles.location}>{trip.location}</Text>
              <Text style={styles.date}>📅 {trip.date}</Text>
              <Text style={styles.comments}>💬 {trip.comments ?? 0} yorum</Text>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#7B2CBF",
  },
  highlight: {
    color: "#D6336C",
  },
  noTrips: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
    color: "#777",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginVertical: 10,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 160,
  },
  tag: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#FF6B6B",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
  },
  content: {
    padding: 12,
  },
  tripTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#38B2AC",
  },
  location: {
    color: "#555",
    marginVertical: 4,
  },
  date: {
    fontSize: 12,
    color: "#666",
  },
  comments: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
});

export default Home;
