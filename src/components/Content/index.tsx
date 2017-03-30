import * as React from 'react'

import SearchResult from '../SearchResult'
import './style.css'

class Content extends React.PureComponent<void, void> {

  render() {
    return (
      <div>
        <SearchResult />
      </div>
    )
  }
}

export default Content
