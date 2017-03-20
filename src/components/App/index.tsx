import * as React from 'react'
import * as CSSModules from 'react-css-modules'

import LeftPanel from '../LeftPanel'
import RightPanel from '../RightPanel'

const styles = require('./style.css')

@CSSModules(styles)
export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  // saySth = () => {
  //   this.props.display(words[Math.floor(Math.random() * words.length)])
  // }
  render() {
    return (
      <div styleName='app'>
        <LeftPanel />
        <RightPanel />
        {/*<p>{this.props.mes}</p>
        <button onClick={this.saySth}>blablabl</button>*/}
      </div>
    )
  }
}


// const words = [
//   'Hommie',
//   'Dude',
//   'Super Dev',
//   'Dev',
//   'Reduxer',
//   'YOLO',
//   'BYE',
//   'Crazy',
//   'Superman',
//   'Github',
//   'React',
//   'Redux',
//   'Facebook',
//   'Duck',
//   'SHIELD',
//   'Captain',
//   'World',
//   'Mars',
//   'Webpack',
//   'You',
//   'Hello',
//   'Japanese people',
//   'Gaeron!',
// ]
