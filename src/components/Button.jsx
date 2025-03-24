import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className="h-12 bg-black px-6 py-4 ml-5"
        style={{color: props.color}}>
            {props.text}
            {props.children}
        </button>

    </div>
  )
}

export default Button