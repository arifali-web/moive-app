import React from 'react'
import { Button, Image, Text, View, StyleSheet } from 'react-native'

function DetailsScreen({ navigation, route }: any) {

    const { movie } = route.params

    console.log(movie);

    return (
        <View style={style.container}>
            <Image style={style.poster} source={{ uri: movie.poster }} />
            <Text style={style.title}>{movie.title}</Text>
            <Text style={style.overview}>{movie.overview}</Text>
            <View style={style.button}>
                <Button onPress={() => navigation.navigate('Favorites', { movie })} title="Add to favorites" />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    poster: { width: '100%', height: 300, borderRadius: 8 },
    title: { fontSize: 24, fontWeight: 'bold', marginVertical: 16 },
    overview: { fontSize: 16, lineHeight: 24 },
    button: { marginTop: 16, width: '100%', backgroundColor: '#0a7ea4', borderRadius: 8, padding: 8, color: '#fff', fontWeight: 'bold' }
})

export default DetailsScreen