import React from 'react'
import { FlatList, Text, View, TouchableHighlight, Image, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';

const items = [
    {
        image: require('../../../assets/images/home-image 1.png'),
        rating: {
            source: require('../../../assets/images/star.png'),
            value: '9.3'
        },
        title: 'Star Wars: The Last Jedi'
    },
    {
        image: require('../../../assets/images/home-image 3.png'),
        rating: {
            source: require('../../../assets/images/star.png'),
            value: '8.5'
        },
        title: 'The Avengers'
    },
    {
        image: require('../../../assets/images/home-image 2.png'),
        rating: {
            source: require('../../../assets/images/star.png'),
            value: '9.0'
        },
        title: 'Tenet'
    }
];

export default function HomeScreen({ navigation }: any) {
    const [Movies, setMovies] = React.useState([
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
        {
            id: 3,
            title: 'The Godfather: Part II',
            poster: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            overview: 'The early life and career of Vito Corleone in 1920s New York City is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.',
        },
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
        {
            id: 3,
            title: 'The Godfather: Part II',
            poster: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            overview: 'The early life and career of Vito Corleone in 1920s New York City is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.',
        },
    ])
    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'regular', marginBottom: 10 }}>Stream Everywhere</Text>
            <ImageBackground source={require('../../../assets/images/hero-bg.png')} resizeMode='contain' style={{ justifyContent: 'flex-end', width: 327, height: 191 }}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', padding: 20, backgroundColor: '#ffffff70', width: 211, marginLeft: 10, borderRadius: 20, height: 62, marginBottom: 10 }}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/Play.png')} style={{ width: 28, height: 28 }} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'semibold' }}>Continue Watching</Text>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Ready Player one</Text>
                    </View>
                </View>
            </ImageBackground>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'regular', marginVertical: 20 }}>Trending</Text>
            <Carousel
                loop
                width={320}
                height={336}
                // autoPlay={true}
                data={items}
                style={{ marginHorizontal: 'auto' }}
                scrollAnimationDuration={1000}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index}>
                        <ImageBackground source={item?.image} resizeMode='contain' style={{ marginHorizontal: 'auto', width: 258, height: 336, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 10, justifyContent: 'flex-end' }}>
                                <View style={{ padding: 10, backgroundColor: '#ffffff70', width: 77, borderRadius: 15, height: 46 }}>
                                    <Text style={{ color: '#fff', fontSize: 8, fontWeight: 'regular' }}>IMDb</Text>
                                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                        <Image source={item.rating.source} style={{ width: 16, height: 15.3 }} />
                                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'semibold' }}>{item.rating.value}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff70', width: 226, borderRadius: 20, height: 76, marginHorizontal: 'auto', marginBottom: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'regular' }}>{item.title}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
            />
            {/* <TouchableOpacity>
                <ImageBackground source={require('../../../../assets/images/home-image 1.png')} resizeMode='contain' style={{ marginHorizontal: 'auto', width: 258, height: 336, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 10, justifyContent: 'flex-end' }}>
                        <View style={{ padding: 10, backgroundColor: '#ffffff70', width: 77, borderRadius: 15, height: 46 }}>
                            <Text style={{ color: '#fff', fontSize: 8, fontWeight: 'regular' }}>IMDb</Text>
                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <Image source={require('../../assets/images/star.png')} style={{ width: 24, height: 24 }} />
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'semibold' }}>9.3</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff70', width: 226, borderRadius: 20, height: 76, marginHorizontal: 'auto', marginBottom: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'semibold' }}>Star Wars: The Last Jedi</Text>
                    </View>

                </ImageBackground>
            </TouchableOpacity> */}
            {/* <FlatList
                data={Movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { movie: item })}>
                        <View style={styles.movieCard}>
                            <Image source={{ uri: item.poster }} style={styles.poster} />
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#15141F' },
    movieCard: { marginBottom: 16, flexDirection: 'row', alignItems: 'center' },
    poster: { width: 100, height: 150, borderRadius: 8, marginRight: 16 },
    title: { fontSize: 18, fontWeight: 'bold' }
});