import React from 'react'
import { FlatList, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

function FavoritesScreen({ navigation }: any) {

    const data = [
        {
            id: 1,
            title: 'The Shawshank Redemption',
            poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM0ZmRlYWM0MzIyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
            overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        },
        {
            id: 2,
            title: 'The Godfather',
            poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            overview: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        },
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
                        <View style={styles.movieCard}>
                            <Image source={{ uri: item.poster }} style={styles.poster} />
                            <Text style={styles.title} >{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    movieCard: { marginBottom: 16, flexDirection: 'row', alignItems: 'center' },
    poster: { width: 100, height: 150, borderRadius: 8, marginRight: 16 },
    title: { fontSize: 18, fontWeight: 'bold' }
});

export default FavoritesScreen