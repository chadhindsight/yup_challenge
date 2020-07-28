import React, { Component } from 'react';
import axios from 'axios';
import VoteSection from './VoteSection';

class YupPage extends Component {
    state = {}
    
    async componentDidMount() {
       try {
           let info = await axios.get('https://api.yup.io/posts/post/12294')
           console.log(info.data)

        //Put the all values requested from the backend into component state
        this.setState({
            thumbnail: info.data.previewData.img,
            popularity: info.data.weights.popularity,
            intelligence: info.data.weights.intelligence,
            funny: info.data.weights.funny
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
                <p>{this.state.popularity}</p>
                <p>{this.state.intelligence}</p>
                <p>{this.state.funny}</p>
                <VoteSection />
            </div>
        );
    }
}

export default YupPage;

// info.data.previewData.img
// info.data.weights.popularity
// info.data.weights.funny
// info.data.weights.intelligence