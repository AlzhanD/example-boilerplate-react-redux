import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-600 p-6 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {props.userName && <img className="w-16 mx-2" src={props.user.avatar_url} alt="" />}
        {props.userName && <span className="text-3xl mx-2">{props.user.login}</span>}
      </div>
      <div id="menu" className="flex space-x-4">
        <div>
          <button
            type="button"
            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            {props.userName && <Link to="/">Main</Link>}
          </button>
        </div>
        <div>
          <button
            type="button"
            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            {props.readMe && <Link to={`/${props.userName}`}>Repositories</Link>}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default React.memo(Header)
