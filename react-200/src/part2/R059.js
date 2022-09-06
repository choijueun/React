import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'reactstrap'

function AJAXs() {
    const [data,setData] = useState('')
    const url = 'http://date.jsontest.com'
    // const url = 'https://api.adviceslip.com/advice'

    // R059
    const getFetch = async () => {
        try {
            const response = await fetch(url)
            const json = await response.json()
            setData('Fetch Get '+json.date)
        }catch(error) {
            alert(error)
        }
    }
    // R060
    const postFetch = async () => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: { interval: -30, unit: 'day' }
            })
            const json = await response.json()
            setData('Fetch Post '+json.time)
        }catch(err) {
            alert(err)
        }
    }
    // R061
    const getAxios = ()=>{
        axios.get(url)
        .then(res=>{
            setData('Axios Get '+res.data.date)
        })
    }
    // R062
    const postAxios = ()=>{
        axios.post(url,{
            a: 'react', b: 200
        })
        .then(res=>{
            setData('Axios Post '+res.data.time)
        })
    }
 
    return <>
        <div>AJAXs</div>
        <p><a href='https://designcode.io/react-hooks-handbook-fetch-data-from-an-api' target='_blank'>참고LINK</a></p>
        <h5>{data}</h5>
        <p>
            <Button color='secondary' outline onClick={getFetch}>FETCH: GET</Button>-
            <Button color='secondary' outline onClick={postFetch}>FETCH: POST</Button>
        </p>
        <p>
            <Button color='success' outline onClick={getAxios}>AXIOS: GET</Button>-
            <Button color='success' outline onClick={postAxios}>AXIOS: POST</Button>
        </p>
    </>
}

export default AJAXs