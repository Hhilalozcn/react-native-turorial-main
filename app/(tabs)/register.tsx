import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// 🔧 AppNavigator'daki stack yapısıyla birebir uyumlu olmalı
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Create: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleRegister = () => {
    if (!fullName || !email || !password) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        // Kullanıcıya ad soyad bilgisini ekle (isteğe bağlı)
        await updateProfile(user, {
          displayName: fullName,
        });

        Alert.alert('Başarılı', 'Hesabınız oluşturuldu!');
        navigation.navigate('Login');
      })
      .catch((error) => {
        Alert.alert('Kayıt Hatası', error.message);
      });
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Kayıt <Text style={styles.titleHighlight}>Ol</Text>
      </Text>
      <Text style={styles.subtitle}>Yeni bir hesap oluşturun</Text>

      <TextInput
        style={styles.input}
        placeholder="Ad Soyad"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Kayıt Ol</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Zaten hesabım var. Giriş yap</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#319795',
    textAlign: 'center',
  },
  titleHighlight: {
    color: '#0FD4C3',
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
  registerButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginLink: {
    color: '#3182CE',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginButton: {
    alignSelf: 'center',
    padding: 10,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#38B2AC',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Register;
