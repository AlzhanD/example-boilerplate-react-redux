import React from 'react'
import Markdown from 'markdown-to-jsx'
import './readme.scss'

const RepoView = (props) => {
  return (
    <div className="markdown-body">
      <Markdown>{props.readMe}</Markdown>
    </div>
  )
}

RepoView.propTypes = {}
export default RepoView
