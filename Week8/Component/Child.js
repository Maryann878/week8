import React from 'react'

const para = {
    color:'green',
    backgroundColor: 'black'
}


 function Child() {
    return (
        <div>
            <h1 className="heading">Hello World</h1>
            <p id="footer">This is the Footer</p>
            <p>This is my name</p>

        </div>
    )
}

export default Child