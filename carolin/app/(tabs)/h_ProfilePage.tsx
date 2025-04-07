import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const ProfilePage = () => {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState('https://placekitten.com/200/200'); // Default placeholder image

  const handleSignOut = () => {
    // Handle sign out logic here
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Sign Out',
          onPress: () => {
            // Add your sign out logic here
            router.replace('/a_Login'); // Navigate to login page
          }
        }
      ]
    );
  };

  const changeProfileImage = async () => {
    // Request permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Please allow access to your photo library to change profile picture.');
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
     
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
     
      {/* Main Content */}
      <View style={styles.content}>
        {/* Profile Picture */}
        <TouchableOpacity onPress={changeProfileImage} style={styles.profileImageContainer}>
          <Image
            source={{ uri: profileImage }}
            style={styles.profileImage}
          />
          <View style={styles.editIconContainer}>
            <FontAwesome name="camera" size={16} color="white" />
          </View>
        </TouchableOpacity>
        
        {/* Sign Out Button */}
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutButtonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
     
      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.footerTab} 
          onPress={() => router.push("/(tabs)/c_ToDo")}
        >
          <FontAwesome name="list" size={24} color="#888" />
          <Text style={styles.footerTabText}>Tasks</Text>
        </TouchableOpacity>
       
        <TouchableOpacity 
          style={styles.footerTab} 
          onPress={() => router.push("/(tabs)/f_CompletedToDoPage")}
        >
          <FontAwesome name="edit" size={24} color="#888" />
          <Text style={styles.footerTabText}>Create</Text>
        </TouchableOpacity>
       
        <TouchableOpacity 
          style={styles.footerTab}
        >
          <FontAwesome name="user" size={24} color="#F2722B" />
          <Text style={styles.footerTabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F2722B',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  profileImageContainer: {
    position: 'relative', 
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  editIconContainer: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    backgroundColor: '#F2722B',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  signOutButton: {
    backgroundColor: '#F2722B',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  signOutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#F2722B',
  },
  footerTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerTabText: {
    fontSize: 12,
    marginTop: 2,
    color: '#888',
  }
});

export default ProfilePage;