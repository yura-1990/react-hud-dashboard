import React from 'react'

export default function Card({children, className}) {
  return (
    <div className={`card ${className}`} >
        {children}
        <div className="card-arrow">
            <div className="card-arrow-top-left" />
            <div className="card-arrow-top-right" />
            <div className="card-arrow-bottom-left" />
            <div className="card-arrow-bottom-right" />
        </div>
    </div>
  )
}
