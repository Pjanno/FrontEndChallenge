import React from 'react';
import axios from 'axios';

export class PlanetaInfo extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            contador: 0,
            filmes: 0,
            name: null,
            climate: null,
            terrain: null
        };
    }

    componentDidMount(){
        this.quantidadePlanetas();
    }

    async quantidadePlanetas() {
        await axios.get('https://swapi.co/api/planets/')
        .then((response)=>{
            const {data} = response
            this.setState({
                contador: data.count
            })
            this.pegaPlanetaNovo()
        }).catch((error)=>{
            console.log('O seguinte erro aconteceu: '+error)
            return 0
        })
    }

    async pegaPlanetaNovo() {
        var numeroRandom = this.randomPlanet()
        await axios.get(`https://swapi.co/api/planets/${numeroRandom}`)
        .then((response)=>{
            const {data} = response
            this.setState({
                name: data.name,
                climate: data.climate,
                terrain: data.terrain,
                filmes: data.films.length
            })
        }).catch((error)=>{
            console.log('O seguinte erro aconteceu: '+error)
        })
    }
    
    randomPlanet() {
        const numeroPlanetas = this.state.contador
        console.log('Total de Planetas: '+numeroPlanetas)
        return Math.floor(Math.random() * (numeroPlanetas - 1 + 1)) + 1
    }

    render() {
        return (
            <div>
                <section name='titulo'>
                    <h3>{this.state.name}</h3>
                </section>
                <section name='info'>
                    <p>Clima: {this.state.climate}</p>
                    <p>Terreno: {this.state.terrain}</p>
                    <p>Quantidade de filmes em que apareceu: {this.state.filmes}</p>
                </section>
            </div>
        )
    }
}

    