import React from 'react'
import { GlobalStyle } from './styles/global'
import { Container, Content, List } from './styles/components'
import Item from './components/Item'

import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const data = require('./api/data.json')

function App() {
  return (
    <>
      <Container>
        <Content>
          <PerfectScrollbar>
            <List className="show">
              {
                Object.keys(data).map(item => <Item key={data[item].id} item={data[item]}/>)
              }
            </List>
          </PerfectScrollbar>
        </Content>
      </Container>
      <GlobalStyle />
    </>
  )
}

export default App
