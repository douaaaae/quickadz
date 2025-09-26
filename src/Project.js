/* import React from 'react'
import './project.css'
import logo from './images/adz-w.jpg'
export default function Project() {
  return (
    <div>
      <h1>HIII</h1>
      <table align='center' style={{display:"block", alignContent:"center", align:"center", margin :"0"}}>
        <tr ><img src={logo} alt="" style={{maxWidth : "100%"}} /></tr>
        <tr>
            <td><h1>HHHH</h1></td>
        </tr>
      </table>
    </div>
  )
}
 */

import React from 'react'
import './project.css'
import logo from './images/adz-w.jpg'

export default function Project() {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center'
      }}
    >
      <h1>HIII</h1>
      <img src={logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
      <h1>HHHH</h1>
    </div>
  )
}
