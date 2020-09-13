import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
}   from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {FontAwesome} from '@expo/vector-icons'

const Header = ({
    show,
}) => {
    return (
        <View>
        <View style={styles.container}>
            <Text style={styles.title}>
                Nacho's ToDo
            </Text>
            <TouchableOpacity
            activeOpacity = {0.8}
            onPress={show}
            style={styles.button}
            >
                <FontAwesome name="plus" color='#212121' size={25} />

            </TouchableOpacity>

        </View>
        </View>
    )
}


const styles = StyleSheet.create({
 
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,

    },
    title: {

        color: '#212121',
        fontSize: 30,
        fontWeight: '600',
    },

    button: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.select({
            ios:2,
            android: 0
        }),
        paddingLeft: Platform.select({
            ios:1,
            android: 0
        }),
    }

})
export default Header