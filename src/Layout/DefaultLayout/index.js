import React from 'react'
import Header from '../Component/Header'
import Sidebar from '../Component/Sidebar'
import {Outlet} from 'react-router-dom'
function DefautLayout() {
  return (
    <div>
        <Header/>
        <div className="row">
            <div className="col-5">
                <Sidebar/>
            </div>
            <div className="col-7">
               <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default DefautLayout