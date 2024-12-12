import React from 'react'
import useSettingsStore from '../store/settings'

export default function Header() {

    const {handleMenuToggle, handleSearchToggle} = useSettingsStore(state=>state)

    return (
        <div id="header" className="app-header">
            <div className="desktop-toggler">
                <button onClick={handleMenuToggle} type="button" className="menu-toggler">
                    <span className="bar"></span>
                    <span className="bar"> </span>
                    <span className="bar">
                    </span>
                </button>
            </div>
            <div className="mobile-toggler">
            <button type="button" className="menu-toggler">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            </div>
            <div className="brand">
                <a className="brand-logo" href="/hud-react">
                    <span className="brand-img">
                        <span className="brand-img-text text-theme">H</span>
                    </span>
                    <span className="brand-text">
                        HUD ADMIN
                    </span>
                </a>
            </div>
            <div className="menu">
                <div className="menu-item dropdown">
                    <a href="#!" onClick={handleSearchToggle} className="menu-link">
                        <div className="menu-icon">
                            <i className="fa-light fa-magnifying-glass"></i>
                        </div>
                    </a>
                </div>
            <div className="menu-item dropdown dropdown-mobile-full">
                <a href="#/" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
                <div className="menu-icon">
                    <i className="bi bi-grid-3x3-gap nav-icon"></i>
                </div>
                </a>
                <div className="dropdown-menu fade dropdown-menu-end w-300px text-center p-0 mt-1">
                <div className="row row-grid gx-0">
                    <div className="col-4">
                    <a className="dropdown-item text-decoration-none p-3 bg-none" href="/hud-react/email/inbox">
                    <div className="position-relative">
                        <i className="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
                        <i className="bi bi-envelope h2 opacity-5 d-block my-1"></i>
                    </div>
                    <div className="fw-500 fs-10px text-inverse">INBOX</div>
                    </a>
                </div>
                <div className="col-4">
                    <a className="dropdown-item text-decoration-none p-3 bg-none" href="/hud-react/pos/customer-order">
                    <div>
                        <i className="bi bi-hdd-network h2 opacity-5 d-block my-1"></i>
                    </div>
                    <div className="fw-500 fs-10px text-inverse">POS SYSTEM</div>
                    </a>
                </div>
                <div className="col-4"><a className="dropdown-item text-decoration-none p-3 bg-none" href="/hud-react/calendar">
                    <div>
                    <i className="bi bi-calendar4 h2 opacity-5 d-block my-1"></i>
                    </div>
                <div className="fw-500 fs-10px text-inverse">CALENDAR</div>
                </a>
            </div>
            </div>
            <div className="row row-grid gx-0">
            <div className="col-4">
                <a className="dropdown-item text-decoration-none p-3 bg-none" href="/hud-react/helper">
                <div>
                    <i className="bi bi-terminal h2 opacity-5 d-block my-1"></i>
                </div>
                <div className="fw-500 fs-10px text-inverse">HELPER</div>
                </a>
            </div>
            <div className="col-4">
                <a className="dropdown-item text-decoration-none p-3 bg-none" href="/hud-react/settings">
                <div className="position-relative">
                    <i className="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
                    <i className="bi bi-sliders h2 opacity-5 d-block my-1"></i>
                </div>
                <div className="fw-500 fs-10px text-inverse">SETTINGS</div>
                </a>
            </div>
            <div className="col-4">
                <a className="dropdown-item text-decoration-none p-3 bg-none" href="/hud-react/widgets">
                <div>
                    <i className="bi bi-collection-play h2 opacity-5 d-block my-1"></i>
                </div>
                <div className="fw-500 fs-10px text-inverse">WIDGETS</div>
                </a>
            </div>
            </div>
        </div>
        </div>
        <div className="menu-item dropdown dropdown-mobile-full">
        <a href="#/" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
            <div className="menu-icon">
            <i className="bi bi-bell nav-icon"></i>
            </div>
            <div className="menu-badge bg-theme"></div>
        </a>
        <div className="dropdown-menu dropdown-menu-end mt-1 w-300px fs-11px pt-1">
            <h6 className="dropdown-header fs-10px mb-1">NOTIFICATIONS</h6>
            <div className="dropdown-divider mt-1"></div>
            <a href="#/" className="d-flex align-items-center py-10px dropdown-item text-wrap fw-semibold">
            <div className="fs-20px">
                <i className="bi bi-bag text-theme"></i>
            </div>
            <div className="flex-1 flex-wrap ps-3">
                <div className="mb-1 text-inverse">NEW ORDER RECEIVED ($1,299)</div>
                <div className="small text-inverse text-opacity-50">JUST NOW</div>
                </div>
                <div className="ps-2 fs-16px">
                <i className="bi bi-chevron-right"></i>
                </div>
            </a>
            <a href="#/" className="d-flex align-items-center py-10px dropdown-item text-wrap fw-semibold">
                <div className="fs-20px">
                <i className="bi bi-person-circle text-theme"></i>
                </div>
                <div className="flex-1 flex-wrap ps-3">
                <div className="mb-1 text-inverse">3 NEW ACCOUNT CREATED</div>
                    <div className="small text-inverse text-opacity-50">2 MINUTES AGO</div>
                </div>
                <div className="ps-2 fs-16px">
                    <i className="bi bi-chevron-right"></i>
                </div>
                </a>
                <a href="#/" className="d-flex align-items-center py-10px dropdown-item text-wrap fw-semibold">
                <div className="fs-20px">
                    <i className="bi bi-gear text-theme"></i>
                </div>
                <div className="flex-1 flex-wrap ps-3">
                    <div className="mb-1 text-inverse">SETUP COMPLETED</div>
                    <div className="small text-inverse text-opacity-50">3 MINUTES AGO</div>
                </div>
                <div className="ps-2 fs-16px">
                    <i className="bi bi-chevron-right"></i>
                </div>
                </a>
                <a href="#/" className="d-flex align-items-center py-10px dropdown-item text-wrap fw-semibold">
                <div className="fs-20px">
                    <i className="bi bi-grid text-theme"></i>
                </div>
                <div className="flex-1 flex-wrap ps-3">
                    <div className="mb-1 text-inverse">WIDGET INSTALLATION DONE</div>
                    <div className="small text-inverse text-opacity-50">5 MINUTES AGO</div>
                </div>
                <div className="ps-2 fs-16px">
                    <i className="bi bi-chevron-right"></i>
                </div>
                </a>
                <a href="#/" className="d-flex align-items-center py-10px dropdown-item text-wrap fw-semibold">
                <div className="fs-20px">
                    <i className="bi bi-credit-card text-theme"></i>
                </div>
                <div className="flex-1 flex-wrap ps-3">
                    <div className="mb-1 text-inverse">PAYMENT METHOD ENABLED</div>
                    <div className="small text-inverse text-opacity-50">10 MINUTES AGO</div>
                </div>
                <div className="ps-2 fs-16px">
                    <i className="bi bi-chevron-right"></i>
                </div>
                </a>
                <hr className="mb-0 mt-2"/>
                <div className="py-10px mb-n2 text-center">
                <a href="#/" className="text-decoration-none fw-bold">SEE ALL</a>
                </div>
            </div>
            </div>
            <div className="menu-item dropdown dropdown-mobile-full">
            <a href="#/" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
                <div className="menu-img online">
                <img src="/hud-react/assets/img/user/profile.jpg" alt="Profile" height="60"/>
                </div>
                <div className="menu-text d-sm-block d-none w-170px">username@account.com</div>
            </a>
            <div className="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
                <a className="dropdown-item d-flex align-items-center" href="/hud-react/profile">
                PROFILE 
                <i className="bi bi-person-circle ms-auto text-theme fs-16px my-n1"></i>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="/hud-react/email/inbox">
                INBOX 
                <i className="bi bi-envelope ms-auto text-theme fs-16px my-n1"></i>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="/hud-react/calendar">
                CALENDAR 
                <i className="bi bi-calendar ms-auto text-theme fs-16px my-n1"></i>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="/hud-react/settings">
                SETTINGS 
                <i className="bi bi-gear ms-auto text-theme fs-16px my-n1"></i>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item d-flex align-items-center" href="/hud-react/pages/login">
                LOGOUT 
                <i className="bi bi-toggle-off ms-auto text-theme fs-16px my-n1"></i>
                </a>
            </div>
            </div>
        </div>
        <form className="menu-search" method="POST" name="header_search_form">
            <div className="menu-search-container">
            <div className="menu-search-icon">
            <i className="fa-light fa-magnifying-glass"></i>
            </div>
            <div className="menu-search-input">
                <input type="text" className="form-control form-control-lg" placeholder="Search menu..." />
            </div>
            <div onClick={handleSearchToggle} className="menu-search-icon">
                <a href="#!"><i className="fa-solid fa-xmark"></i></a>
            </div>
            </div>
        </form>   
        </div>
    )
}
