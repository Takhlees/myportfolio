import React from 'react'

export default function Contact() {

  return (
    <>
      
      <div id="contact">
      <h1 className='c-heading'>Contact Me</h1>
        
        <form className='form' action="https://formspree.io/f/xyyqwapd" method='POST'>
          <div className='c-item'>
            
            
              <input type="text" name="UserName" placeholder='Enter your name...' onChange={(e) => (e.target.value)} autoComplete='off' required />
            
          </div>
          <div className='c-item'>
            
           
              <input type="email" name="Email" placeholder='Enter your email...' onChange={(e) => (e.target.value)} autoComplete='off' required />
            </div>
          <div className='c-item'>
           
           
              <textarea name="Message" placeholder='Write any message...' cols="30" rows="3" onChange={(e) => (e.target.value)} autoComplete='off' required></textarea>
           
          </div>
          <div className='c-btn'>
            <input className='c-input' type="submit" value="Send" />
          </div>
        </form>
      </div>
     

    </>
  )
}