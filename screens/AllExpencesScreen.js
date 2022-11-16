import { Text } from 'react-native'
import ExpencesList from '../components/ExpensesList';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Books',
      price: 10
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'PlayStations',
      price: 12
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Food',
      price: 9
    },
  ];







function AllExpencesScreen(){
    return (
        <ExpencesList items= {DATA} />
    );

}

export default AllExpencesScreen;