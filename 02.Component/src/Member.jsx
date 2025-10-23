import React from 'react'
const Member = ({mudo,name}) => {
    

    let boxStyle ={
        backgroundColor : 'whitesmoke',
        border : '1px solid balck',
        padding : '30px',
        borderRadius : '10px',
        textAlign : 'center',
        marginTop : '10px',
        color:'black',
        with : '500px'
    }

  return (
    <div>
        <div style={boxStyle}>
            {mudo}{""}{name}
        </div>
    </div>
 )
}

export default Member