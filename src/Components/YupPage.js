import React, { Component } from 'react';
import axios from 'axios';
import VoteSection from './VoteSection';
import { colors } from '@material-ui/core';

class YupPage extends Component {
    state = {}
    
    async componentDidMount() {
       try {
           let info = await axios.get('https://api.yup.io/posts/post/12794')
           console.log(info.data.sextiles)

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
    // const levelColors = {
    //     first: '#00E4FF', second: '#00FFA6', third: '#3EFF00', fourth: '#FFFB00', fifth: '#FFAE00', sixth: '#FF6100'
    // }
    // Hanlde the different sextile scenarios
    displaySextileColor(value) {
        switch (value) {
            case 'first':
                return '#00E4FF';
            case 'second':
                return '#00FFA6';
            case 'third':
                return '#3EFF00';
            case 'fourth':
                return '#FFFB00';
            case 'fifth':
                return '#FFAE00';
            case 'sixth':
                return '#FF6100';
            default:
                return '';
        }
    }


    render() {
        return (
            <div>
                {/* Move to the YupPage component later */}
                <img src={this.state.thumbnail} alt='thumbnail for post'/>
                <VoteSection {...this.state}/>
            </div>
        );
    }
}

export default YupPage;

// Sextile Stuff
// maybe use a switch statement to handle the sextile value you get from API
// Pass the sextile value from state into a switch statement function