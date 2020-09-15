import React from 'react';
import axios from 'axios';


export default class Recipe extends React.Component {

    state = {

        recipes : [],
        id :0

    }

    componentDidMount() {
        axios.get(`http://localhost:1337/recettes`)
        .then(res => {
            this.setState({ recipes: res.data})
        });
    }


    handleDelete = event => {
        const recette = {
            id : 
          };
    
          
            axios.delete(`http://localhost:1337/recettes/${this.state.id}`, recette)
            .then(res => {
              console.log(res +" résultat");
              console.log(res.id +" id");
          });

    }


    render() {

        return (
            <div className="row liste_recette">
              {this.state.recipes.map( recipes => 
                <li className="nom_recette" key={recipes.id}>{recipes.titre} 
                     <button key={recipes.id} className="supprimer fas fa-1x fa-check-square" onClick={this.handleDelete}></button>
                </li> )}
            </div>
        )
    }


}