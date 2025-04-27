import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const Create = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Yeni Seyahat Ekle</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Seyahat Başlığı</Text>
        <TextInput
          style={styles.input}
          placeholder="Paris'te Yaz"
        />
      </View>

      <View style={styles.row}>
        <View style={[styles.inputGroup, { flex: 1 }]}>
          <Text style={styles.label}>Konum</Text>
          <TextInput
            style={styles.input}
            placeholder="Paris, Fransa"
          />
        </View>

        <View style={[styles.inputGroup, { flex: 1 }]}>
          <Text style={styles.label}>Tarih</Text>
          <TextInput
            style={styles.input}
            placeholder="GG/AA/YYYY"
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Seyahat Türü</Text>
        <TextInput
          style={styles.input}
          placeholder="Plaj, Dağ, Şehir, Yol Gezisi,Sırt Çantalı"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Açıklama</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Macera detaylarını yazın..."
          multiline
        />
      </View>

      <View style={styles.uploadBox}>
        <Text style={styles.uploadText}>
          Buradan görsel ekleyebilirsiniz
        </Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.buttonText}>Görsel Yükle</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Seyahati Kaydet</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796b',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#b2dfdb',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
  uploadBox: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#80cbc4',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#e0f2f1',
    marginBottom: 20,
  },
  uploadText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: '#26a69a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#00796b',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Create;
