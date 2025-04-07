import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  TextInput
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const AddTaskScreen = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleAddTask = () => {
    // Here you would typically pass the new task back or save it
    if (title.trim()) {
      // Navigate back to the main screen
      router.back();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add</Text>
      </View>
      
      {/* Main Content - Add Task Form */}
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        
        <TextInput
          style={[styles.input, styles.detailsInput]}
          placeholder="Details"
          value={details}
          onChangeText={setDetails}
          multiline
        />
        
        <TouchableOpacity 
          style={styles.addButton}
          onPress={handleAddTask}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      
      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.footerTab} 
          onPress={() => router.push("/")}
        >
          <FontAwesome name="list" size={24} color="#F2722B" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.footerTab}>
          <FontAwesome name="check-square-o" size={24} color="#888" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.footerTab}
          onPress={() => router.push("/a_Login")}
        >
          <FontAwesome name="user" size={24} color="#888" />
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
    padding: 16,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  detailsInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 12,
    backgroundColor: '#f8f8f8',
  },
  addButton: {
    backgroundColor: '#F2722B',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
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
  }
});

export default AddTaskScreen;