import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Alert
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const CompletedPage = () => {
  const router = useRouter();
  
  // Sample data for completed tasks
  const [completedTasks, setCompletedTasks] = useState([
    { id: '1', title: 'Completed 1' },
    { id: '2', title: 'Completed 2' },
    { id: '3', title: 'Completed 3' },
    { id: '4', title: 'Completed 4' },
    { id: '5', title: 'Completed 5' },
  ]);

  const handleTaskPress = (task) => {
    // Fix: Use a string for pathname and properly format params
    router.push(`/g_Edit_CompletedtodoPage?id=${task.id}&title=${encodeURIComponent(task.title)}`);
  };

  const handleDeleteTask = (taskId) => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          onPress: () => {
            // Remove the task from the completed tasks list
            setCompletedTasks(currentTasks => 
              currentTasks.filter(task => task.id !== taskId)
            );
          },
          style: 'destructive'
        }
      ]
    );
  };

  const renderCompletedTask = ({ item }) => (
    <TouchableOpacity 
      style={styles.taskItem}
      onPress={() => handleTaskPress(item)}
    >
      <Text style={styles.taskTitle}>{item.title}</Text>
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => handleDeleteTask(item.id)}
      >
        <FontAwesome name="trash" size={20} color="#888" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Completed</Text>
      </View>
      
      {/* Main Content - Completed Tasks List */}
      <View style={styles.content}>
        {completedTasks.length > 0 ? (
          <FlatList
            data={completedTasks}
            renderItem={renderCompletedTask}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
          />
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No completed tasks</Text>
          </View>
        )}
      </View>
      
      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.footerTab} 
          onPress={() => router.push("/")}
        >
          <FontAwesome name="list" size={24} color="#888" />
          <Text style={styles.footerTabText}>Tasks</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.footerTab}
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
  },
  listContainer: {
    padding: 16,
  },
  taskItem: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  deleteButton: {
    padding: 8,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 16,
    color: '#888',
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
  },
  activeTabText: {
    color: '#F2722B',
  }
});

export default CompletedPage;