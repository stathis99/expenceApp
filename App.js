import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';

//Screens 
import RecentExpencesScreen from './screens/RecentExpencesScreen';
import AllExpencesScreen from './screens/AllExpencesScreen';
import AddExpence from './screens/AddExpence';

//Navigators 
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//Buttons
import AddExpenceButton from './components/AddExpenceButton';

//icons
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Books',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'PlayStations',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Food',
  },
];



export default function App() {

  const BottomNav = createBottomTabNavigator();
  const StackNav = createStackNavigator();

  function BottomNavigator(){
    return(
      <BottomNav.Navigator>
      <BottomNav.Screen name="Recent" component={RecentExpencesScreen}  
      options={{
          headerRight: () => (
            <AddExpenceButton/>
          ),
          tabBarIcon: () => (
            <Ionicons name= "home-outline" size="30"/>
          ),
        }}/>
      <BottomNav.Screen name="All" component={AllExpencesScreen}
       options={{
        tabBarIcon: () => (
          <Ionicons name= "hourglass-outline" size="30"/>
        ),
      }}
      />
    </BottomNav.Navigator> 
    );
  }


  return (
    <NavigationContainer>
      <StackNav.Navigator>
          <StackNav.Screen options={{headerShown: false}} name= "main" component={BottomNavigator}/>
          <StackNav.Screen name= "Add Expence" component={AddExpence}/>
      </StackNav.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({

});
