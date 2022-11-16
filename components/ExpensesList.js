
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';






function ExpencesList({items}){
    
    const renderItem = ({ item }) => (
        <View style={styles.item}>
        <View>
        <Text style={styles.title}>{item.title}</Text>

        </View>
        <Text>{item.price}</Text>



      </View>
    );


    return ( 
    <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#87cefa',
      padding: 5,
      marginVertical: 3,
      marginHorizontal: 50,
      borderRadius: 10,
      height: 50
    },
    title: {
      fontSize: 20,
    },
  });


export default ExpencesList;