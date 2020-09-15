import React from 'react';
import axios from 'axios';


export default class Recipe extends React.Component {

    state = {

        titre : '',
        content : ''

    }

    handleChange = event => {
      this.setState({ titre : event.target.value});
    }


    handleSubmit = event => {

      const recette = {
        id : Math.random() * 500,
        titre : this.state.titre,
        content : "Ceci est du contenu"
      };

      
        axios.post(`http://localhost:1337/recettes`, recette)
        .then(res => {
          console.log(res +" résultat");
          console.log(res.id +" id");
      });
    };


    handleDelete = event => {


}



    render() {

        return (
            <form onSubmit={this.handleSubmit}>
              <div>
                <div className="row">
                  <input type="text" name="titre" onChange={this.handleChange} />
                  <button type="submit"><i className="fas fa-plus-square"></i></button>
                </div>
                <div className="row">
                </div>
                </div>
            </form>
        )
    }


}