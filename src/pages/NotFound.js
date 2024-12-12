import React from 'react'

export default function NotFound() {
    return (
        <div className="error-page">
            <div className="error-page-content">
                <div className="card mb-5 mx-auto" style={{"max-width": "320px"}}>
                    <div className="card-body">
                        <div className="card">
                            <div className="error-code">404</div>
                            <div className="card-arrow">
                                <div className="card-arrow-top-left"></div>
                                <div className="card-arrow-top-right"></div>
                                <div className="card-arrow-bottom-left"></div>
                                <div className="card-arrow-bottom-right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card-arrow">
                        <div className="card-arrow-top-left"></div>
                        <div className="card-arrow-top-right"></div>
                        <div className="card-arrow-bottom-left"></div>
                        <div className="card-arrow-bottom-right"></div>
                    </div>
                </div>
                <h1>Oops!</h1>
                <h3>We can't seem to find the page you're looking for</h3>
                <hr/>
                <p className="mb-1">
                    Here are some helpful links instead:
                </p>
                <p className="mb-5">
                    <a href="/" className="text-decoration-none text-inverse text-opacity-50">Home</a>
                    <span className="link-divider"></span>
                    <a href="/"
                       className="text-decoration-none text-inverse text-opacity-50">Search</a>
                    <span className="link-divider"></span>
                    <a href="/" className="text-decoration-none text-inverse text-opacity-50">Email</a>
                    <span className="link-divider"></span>
                    <a href="/" className="text-decoration-none text-inverse text-opacity-50">Calendar</a>
                    <span className="link-divider"></span>
                    <a href="/" className="text-decoration-none text-inverse text-opacity-50">Settings</a>
                    <span className="link-divider"></span>
                    <a href="/" className="text-decoration-none text-inverse text-opacity-50">Helper</a>
                </p>
                <a href="/" className="btn btn-outline-theme px-3 rounded-pill"><i
                    className="fa fa-arrow-left me-1 ms-n1"></i> Go Back</a>
            </div>
        </div>
    )
}
