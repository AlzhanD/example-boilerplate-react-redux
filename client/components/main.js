import React, { useState } from 'react'
import { history } from '../redux'
import Head from './head'

const Main = () => {
  const [userValue, setUserValue] = useState('')
  return (
    <div className="flex justify-center items-center h-screen">
      <Head title="Hello" />
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://image.flaticon.com/icons/svg/25/25231.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 mb-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Users repository search
        </h2>
        <input
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              history.push(`/${userValue}`)
            }
          }}
          type="text"
          id="input-field"
          className="bg-gray-200 mr-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
          value={userValue}
          onChange={(event) => setUserValue(event.target.value)}
        />
        <button
          type="button"
          id="search-button"
          className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ... bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => history.push(`/${userValue}`)}
        >
          View repositories
        </button>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
