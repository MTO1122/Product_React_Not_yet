import React from 'react'
import {Link} from 'react-router-dom'
import '../style/navbar.css'

const Navbar = () => {
    return (
        <div className="topbar-fixed">
            <div className="buttons">
                <Link to="/View"><i class="far fa-eye"></i>View</Link>
                <Link to="/Studio"><i class="fas fa-pencil-alt"></i>Studio</Link>
            </div>
        </div>

    )
}

export default Navbar
