import React from 'react';
import { TextInput, View } from 'react-native';

class SearchPokemon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'placeholder': 'Tap here to search for a Pokemon'
        }

        this.update = this.update.bind(this);        
    }

    update(text) {
        this.props.onQuery(text);
    }

    render() {
        return (
            <View>
                <TextInput 
                    style={styles.input}
                    placeholder={this.state.placeholder}
                    onChangeText={this.update}
                    autoCapitalize="none"/>
            </View>
        )
    }
}

const styles = {
    input: {
        textAlign: 'center',
        fontSize: 30
    }
}

export default SearchPokemon;