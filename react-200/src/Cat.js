import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Cat() {
    const [ cat, setCat ] = useState()

    useEffect(()=>{
        axios.get('https://api.thecatapi.com/v1/images/search')
            .then(res=>{
                const r = res.data
                r.forEach((obj)=>{
                    setCat(obj.url)
                })
            })
    },[])

  return (
    <img src={cat} />
  )
}

export default Cat