// import React, { Component } from 'react'
import React from 'react'
import loading from './loading.gif'

// export class Spinner extends Component {
const Spinner =()=>{
    
  // render() {
    return (
      <div className='text-center'>
            <img className='my-3' src={loading} alt='loading' style={{height: '100px'}}/>
      </div>
    )
  // }
}

export default Spinner