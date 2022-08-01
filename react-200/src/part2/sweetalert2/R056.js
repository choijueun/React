import React from 'react'
import { Button } from 'reactstrap'
import Swal from 'sweetalert2'

function Sweetalert2Basic() {
    const no1 = ()=>{
        Swal.fire('1. sweetalert')
    }
    const no2 = ()=>{
        alert('2. alert()')
    }
    const no3 = ()=>{
        Swal.fire('3. sweetalert').then(res=>{
            alert('4. result.value: '+res.value)
        })
    }
    const no4 = (title, msg, icon, positionflag)=>{
        Swal.fire({
            title: title,
            text: msg,
            icon: icon,
            position: positionflag,

            showConfirmButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'YES!',
            confirmButtonAriaLabel: 'aria-label',

            showCancelButton: true,
            cancelButtonColor: '#d33',
            cancelButtonText: 'NO!',
            cancelButtonAriaLabel: 'aria-label',

            // timer: 1500
        }).then(res=>{
            console.log(res)
        })
    }


  return (
    <div>
        <h2>Sweetalert2: Basic</h2>
        <p><Button color='light' onClick={no1}>1. sweetalert basic</Button></p>
        <p><Button color='warning' onClick={no2}>2. alert()</Button></p>
        <p><Button color='info' onClick={no3}>3. sweetalert then alert()</Button></p>
        <p><Button color='success' onClick={ ()=>{no4('저장', '저장이 완료되었습니다.', 'success', 'center')} }>4. sweetalert with options ('저장', 'center')</Button></p>
        <p><Button color='danger' onClick={ ()=>{no4('수정', '오류가 발생하였습니다.', 'error', 'bottom-end')} }>4. sweetalert with options ('수정', 'bottom-end')</Button></p>
    </div>
  )
}

export default Sweetalert2Basic