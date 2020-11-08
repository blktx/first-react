import React from 'react';

const Hello = () => {
    // return(
    //     <div className = 'dummyClass'>
    //         <h1>Hello, my friends!</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id : 'hello' , className: 'dummyClass'} , //className instead of class
            React.createElement(
                'h1', null , 'Hello, my friends!'
            )
        )
}

export default Hello;