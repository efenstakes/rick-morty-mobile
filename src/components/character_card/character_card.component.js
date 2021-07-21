import React from 'react'
import { 
    StyleSheet, Text, View, 
    ImageBackground,
    Dimensions,
} from 'react-native'


const WIDTH = Dimensions.get('window').width
const CharacterCardComponent = ({ character }) => {
    return (
        <View style={styles.card}>
            <ImageBackground 
                source={{ uri: character.image }}
                style={styles.cardImage}
            />
            <View style={styles.cardContent}>
                <View style={styles.cardContentName}>
                    {/* name */}
                    <Text style={styles.cardTitle}>
                        {character.name}
                    </Text>
                    {/* status */}
                    <View style={[ styles.cardStatus, character.status != 'Alive' ? styles.cardStatusDead : styles.cardStatusAlive ]}></View>
                </View>
                <Text style={styles.cardSubTitle}>
                    {character.species}
                </Text>
            </View>
        </View>
    )
}

export default CharacterCardComponent

const styles = StyleSheet.create({
    card: {
        height: 260,
        width: (WIDTH/2)-26,
        borderRadius: 10,
        margin: 8,

        backgroundColor: 'brown',

        position: 'relative',
        overflow: 'hidden'
    },
    cardImage: {
        resizeMode: 'cover',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 20,
    },
    cardContent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,

        backgroundColor: 'rgba(0, 0, 0, .6)',
        color: 'white',

        borderRadius: 12,
        padding: 12,
    },
    cardContentName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardStatus: {
        width: 12,
        height: 12,
        borderRadius: 50,
    },
    cardStatusAlive: {
        backgroundColor: 'green',
    },
    cardStatusDead: {
        backgroundColor: 'red',
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    cardSubTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    },
})
