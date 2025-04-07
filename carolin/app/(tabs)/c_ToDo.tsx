import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  FlatList
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ToDoScreen = () => {
  const router = useRouter();
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Task 1', completed: true },
    { id: '2', title: 'Task 2', completed: true },
    { id: '3', title: 'Task 3', completed: true },
    { id: '4', title: 'Task 4', completed: true },
    { id: '5', title: 'Task 5', completed: true },
  ]);

  const toggleTaskCompletion = (id, event) => {
    // Stop event propagation to prevent navigation
    if (event) event.stopPropagation();
    
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id, event) => {
    // Stop event propagation to prevent navigation
    if (event) event.stopPropagation();
    
    setTasks(tasks.filter(task => task.id !== id));
  };

  const navigateToAddTask = () => {
    router.push("/(tabs)/d_AddtoDoPage");
  };
  
  const navigateToEditTask = (task) => {
    router.push(`/(tabs)/e_EditToDoPage?id=${task.id}&title=${encodeURIComponent(task.title)}`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.taskItem}
      onPress={() => navigateToEditTask(item)}
    >
      <Text style={styles.taskTitle}>{item.title}</Text>
      <View style={styles.taskActions}>
        <TouchableOpacity 
          onPress={(event) => deleteTask(item.id, event)} 
          style={styles.taskAction}
        >
          <FontAwesome name="trash-o" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={(event) => toggleTaskCompletion(item.id, event)} 
          style={styles.taskAction}
        >
          <FontAwesome name="check" size={20} color="#888" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ToDo</Text>
      </View>
      
      {/* Main Content - Tasks */}
      <View style={styles.content}>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.taskList}
        />
        
        {/* Floating Action Button */}
        <TouchableOpacity style={styles.fab} onPress={navigateToAddTask}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>
      
      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerTab}>
          <FontAwesome name="list" size={24} color="#F2722B" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.footerTab} 
          onPress={() => router.push("/(tabs)/f_CompletedToDoPage")}
        >
          <FontAwesome name="check-square-o" size={24} color="#888" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.footerTab} 
          onPress={() => router.push("/(tabs)/h_ProfilePage")}
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
    position: 'relative',
  },
  taskList: {
    padding: 16,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  taskTitle: {
    fontSize: 16,
  },
  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskAction: {
    marginLeft: 16,
    padding: 8, // Add padding to make the touch target larger
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F2722B',
    right: 16,
    bottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  fabIcon: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
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

export default ToDoScreen;