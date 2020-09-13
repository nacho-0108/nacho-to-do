import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
}   from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {FontAwesome} from '@expo/vector-icons'
import DeleteButton from './DeleteButton'



const TodoItem = ({
    title,
    done,
    remove, 
    toggle,
}) => {
    return (

        <Swipeable renderRightActions={()=> <DeleteButton onPress={remove}/> } renderLeftActions={()=> 

        
        <TouchableOpacity
            activeOpactiy = {0.8}
            onPress={()=>{
                alert( 'Archived');
            }}
       >

            <FontAwesome 
                style={{
                    marginTop: 25,
                    marginLeft: 5,
                    marginBottom: 20,
                }}
            name="archive" color='#B1B1B1' size={15} />
        </TouchableOpacity>
        
        }>


        
            <View style={styles.container}>
                <View style={styles.todo}>
                <TouchableOpacity
                    activeOpactiy = {0.8}
                    onPress={toggle}
                    style={done ? styles.done : styles.check}
                >
                    <FontAwesome name="check" color={done ? '#ee204d' : '#E5E5E5' } size={28} />
                </TouchableOpacity>
                    <Text style={done ? styles.titleDone : styles.title}>
                        {title}
                    </Text>
                </View>
            </View>
        </Swipeable>



    )
}


const styles = StyleSheet.create({
    container:{
        paddingLeft:20,
        paddingRight: 20,
        backgroundColor: '#FFFFFF',
    },

    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1,

    },

    todoDone: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1,
        
    },

    title: {
        fontSize: 16,
        color: '#424242',
    },

    titleDone: {
        fontSize: 16,
        color: '#A9A9A9',
        textDecorationLine: 'line-through',
    },

    check: {

        borderWidth: 0,
        borderColor: '#E5E5E5',
        width: 28,
        height: 28,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,

    },

    done: {


        borderColor: '#E5E5E5',
        width: 28,
        height: 28,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,

    },


    done2: {


        borderColor: '#B1B1B1',
        width: 28,
        height: 28,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,

    }
})



export default TodoItem