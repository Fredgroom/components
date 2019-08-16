import React from 'react';
import './styles.scss'

const SimPicRadio = (props) => {
  const {names, images} = props;
  return (
    <div className='SimPicRadio'>
        <div className='SimPicRadio-container-radio'> 
        {names.map((name,i) => (
          <div>
          <label>
           <input name='Radio' value={name} type="radio"/>
           <img src={images[i]} alt=""/>
          
          <p>{name}</p></label>
        </div>
        ))}
        </div>
    </div>
    )
  }
export default SimPicRadio;