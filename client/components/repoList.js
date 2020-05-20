import React from 'react'
import { Link } from 'react-router-dom'

const RepoList = (props) => {
  return (
    <div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              NAME
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              DEPLOYMENT
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              README
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              LAST COMMIT
            </th>
          </tr>
        </thead>
        <tbody>
          {props.userRepositories.map((el) => (
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{el.name}</td>

              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <a
                  className={`${el.homepage ? 'text-green-500 ' : 'text-red-500 '} font-semibold`}
                  href={el.homepage ? el.homepage : undefined}
                >
                  Go
                </a>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <Link to={`/${props.userName}/${el.name}`}>View readme</Link>
              </td>
              <td>{new Date(el.updated_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

RepoList.propTypes = {}
export default RepoList
