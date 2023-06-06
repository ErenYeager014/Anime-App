import React,{useContext} from 'react'

function Header() {
  const hamburg=document.querySelector(".humbergurg");
  const mainNav=document.querySelector(".main-nav");
  const eventhandler=()=>{
    hamburg.classList.toggle("active");
    mainNav.classList.toggle("active");
  }
  return (
    <>
    <nav className='header'>
        <div className='title'>
            google
        </div>
        
        <ul className='main-nav'>
        
            <li><a href='#'>Home</a></li>
            <li><a href="#">API Docs</a></li>
            <li><a href="#">About</a></li>
            
        </ul>
        <div className='humbergurg' onClick={eventhandler} style={{
          padding:'0px 20px'
        }}>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
    </nav>
    </>
  )
}

export default Header