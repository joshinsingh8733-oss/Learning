import React from 'react'

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">xLANDER</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className='bar'>
      <div class="navbar-nav">
       
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">ABOUT</a>
        <a class="nav-link" href="#">FEATURES</a>
        <a class="nav-link" href="#">WORKS</a>
        <a class="nav-link" href="#">TEAM</a>
        <a class="nav-link" href="#">PRICING</a>
        <a class="nav-link" href="#">BLOG</a>
        <a class="nav-link" href="#">CONTACTS</a>
        {/* <a class="nav-link disabled" aria-disabled="true">Disabled</a> */}
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
