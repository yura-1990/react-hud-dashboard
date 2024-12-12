import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const [menus, setMenus] = useState([])
    
    const handleDropDownMenuToggle = (toggleMenu) => {
        if(menus.includes(toggleMenu)){
            const menu = menus.filter(el=>el !== toggleMenu)
            setMenus(menu)
        } else {
            setMenus([...menus, toggleMenu])
        }
    }
    
    
    return (
        <div id="sidebar" className="app-sidebar">
            <div className="scrollbar-container app-sidebar-content ps ps--active-y">
            <div className="menu">
                <>
                    <div className="menu-header">Navigation</div>
                    <div className="menu-item">
                        <Link to={'/'} className="menu-link">
                            <div className="menu-icon"><i className="bi bi-cpu"></i></div>
                            <div className="menu-text">Dashboard </div>
                        </Link>
                    </div>
                </>
                <div className="menu-item">
                    <Link to={'/menus'} className="menu-link">
                        <div className="menu-icon"><i className="bi bi-bar-chart"></i></div>
                        <div className="menu-text">Menus</div>
                    </Link>
                </div>
                <div className={`menu-item has-sub ${menus.includes('Email') ? 'expand': ''}`}>
                    <a onClick={()=>handleDropDownMenuToggle('Email')} className="menu-link" href="#!">
                        <div className="menu-icon"><i className="bi bi-envelope"></i></div>
                        <div className="menu-text">Email</div>
                        <div className="menu-caret"><b className="caret"></b></div>
                    </a>
                    <div className="menu-submenu" >
                        <div className="menu-item">
                            <a className="menu-link" href="/hud-react/email/inbox">
                                <div className="menu-text">Inbox  </div>
                            </a>
                        </div>
                        <div className="menu-item">
                            <a className="menu-link" href="/hud-react/email/compose">
                                <div className="menu-text">Compose  </div>
                            </a>
                        </div>
                        <div className="menu-item">
                            <a className="menu-link" href="/hud-react/email/detail">
                                <div className="menu-text">Detail  </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="menu-divider"></div>
                <div className="menu-header">Components</div>
                <div className="menu-item">
                    <a className="menu-link" href="/hud-react/widgets">
                    <div className="menu-icon"><i className="bi bi-columns-gap"></i></div>
                    <div className="menu-text">Widgets  </div>
                    </a>
                </div>
                <div className={`menu-item has-sub ${menus.includes('POS System') ? 'expand': ''}`}>
                    <a onClick={()=>handleDropDownMenuToggle('POS System')} className="menu-link" href="#!">
                        <div className="menu-icon"><i className="bi bi-bag-check"></i></div>
                        <div className="menu-text">POS System  <i className="fa fa-paper-plane text-theme"></i></div>
                        <div className="menu-caret"><b className="caret"></b></div>
                    </a>
                    <div className="menu-submenu">
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pos/customer-order">
                            <div className="menu-text">Customer Order  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pos/kitchen-order">
                            <div className="menu-text">Kitchen Order  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pos/counter-checkout">
                            <div className="menu-text">Counter Checkout  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pos/table-booking">
                            <div className="menu-text">Table Booking  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pos/menu-stock">
                            <div className="menu-text">Menu Stock  </div>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="menu-item has-sub">
                    <a className="menu-link" href="/hud-react/ui">
                    <div className="menu-icon"><i className="fa fa-heart"></i></div>
                    <div className="menu-text">UI Kits  </div>
                    <div className="menu-caret"><b className="caret"></b></div>
                    </a>
                    <div className="menu-submenu">
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/ui/bootstrap">
                            <div className="menu-text">Bootstrap  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/ui/buttons">
                            <div className="menu-text">Buttons  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/ui/card">
                            <div className="menu-text">Card  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/ui/icons">
                            <div className="menu-text">Icons  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/ui/modal-notifications">
                            <div className="menu-text">Modal &amp Notifications  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/ui/typography">
                            <div className="menu-text">Typography  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/ui/tabs-accordions">
                            <div className="menu-text">Tabs &amp Accordions  </div>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="menu-item has-sub">
                    <a className="menu-link" href="/hud-react/form">
                    <div className="menu-icon"><i className="bi bi-pen"></i></div>
                    <div className="menu-text">Forms  </div>
                    <div className="menu-caret"><b className="caret"></b></div>
                    </a>
                    <div className="menu-submenu">
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/form/elements">
                            <div className="menu-text">Form Elements  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/form/plugins">
                            <div className="menu-text">Form Plugins  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/form/wizards">
                            <div className="menu-text">Wizards  </div>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="menu-item has-sub">
                    <a className="menu-link" href="/hud-react/table">
                    <div className="menu-icon"><i className="bi bi-grid-3x3"></i></div>
                    <div className="menu-text">Tables  </div>
                    <div className="menu-caret"><b className="caret"></b></div>
                    </a>
                    <div className="menu-submenu">
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/table/elements">
                            <div className="menu-text">Table Elements  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/table/plugins">
                            <div className="menu-text">Table Plugins  </div>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="menu-item has-sub">
                    <a className="menu-link" href="/hud-react/chart">
                    <div className="menu-icon"><i className="bi bi-pie-chart"></i></div>
                    <div className="menu-text">Charts  </div>
                    <div className="menu-caret"><b className="caret"></b></div>
                    </a>
                    <div className="menu-submenu">
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/chart/chart-js">
                            <div className="menu-text">Chart.js  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/chart/chart-apex">
                            <div className="menu-text">Apexcharts.js  </div>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="menu-item">
                    <a className="menu-link" href="/hud-react/map">
                    <div className="menu-icon"><i className="bi bi-compass"></i></div>
                    <div className="menu-text">Map  </div>
                    </a>
                </div>
                <div className="menu-item has-sub">
                    <a className="menu-link" href="/hud-react/layout">
                    <div className="menu-icon"><i className="bi bi-layout-sidebar"></i></div>
                    <div className="menu-text">Layout  </div>
                    <div className="menu-caret"><b className="caret"></b></div>
                    </a>
                    <div className="menu-submenu">
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/layout/starter-page">
                            <div className="menu-text">Starter Page  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/layout/fixed-footer">
                            <div className="menu-text">Fixed Footer  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/layout/full-height">
                            <div className="menu-text">Full Height  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/layout/full-width">
                            <div className="menu-text">Full Width  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/layout/boxed-layout">
                            <div className="menu-text">Boxed Layout  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/layout/collapsed-sidebar">
                            <div className="menu-text">Collapsed Sidebar  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/layout/top-nav">
                            <div className="menu-text">Top Nav  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/layout/mixed-nav">
                            <div className="menu-text">Mixed Nav  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/layout/mixed-nav-boxed-layout">
                            <div className="menu-text">Mixed Nav Boxed Layout  </div>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="menu-item has-sub">
                    <a className="menu-link" href="/hud-react/pages">
                    <div className="menu-icon"><i className="bi bi-collection"></i></div>
                    <div className="menu-text">Pages  </div>
                    <div className="menu-caret"><b className="caret"></b></div>
                    </a>
                    <div className="menu-submenu">
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/scrum-board">
                            <div className="menu-text">Scrum Board  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/products">
                            <div className="menu-text">Products  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/product-details">
                            <div className="menu-text">Product Details  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/orders">
                            <div className="menu-text">Orders  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/order-details">
                            <div className="menu-text">Order Details  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/gallery">
                            <div className="menu-text">Gallery  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/search-results">
                            <div className="menu-text">Search Results  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/coming-soon">
                            <div className="menu-text">Coming Soon Page  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/error">
                            <div className="menu-text">Error Page  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/login">
                            <div className="menu-text">Login  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/register">
                            <div className="menu-text">Register  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/messenger">
                            <div className="menu-text">Messenger  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/data-management">
                            <div className="menu-text">Data Management  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/file-manager">
                            <div className="menu-text">File Manager  </div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a className="menu-link" href="/hud-react/pages/pricing">
                            <div className="menu-text">Pricing Page  </div>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="menu-item">
                    <a className="menu-link" href="/hud-react/landing">
                    <div className="menu-icon"><i className="bi bi-diagram-3"></i></div>
                    <div className="menu-text">Landing  </div>
                    </a>
                </div>
                <div className="menu-divider"></div>
                <div className="menu-header">Users</div>
                <div className="menu-item">
                    <a className="menu-link" href="/hud-react/profile">
                    <div className="menu-icon"><i className="bi bi-people"></i></div>
                    <div className="menu-text">Profile  </div>
                    </a>
                </div>
                <div className="menu-item">
                    <a className="menu-link" href="/hud-react/calendar">
                    <div className="menu-icon"><i className="bi bi-calendar4"></i></div>
                    <div className="menu-text">Calendar  </div>
                    </a>
                </div>
                <div className="menu-item">
                    <a className="menu-link" href="/hud-react/settings">
                    <div className="menu-icon"><i className="bi bi-gear"></i></div>
                    <div className="menu-text">Settings  </div>
                    </a>
                </div>
                <div className="menu-item">
                    <a className="menu-link" href="/hud-react/helper">
                    <div className="menu-icon"><i className="bi bi-gem"></i></div>
                    <div className="menu-text">Helper  </div>
                    </a>
                </div>
            </div>
            <div className="p-3 px-4 mt-auto"><a href="https://seantheme.com/hud-react/documentation/index.html" rel="noreferrer" target="_blank" className="btn d-block btn-outline-theme"><i className="fa fa-code-branch me-2 ms-n2 opacity-5"></i> Documentation</a></div>
            <div className="ps__rail-x" style={{"left": "0px", "bottom": "0px"}}>
                <div className="ps__thumb-x" tabIndex="0" style={{"left": "0px", "width": "0px"}}></div>
            </div>
            <div className="ps__rail-y" style={{"top": "0px", "right": "0px", "height": "257px"}}>
                <div className="ps__thumb-y" tabIndex="0" style={{"top": "0px", "height": "91px"}}></div>
            </div>
            </div>
        </div>
    )
}
