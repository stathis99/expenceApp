import { Pressable, Text } from "react-native";

//navigation
import { useNavigation } from '@react-navigation/native';

//icons
import { Ionicons } from '@expo/vector-icons';



function AddExpenceButton(){

    const navigator = useNavigation();

    function onPressHandler() {
        navigator.navigate('Add Expence');
    }

    return(
        <Pressable onPress={onPressHandler}>
            <Ionicons name= "add-circle-outline" size="35"/>
        </Pressable>
    );
}

export default AddExpenceButton;