import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Örnek email ve şifre
    const correctEmail = 'test@example.com'
    const correctPassword = '123456'

    // Kullanıcının girdiği bilgilerle doğrulama yapalım
    if (email === correctEmail && password === correctPassword) {
      Alert.alert("Başarıyla Giriş Yaptınız!", "Hoş geldiniz!")
      // Burada asıl giriş işlemi yapılır, örneğin ana sayfaya yönlendirilir
    } else {
      Alert.alert("Hata", "Geçersiz email veya şifre. Lütfen tekrar deneyin.")
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Seyahat <Text style={styles.titleHighlight}>Günlüğüm</Text></Text>
      <Text style={styles.subtitle}>Hesabınıza giriş yapın</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Hesap Oluştur</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36, // Daha büyük font boyutu
    fontWeight: 'bold',
    color: '#7B2CBF',
    textAlign: 'center', // Ortalamak için
  },
  titleHighlight: {
    color: '#D6336C',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#0FD4C3',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    alignSelf: 'center',
  },
  registerButtonText: {
    color: '#38B2AC',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Login