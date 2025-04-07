import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

const EditToDoPage = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // Initialize state with data from params or default values
  const [taskName, setTaskName] = useState(params.title || 'Task 1');
  const [taskDetail, setTaskDetail] = useState(params.detail || 'detail 1');
  
  const handleUpdate = () => {
    // In a real app, you would update the task in your data store
    Alert.alert('Success', 'Task updated successfully');
    router.back();
  };
  
  const handleComplete = () => {
    // Mark task as complete and navigate back
    Alert.alert('Success', 'Task marked as complete');
    router.back();
  };
  
  const handleDelete = () => {
    // Confirm before deleting
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this task?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            // Delete logic here
            router.back();
          }
        }
      ]
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
     
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <FontAwesome name="chevron-left" size={18} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit</Text>
      </View>
     
      {/* Main Content */}
      <View style={styles.content}>
        {/* Task Name Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.taskNameInput}
            value={taskName}
            onChangeText={setTaskName}
            placeholder="Task name"
          />
        </View>
        
        {/* Task Detail Input */}
        <View style={styles.detailInputContainer}>
          <TextInput
            style={styles.detailInput}
            value={taskDetail}
            onChangeText={setTaskDetail}
            placeholder="Add details"
            multiline
          />
        </View>
        
        {/* Action Buttons */}
        <TouchableOpacity 
          style={[styles.actionButton, styles.updateButton]}
          onPress={handleUpdate}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.actionButton, styles.completeButton]}
          onPress={handleComplete}
        >
          <Text style={styles.buttonText}>Complete</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.actionButton, styles.deleteButton]}
          onPress={handleDelete}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
     
      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.footerTab} 
          onPress={() => router.push("/")}
        >
          <FontAwesome name="list" size={24} color="#F2722B" />
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
          onPress={() => router.push("/a_Login")}
        >
          <FontAwesome name="user" size={24} color="#888" />
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
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F2722B',
    paddingHorizontal: 10,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginRight: 30, // To account for the back button and center the title
  },
  content: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  taskNameInput: {
    fontSize: 16,
    padding: 5,
  },
  detailInputContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    height: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  detailInput: {
    fontSize: 14,
    padding: 5,
    flex: 1,
    textAlignVertical: 'top',
  },
  actionButton: {
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginBottom: 12,
  },
  updateButton: {
    backgroundColor: '#F2722B',
  },
  completeButton: {
    backgroundColor: '#4CAF50',
  },
  deleteButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
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
    color: '#888'
  }
});

export default EditToDoPage;