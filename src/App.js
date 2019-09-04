import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'

class App extends Component {
    render() {
        return (
            <Layout>
              <Quiz>
                  <h1>React JS</h1>
              </Quiz>
            </Layout>
        )
    }
}

export default App