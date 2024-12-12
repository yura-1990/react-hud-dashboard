import React from 'react'
import Card from '../components/Card'

export default function Menus() {
  return (
    <Card>
        <div className="card-body">
            <Card>
                <div className="card-body">
                    Menus
                </div>
            </Card>
            <Card>
                <div className="card-body">
                    <a href="#/" className="list-group-item list-group-item-action d-flex align-items-center ">
                        <div className="flex-fill ">
                            <div className="fw-bold">Link with arrow</div>
                        </div>
                        <div>
                            <i className="fa fa-chevron-right"></i>
                        </div>
                    </a>
                </div>
            </Card>
        </div>
    </Card>
  )
}
