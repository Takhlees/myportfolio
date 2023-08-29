import React from 'react'

export default function Contact() {

  return (
    <>
      
      <div id="contact">
      <h1 className='c-heading'>Contact Me</h1>
        <div className='c-list'>
        <form className='form' action="https://formspree.io/f/xyyqwapd" method='POST'>
          <div className='c-item'>
            <label htmlFor='name'>Name: </label>
            <div>
              <input type="text" name="UserName" onChange={(e) => (e.target.value)} autoComplete='off' required />
            </div>
          </div>
          <div className='c-item'>
            <label htmlFor='email'>Email: </label>
            <div>
              <input type="email" name="Email" onChange={(e) => (e.target.value)} autoComplete='off' required />
            </div>
          </div>
          <div className='c-item'>
            <label htmlFor='message'>Message: </label>
            <div>
              <textarea name="Message" cols="30" rows="3" onChange={(e) => (e.target.value)} autoComplete='off' required></textarea>
            </div>
          </div>
          <div className='c-btn'>
            <input className='c-input' type="submit" value="Send" />
          </div>
        </form>
      </div>
      </div>

    </>
  )
}