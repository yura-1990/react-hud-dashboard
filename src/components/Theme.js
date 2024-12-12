import React, {useEffect, useState} from 'react'
import Card from "./Card";

export default function Theme() {
  const [toggleTheme, setToggleTheme] = useState(false)
  const [themeMode, setThemeMode] = useState(localStorage.getItem('theme') || 'dark')
  const [appCover, setAppCover] = useState(localStorage.getItem('appCover') || '')
  const [themeColor, setThemeColor] = useState(localStorage.getItem('themeColor') || '')

  const handleThemeMode = (mode) => {
    localStorage.setItem('theme', mode);
    setThemeMode(mode)
    document.documentElement.setAttribute('data-bs-theme', mode);
  }

  const handleAppCover = (cover = '') => {
    localStorage.setItem('appCover', cover);
    setAppCover(cover);

    const htmlElement = document.documentElement;

    Array.from(htmlElement.classList).forEach((className) => {
      htmlElement.classList.remove(className);
    });

    if (cover) {
      htmlElement.classList.add(cover);
    }
  };

  const handleThemeColor = (color = '') => {
    localStorage.setItem('themeColor', color);

    const bodyClasses = document.body.classList;
    Array.from(bodyClasses).forEach((className) => {
      if (className.startsWith('theme-')) {
        bodyClasses.remove(className);
      }
    });

    if (color) {
      document.body.classList.add(color);
    }

    setThemeColor(color)
  }

  return (
    <div className={`app-theme-panel ${toggleTheme ? 'active' : ''}`}>
        <div className="app-theme-panel-container">
          <a onClick={()=>setToggleTheme(!toggleTheme)} href="#!" className="app-theme-toggle-btn">
            <i className="bi bi-sliders" />
          </a>
          <div className={`app-theme-panel-content`}>
            <div className="small fw-bold text-inverse mb-1">Display Mode</div>
            <Card className="mb-3">
              <div className="card-body p-2">
                <div className="row gx-2">
                  <div className="col-6">
                    <a href="#!" onClick={()=>handleThemeMode('dark')} className={`app-theme-mode-link ${ themeMode === 'dark' ? 'active' : ''}`}>
                      <div className="img">
                        <img
                          src="/assets/imgs/dark.jpg"
                          className="object-fit-cover"
                          height={76}
                          width={76}
                          alt=""
                        />
                      </div>
                      <div className="text">Dark</div>
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#!" onClick={()=>handleThemeMode('light')} className={`app-theme-mode-link ${themeMode === 'light' ? 'active' : ''}`}>
                      <div className="img">
                        <img
                          src="/assets/imgs/light.jpg"
                          className="object-fit-cover"
                          height={76}
                          width={76}
                          alt=""
                        />
                      </div>
                      <div className="text">Light</div>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
            <div className="small fw-bold text-inverse mb-1">Theme Color</div>
            <Card className="mb-3">
              <div className="card-body p-2">
                <div className="app-theme-list">
                  <div className={`app-theme-list-item ${themeColor === 'theme-pink' ? 'active' : ''}`}>
                    <a
                      href="#!"
                      className="app-theme-list-link bg-pink"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-theme-class="theme-pink"
                      onClick={()=>handleThemeColor('theme-pink')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-list-item ${themeColor === 'theme-red' ? 'active' : ''}`}>
                    <a
                      href="#!"
                      className="app-theme-list-link bg-red"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      data-theme-class="theme-red"
                      onClick={()=>handleThemeColor('theme-red')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-list-item ${themeColor === 'theme-warning' ? 'active' : ''}`}>
                    <a
                        href="#/"
                        className="app-theme-list-link bg-warning"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-container="body"
                        data-theme-class="theme-warning"
                        onClick={() => handleThemeColor('theme-warning')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-list-item ${themeColor === 'theme-yellow' ? 'active' : ''}`}>
                    <a
                        href="#/"
                        className="app-theme-list-link bg-yellow"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-container="body"
                        data-theme-class="theme-yellow"
                        onClick={() => handleThemeColor('theme-yellow')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-list-item ${themeColor === 'theme-lime' ? 'active' : ''}`}>
                    <a
                        href="#/"
                        className="app-theme-list-link bg-lime"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-container="body"
                        data-theme-class="theme-lime"
                        onClick={() => handleThemeColor('theme-lime')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-list-item ${themeColor === 'theme-green' ? 'active' : ''}`}>
                    <a
                        href="#/"
                        className="app-theme-list-link bg-green"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-container="body"
                        data-theme-class="theme-green"
                        onClick={() => handleThemeColor('theme-green')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-list-item ${!themeColor ? 'active' : ''}`}>
                    <a
                        href="#/"
                        className="app-theme-list-link bg-teal"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-container="body"
                        data-theme-class=''
                        onClick={() => handleThemeColor()}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-list-item ${themeColor === 'theme-info' ? 'active' : ''}`}>
                    <a
                        href="#/"
                        className="app-theme-list-link bg-info"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-container="body"
                        data-theme-class="theme-info"
                        onClick={() => handleThemeColor('theme-info')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-list-item ${themeColor === 'theme-primary' ? 'active' : ''}`}>
                    <a
                        href="#/"
                        className="app-theme-list-link bg-primary"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-container="body"
                        data-theme-class="theme-primary"
                        onClick={() => handleThemeColor('theme-primary')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-list-item ${themeColor === 'theme-purple' ? 'active' : ''}`}>
                    <a
                        href="#/"
                        className="app-theme-list-link bg-purple"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-container="body"
                        data-theme-class="theme-purple"
                        onClick={() => handleThemeColor('theme-purple')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-list-item ${themeColor === 'theme-indigo' ? 'active' : ''}`}>
                    <a
                        href="#/"
                        className="app-theme-list-link bg-indigo"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-container="body"
                        data-theme-class="theme-indigo"
                        onClick={() => handleThemeColor('theme-indigo')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-list-item ${themeColor === 'theme-gray-200' ? 'active' : ''}`}>
                    <a
                        href="#/"
                        className="app-theme-list-link bg-gray-200"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-container="body"
                        data-theme-class="theme-gray-200"
                        onClick={() => handleThemeColor('theme-gray-200')}
                    >
                      &nbsp;
                    </a>
                  </div>
                </div>
              </div>
            </Card>
            <div className="small fw-bold text-inverse mb-1">Theme Cover</div>
            <Card className="card ">
              <div className="card-body p-2">
                <div className="app-theme-cover">
                  <div className={`app-theme-cover-item ${!appCover ? 'active' : ''}`}>
                    <a
                      href="#!"
                      className="app-theme-cover-link "
                      data-cover-class=""
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      style={{ backgroundImage: 'url("/assets/imgs/cover-thumb-1.jpg")' }}
                      onClick={()=>handleAppCover()}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-cover-item ${appCover === 'bg-cover-2' ? 'active' : ''}`}>
                    <a
                      href="#!"
                      className="app-theme-cover-link"
                      data-cover-class="bg-cover-2"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      style={{
                        backgroundImage:
                          'url("/assets/imgs/cover-thumb-2.jpg")'
                      }}
                      onClick={()=>handleAppCover('bg-cover-2')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-cover-item ${appCover === 'bg-cover-3' ? 'active' : ''}`}>
                    <a
                      href="#!"
                      className="app-theme-cover-link"
                      data-cover-class="bg-cover-3"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      style={{
                        backgroundImage:
                          'url("/assets/imgs/cover-thumb-3.jpg")'
                      }}
                      onClick={()=>handleAppCover('bg-cover-3')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-cover-item ${appCover === 'bg-cover-4' ? 'active' : ''}`}>
                    <a
                      href="#!"
                      className="app-theme-cover-link"
                      data-cover-class="bg-cover-4"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      style={{
                        backgroundImage:
                          'url("/assets/imgs/cover-thumb-4.jpg")'
                      }}
                      onClick={()=>handleAppCover('bg-cover-4')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-cover-item ${appCover === 'bg-cover-5' ? 'active' : ''}`}>
                    <a
                      href="#!"
                      className="app-theme-cover-link"
                      data-cover-class="bg-cover-5"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      style={{
                        backgroundImage:
                          'url("/assets/imgs/cover-thumb-5.jpg")'
                      }}
                      onClick={()=>handleAppCover('bg-cover-5')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-cover-item ${appCover === 'bg-cover-6' ? 'active' : ''}`}>
                    <a
                      href="#!"
                      className="app-theme-cover-link"
                      data-cover-class="bg-cover-6"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      style={{
                        backgroundImage:
                          'url("/assets/imgs/cover-thumb-6.jpg")'
                      }}
                      onClick={()=>handleAppCover('bg-cover-6')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-cover-item ${appCover === 'bg-cover-7' ? 'active' : ''}`}>
                    <a
                      href="#!"
                      className="app-theme-cover-link"
                      data-cover-class="bg-cover-7"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      style={{
                        backgroundImage:
                          'url("/assets/imgs/cover-thumb-7.jpg")'
                      }}
                      onClick={()=>handleAppCover('bg-cover-7')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-cover-item ${appCover === 'bg-cover-8' ? 'active' : ''}`}>
                    <a
                      href="#!"
                      className="app-theme-cover-link"
                      data-cover-class="bg-cover-8"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      style={{
                        backgroundImage:
                          'url("/assets/imgs/cover-thumb-8.jpg")'
                      }}
                      onClick={()=>handleAppCover('bg-cover-8')}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <div className={`app-theme-cover-item ${appCover === 'bg-cover-9' ? 'active' : ''}`}>
                    <a
                      href="#!"
                      className="app-theme-cover-link"
                      data-cover-class="bg-cover-9"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-container="body"
                      style={{
                        backgroundImage:
                          'url("/assets/imgs/cover-thumb-9.jpg")'
                      }}
                      onClick={()=>handleAppCover('bg-cover-9')}
                    >
                      &nbsp;
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
  )
}
