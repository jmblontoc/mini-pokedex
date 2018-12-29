import React from 'react';
import { View, Text } from 'react-native';

class PokemonStats extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.isFound) {
            return (
                <View style={styles.mainContainer}>
                    <View style={[styles.columnsLabel, styles.columns]}>
                        <Text style={styles.textLabel}>HP</Text>
                        <Text style={styles.textLabel}>Attack</Text>
                        <Text style={styles.textLabel}>Defense</Text>
                        <Text style={styles.textLabel}>Special Attack</Text>
                        <Text style={styles.textLabel}>Special Defense</Text>
                        <Text style={styles.textLabel}>Speed</Text>
                        <Text style={[styles.textLabel, styles.total]}>Total</Text>
                    </View>
                    <View style={[styles.columnsValue, styles.columns]}>
                        <Text style={styles.textValue}>{this.props.hp}</Text>
                        <Text style={styles.textValue}>{this.props.attack}</Text>
                        <Text style={styles.textValue}>{this.props.defense}</Text>
                        <Text style={styles.textValue}>{this.props.special_attack}</Text>
                        <Text style={styles.textValue}>{this.props.special_defense}</Text>
                        <Text style={styles.textValue}>{this.props.speed}</Text>
                        <Text style={[styles.textLabel, styles.total]}>{this.props.total}</Text>
                    </View>
                </View>
            );
        }
        else {
            return (
                <View style={styles.mainContainer}>
                    <View style={[styles.columnsLabel, styles.columns]}>
                        <Text style={styles.textLabel}>HP</Text>
                        <Text style={styles.textLabel}>Attack</Text>
                        <Text style={styles.textLabel}>Defense</Text>
                        <Text style={styles.textLabel}>Special Attack</Text>
                        <Text style={styles.textLabel}>Special Defense</Text>
                        <Text style={styles.textLabel}>Speed</Text>
                        <Text style={[styles.textLabel, styles.total]}>Total</Text>
                    </View>
                    <View style={[styles.columnsValue, styles.columns]}>
                        <Text style={styles.textValue}>0</Text>
                        <Text style={styles.textValue}>0</Text>
                        <Text style={styles.textValue}>0</Text>
                        <Text style={styles.textValue}>0</Text>
                        <Text style={styles.textValue}>0</Text>
                        <Text style={styles.textValue}>0</Text>
                        <Text style={[styles.textLabel, styles.total]}>0</Text>
                    </View>
                </View>
            );
        }
    }
}

const styles = {
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    textLabel: {
        fontWeight: 'bold',
        fontSize: 20
    },
    columnsLabel: {
        textAlign: 'left',
    },
    columnsValue: {
        textAlign: 'right'
    },
    columns: {
        'margin': 20
    },
    total: {
        'marginTop': 20
    },
    textValue: {
        fontSize: 20,
        textAlign: 'right'
    }
}

export default PokemonStats;