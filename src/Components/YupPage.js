import React, { Component } from 'react';
import axios from 'axios';
import VoteSection from './VoteSection';
import { colors } from '@material-ui/core';

class YupPage extends Component {
    state = {}
    
    async componentDidMount() {
       try {
           let info = await axios.get('https://api.yup.io/posts/post/12794')
           console.log(info.data.sextiles.intelligence)

        //Put all values returned from the API into component state
        this.setState({
            thumbnail: info.data.previewData.img,
            popularity: info.data.weights.popularity,
            intelligence: info.data.weights.intelligence,
            funny: info.data.weights.funny,
            //Sextiles
            popSextile: info.data.sextiles.popularity,
            intelSextile: info.data.sextiles.intelligence,
            funSextile: info.data.sextiles.funny
        })
       }
       catch(err) {
           console.log(err)
       }
    }

    render() {
        return (
            <div>
                <img src={this.state.thumbnail} alt='thumbnail for post'/>
                <p className="numbers"><span>{this.state.popularity}</span></p>
                <p className="numbers"><span>{this.state.intelligence}</span></p>
                <p className="numbers"><span>{this.state.funny}</span></p>
                <VoteSection />
            </div>
        );
    }
}

export default YupPage;

// Sextile Stuff
// maybe use a switch statement to handle the sextile value you get from API
// Pass the sextile value from state into a switch statement function