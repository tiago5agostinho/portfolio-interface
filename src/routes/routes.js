import React from 'react'
import {
  Routes as Swith,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

//import paths from "../../constants/path";
import { Home, ToolsBackend, ToolsFrontend } from '../containers'

function Routes() {
  return (
    <Router>
      <Swith>
        <Route path="/" element={<Home />} />
        <Route path="/backend" element={<ToolsBackend />} />
        <Route path="/frontend" element={<ToolsFrontend />} />
      </Swith>
    </Router>
  )
}

export default Routes
