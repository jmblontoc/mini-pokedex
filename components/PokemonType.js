import React from 'react';
import { View, Text } from 'react-native';

class PokemonType extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.isFound) {
            return (
                <View>
                    <Text style={styles.type}>{this.props.pokemonTypes.join(" ")}</Text>
                </View>
            );
        }
        else {
            return (
                <View>
                </View>
            );
        }
    }
}

const styles = {
    type: {
        textAlign: 'center'
    }
}

export default PokemonType;