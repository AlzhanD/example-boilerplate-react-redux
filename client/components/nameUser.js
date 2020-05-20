import React from 'react'
import Markdown from 'markdown-to-jsx'
import './readme.scss'
import Loader from 'react-loader-spinner'

const RepoView = (props) => {
  return (
    <div className="markdown-body relative">
      <div className="absolute">
        <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={500} />
      </div>
      <Markdown>{props.readMe}</Markdown>
    </div>
  )
}

RepoView.propTypes = {}
export default RepoView
