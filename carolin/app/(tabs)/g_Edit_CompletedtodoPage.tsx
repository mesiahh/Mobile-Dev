import React, { useState, useEffect } from 'react';
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

const EditCompletedTodoPage = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // Initialize state with data from params or default values
  const [taskName, setTaskName] = useState(params.title?.toString() || 'Completed 1');
  const [taskDetail, setTaskDetail] = useState(params.detail?.toString() || 'completed detail 1');
  
  const handleUpdate = () => {
    // In a real app, you would update the task in your data store
    Alert.alert('Success', 'Task updated successfully');
    router.back();
  };
  
  const handleIncomplete = () => {
    // Mark task as incomplete (move it back to active tasks)
    Alert.alert('Success', 'Task marked as incomplete');
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
          <Text style={styles.backButtonText}>Completed</Text>
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
          style={[styles.actionButton, styles.incompleteButton]}
          onPress={handleIncomplete}
        >
          <Text style={styles.buttonText}>Incomplete</Text>
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
          onPress={() => router.push("/(tabs)/c_ToDo")}
        >
          <FontAwesome name="list" size={24} color="#888" />
          <Text style={styles.footerTabText}>Tasks</Text>
        </TouchableOpacity>
       
        <TouchableOpacity 
          style={styles.footerTab} 
          onPress={() => router.push("/(tabs)/f_CompletedToDoPage")}
        >
          <FontAwesome name="check-circle" size={24} color="#F2722B" />
          <Text style={[styles.footerTabText, styles.activeTabText]}>Completed</Text>
        </TouchableOpacity>
       
        <TouchableOpacity 
          style={styles.footerTab} 
          onPress={() => router.push("/(tabs)/h_ProfilePage")}
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  backButtonText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
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
  incompleteButton: {
    backgroundColor: '#7F7F7F',
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
  },
  activeTabText: {
    color: '#F2722B',
  }
});

export default EditCompletedTodoPage;