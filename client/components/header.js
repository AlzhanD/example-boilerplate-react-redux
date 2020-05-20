import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {props.userName && <img className="w-16 mx-2" src={props.user.avatar_url} alt="" />}
        {props.userName && <span className="text-3xl mx-2">{props.user.login}</span>}
      </div>
      <a className="no-underline hover:underline text-white text-lg" href="https://github.com/">
        GitHub.com
      </a>
      <div id="menu" className="flex space-x-4">
        <div>
          <button
            type="button"
            className="flex items-center px-1 py-1 rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            {props.userName && <Link to="/">Main</Link>}
          </button>
        </div>
        <div>
          <button
            type="button"
            className="flex items-center px-1 py-1 rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            {props.readMe && <Link to={`/${props.userName}`}>Repositories</Link>}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default React.memo(Header)
