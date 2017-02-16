import React  		from 'react'
import { Route } 	from 'react-router'

import Root 		from './containers/Root'
import Hello 		from './components/Hello'
import Reddit 		from './components/Reddit'




export default(
  <Route path='/'component={Root} >
    <Route path="hello" component ={Hello}/ >
    <Route path="Reddit" component ={Reddit}/>
  </Route>
)
