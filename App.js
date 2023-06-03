
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView,FlatList } from 'react-native';
// the text and view are two of those inbuilt components that are frequently used
// since the issue of scrollView can turn out to be worse, there is a replace which is the FlatList

export default function App() {
  
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const[courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
      setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
      setCourseGoals(currentCourseGoals =>[...currentCourseGoals, enteredGoalText]);
  }
// Scrollview it is a component that gives you a scrololable container element this is shown below in the view element. 
  return (
    
    <View style={styles.appContainer}>
      
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler}/>
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {/*the above view helps in giving the container which consist of our list items
        the height in which the list items would fit ****************simply it is restraining the height of the 
        container you are placing your items */}
        <FlatList data={courseGoals} renderItem={(item) => {
          return (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
          </View>
          );
        }} alwaysBounceVertical={false}/>
          
          
        
        {/* The FlatView is used to make sure that simple list that are required to be rendered on the screen are rendered first
        without bringing all the items of the list to the view. i.e. it helps in bringing in the only required viewing of the screen */}
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
 
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // this helps in reducing the stretching of the button
    marginBottom: 24,  
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '60%',
    marginRight: 10,
    padding:5,
  },
  goalsContainer:{
    flex:5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  
  },

  //  the component below is used in affecting the text element and helps in making it turn white.
    
    goalText: {
      color: 'white',
    }
});
// when you want ot reload the app, you will just need to press the 
// r in the terminal