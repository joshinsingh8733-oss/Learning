import React from 'react'

function Content() {
  return (
    <div className='Con'>
      <div>
        <h1>HI,WE'RE ULTRA MODERN LANDING</h1>
        <h2>WE'LL CHANGE YOUR IDEA OF DESIGN</h2>
        <h3>pellentesque sapien purus,sagitis eu accumsan convallis,vehicula ut letus.</h3>
        <h4>Fusce accumsan purus pretium ligula vehicula,ut interdum nisl vulputate.</h4>
        <h4>Vivamus ultrices luctus quam eu feugiat</h4>
        <button type="button" class="btn btn-warning">DISCOVER MORE</button>
      </div>
      <div className='input_sec'>
        <h2>SIGN UP TO FIND OUT MORE!</h2>
        <label for="username">Username:</label>
        <input type="text" id="usename" name="username" /><br />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" /><br />
        <button type="button" class="btn btn-warning">REGISTER NOW</button>
      </div>
    </div>

  )
}

export default Content
