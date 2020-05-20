import React from 'react'
import { Link } from 'react-router-dom'
import './list.scss'

const RepoList = (props) => {
  return (
    <div className="flex items-center justify-center repoList">
      <table>
        <thead>
          <tr>
            <th className="px-6 py-0 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              ReadMe
            </th>
          </tr>
        </thead>
        <tbody>
          {props.userRepositories.map((el) => (
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{el.name}</td>
              <Link to={`/${props.userName}/${el.name}`}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  View readme
                </td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

RepoList.propTypes = {}
export default RepoList
