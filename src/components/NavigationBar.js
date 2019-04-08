import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand" style={{ margin: 0, padding: 0 }}>
        中移铁通
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/">
              <div className="nav-link" >首页 <span className="sr-only">(current)</span></div>
            </Link>

          </li>

          <li className="nav-item">
            <Link to="/upload">
              <div className="nav-link ">上传数据</div>
            </Link>
          </li>

{/*           <li className="nav-item">
            <Link to="/signup">
              <div className="nav-link ">测试</div>
            </Link>
          </li> */}

        </ul>
{/*         <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
      </div>
    </nav>
  );
}

export default NavigationBar
