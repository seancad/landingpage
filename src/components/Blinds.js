import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'


let Blinds = () =>{
    
    if ("serial" in navigator) {
        console.log("hello")
      }
    const [isOpen,setOpen] = React.useState(false)
    
    return (
        <Fragment>
            
            <div className="slide" open={isOpen}></div>

            {!isOpen && <div onClick={()=>setOpen(true)} className="open-circle"> 
                <div className="open-circle-text">
                    Launch 
                </div>
            </div>}
            <div className="slide" open={isOpen}></div>
        </Fragment>
    )
}

export default Blinds