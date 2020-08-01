import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VoteSection from './VoteSection';
import { Grid, Card } from '@material-ui/core';

//Hanlde the different sextile color scenarios. A different approach
const displaySextileColor = {
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
    const [thumbnail, setThumbnail] = useState('')
    const [options, setOptions] = useState([])

    const updateVote = (name, num) => {
        console.log(name, options)
        let copyOfOptions = options?.map(val => {

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
        setOptions([...copyOfOptions])
    }


    useEffect(() => {
        const fetchData = async () => {
            const info = await axios.get('https://api.yup.io/posts/post/12294')

            //Put all required values returned from the API into an array in component state
            let array1 = Object.entries(info.data.weights).map((el, i) => {
                return { name: el[0], weight: el[1], sextile: Object.values(info.data.sextiles)[i], up: false, down: false }
            })
            let options = array1.filter(el => (el.name === 'funny' || el.name === 'intelligence' || el.name === 'popularity' ? el : null))

            const thumbnail = info.data.previewData.img

            setOptions([...options])
            setThumbnail(thumbnail)
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
                <img src={thumbnail} alt='thumbnail for post' />
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <VoteSection options={options} displayColor={displaySextileColor}
                        updateVote={updateVote} />
                </Grid>
            </Card>
        </div>
    );
}

export default YupPage;
// 12754