import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import VoteSection from './VoteSection';
import { Grid, Card } from '@material-ui/core';

// export const displaySextileColor = (value) => {
//     // Hanlde the different sextile scenarios
//     switch (value) {
//         case 'first':
//             return '#00E4FF';
//         case 'second':
//             return '#00FFA6';
//         case 'third':
//             return '#3EFF00';
//         case 'fourth':
//             return '#FFFB00';
//         case 'fifth':
//             return '#FFAE00';
//         case 'sixth':
//             return '#FF6100';
//         default:
//             return 'nothing';
//     }
// }
//Hanlde the different sextile color scenarios. A different approach
const displaySextileColor2 = {
    first: '#00E4FF',
    second: '#00FFA6',
    third: '#3EFF00',
    fourth: '#FFFB00',
    fifth: '#FFAE00',
    sixth: '#FF6100',
    none: ''
}


const YupPage = () => {
    // Initial empty state
    const [state, updateState] = useState({})

    const updateVote = (name, num) => {
        console.log(name, state)
        let copyOfOptions = state.options?.map(val => {

            // Arrow direction stuff. Maybe refactor
            if (val.name === name) {
                // If we pressed down and the up button was already pressed
                if (val.up && num < 0) {
                    // decrement
                    val.weight += num
                    val.up = !val.up
                }
                else if (val.down && num > 0) {
                    // If we press up and the down was already pressed
                    //Increment 
                    val.weight += num
                    val.down = !val.down
                }

                else if (val.up === false && val.down === false) {
                    val.weight += num
                    num === 1 ? val.up = !val.up : val.down = !val.down

                }
                else {
                    val.weight -= num
                    num === 1 ? val.up = !val.up : val.down = !val.down
                }
            }

            return val
        })
        updateState({ options: copyOfOptions })
    }


    useEffect(() => {
        const fetchData = async () => {
            // You can await here
            const info = await axios.get('https://api.yup.io/posts/post/12294')

            //Put all required values returned from the API into an array in component state
            let array1 = Object.entries(info.data.weights).map((el, i) => {
                return { name: el[0], weight: el[1], sextile: Object.values(info.data.sextiles)[i], up: false, down: false }
            })
            let options = array1.filter(el => (el.name === 'funny' || el.name === 'intelligence' || el.name === 'popularity' ? el : null))

            updateState({
                options: options,
                thumbnail: info.data.previewData.img,
            })
        }
        fetchData();
    }, []);

    // async componentDidMount() {
    //     try {
    //         let info = await axios.get('https://api.yup.io/posts/post/12294')

    //         let array1 = Object.entries(info.data.weights).map((el, i) => {
    //             return { name: el[0], weight: el[1], sextile: Object.values(info.data.sextiles)[i], up: false, down: false }
    //         })
    //         let options = array1.filter(el => (el.name === 'funny' || el.name === 'intelligence' || el.name === 'popularity' ? el : null))

    //         //Put all required values returned from the API into component state
    //         this.setState({
    //             data: info.data,
    //             options: options,
    //             thumbnail: info.data.previewData.img,
    //         })
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }

    return (
        <div>
            <Card id='card'>
                <img src={state.thumbnail} alt='thumbnail for post' />
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <VoteSection options={state.options} displayColor={displaySextileColor2}
                        updateVote={updateVote} />
                </Grid>
            </Card>
        </div>
    );
}

export default YupPage;
// 12754