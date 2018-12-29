import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchPokemon from './SearchPokemon';
import PokemonImage from './PokemonImage';
import PokemonStats from './PokemonStats';
import PokemonType from './PokemonType';

class Pokedex extends React.Component {

    state = {
        'query': '',
        'image': '',
        'found': false,

        'hp': 0,
        'attack': 0,
        'defense': 0,
        'special_attack': 0,
        'special_defense': 0,
        'speed': 0,
        'total': 0,

        'types': []
    }

    handleQuery = (query) => {
        this.setState({query: query});

        if (query.length > 2) {

            fetch('https://pokeapi.co/api/v2/pokemon/' + query)
                .then(response => response.json())
                .then(data => this.handleData(data))
                .catch(error => this.handleNone()) 
        }
    }

    handleData = (data) => {

        let hp = data.stats[5].base_stat;
        let attack = data.stats[4].base_stat;
        let defense = data.stats[3].base_stat;
        let special_attack = data.stats[2].base_stat;
        let special_defense = data.stats[1].base_stat;
        let speed = data.stats[0].base_stat;

        let total = attack + defense + special_attack + special_defense + speed + hp;

        this.setState({
            image: data.sprites.front_default,
            found: true,
            hp: hp,
            attack: attack,
            defense: defense,
            special_attack: special_attack,
            special_defense: special_defense,
            speed: speed,
            total: total,

            types: data.types.map((t)=> t.type.name.toUpperCase())
        });
    }

    handleNone = () => {
        this.setState({found: false});
    }

    render() {
        return (
            <View>
                <SearchPokemon onQuery={this.handleQuery} />
                <PokemonImage image={this.state.image} isFound={this.state.found} />
                <PokemonType 
                    pokemonTypes={this.state.types}
                    isFound={this.state.found}
                />
                <PokemonStats
                    hp={this.state.hp}
                    attack={this.state.attack}
                    defense={this.state.defense}
                    special_attack={this.state.special_attack}
                    special_defense={this.state.special_defense}
                    speed={this.state.speed}
                    total={this.state.total}
                    isFound={this.state.found}
                />
            </View>
        )
    }
}

export default Pokedex;