import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Create = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = async () => {
    if (!title || !location || !date || !tag || !description) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }

    try {
      const travelData = {
        title,
        location,
        date,
        tag,
        description,
        imageUrl: "", // placeholder image
        comments: 0,
      };

      const docRef = await addDoc(collection(db, "trips"), travelData);
      console.log("Seyahat eklendi:", docRef.id);

      Alert.alert("Başarılı", "Seyahat başarıyla eklendi.");
      setTitle("");
      setLocation("");
      setDate("");
      setTag("");
      setDescription("");
    } catch (error) {
      console.error("Seyahat eklenirken hata oluştu:", error);
      Alert.alert("Hata", "Seyahat eklenemedi.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Yeni Seyahat Ekle</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Seyahat Başlığı</Text>
        <TextInput
          style={styles.input}
          placeholder="Paris'te Yaz"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.row}>
        <View style={[styles.inputGroup, { flex: 1 }]}>
          <Text style={styles.label}>Konum</Text>
          <TextInput
            style={styles.input}
            placeholder="Paris, Fransa"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        <View style={[styles.inputGroup, { flex: 1 }]}>
          <Text style={styles.label}>Tarih</Text>
          <TextInput
            style={styles.input}
            placeholder="GG/AA/YYYY"
            value={date}
            onChangeText={setDate}
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Seyahat Türü (Etiket)</Text>
        <TextInput
          style={styles.input}
          placeholder="Plaj, Dağ, Şehir vb."
          value={tag}
          onChangeText={setTag}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Açıklama</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Macera detaylarını yazın..."
          value={description}
          onChangeText={setDescription}
          multiline
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSave}>
        <Text style={styles.submitButtonText}>Seyahati Kaydet</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 50,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#00796b",
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#b2dfdb",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: "#00796b",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Create;
