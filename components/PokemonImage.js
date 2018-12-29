import React from 'react';
import { View, Image, Text } from 'react-native';

class PokemonImage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.isFound) {
            return (
                <View
                    style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{uri: this.props.image }}    
                    />
                </View>
            );
        }

        else {
            return (
                <View
                    style={styles.container}>
                    <Text style={styles.textNone}>No Pokemon selected / No Pokemon Found</Text>
                </View>
            );
        }
    }
}

const styles = {
    image: {
        'width': 250,
        'height':250
    },

    container: {
        'alignItems': 'center'
    },

    textNone: {
        'textAlign': 'center'
    }
}

export default PokemonImage;