
import { View, StyleSheet, Text } from "react-native"
import Input from "./Input";
import { useState } from "react";

function ExpenseForm(){

    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: '',
    })

    function inputChangeHandler(inputIdentifier, enteredValue){
        setInputValues(enteredValue);
    }


    return (
        <View style = {style.form}>
            <Text style = {style.text} >Your Expense</Text>
            <View style={style.smallContainer}>
                <Input label= "Amount" style= {style.rowInput} textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChanageText: inputChangeHandler,
                    //value: amountValue
                }}/>
                <Input label= "Date" style= {style.rowInput}  textInputConfig={{
                    placeholder: 'YYYY-MM-DD'
                }}/>       
            </View>

            <Input label= "Descriptiom" textInputConfig={{
                multiline: true,
            }}/>
        </View>
    );

}

export default ExpenseForm

const style = StyleSheet.create({
    smallContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    rowInput: {
        flex: 1
    },
    form: {
        marginTop: 40,
        marginBottom: 20
    }
});