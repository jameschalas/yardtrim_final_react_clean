import Gallery from './components/Gallery';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function YardTrimWebsite() {
  return (

    
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '1rem' }}>
      <header
        style={{
          background: '#166534',
          color: 'white',
          padding: '1rem',
          textAlign: 'center',
          borderRadius: '0 0 20px 20px'
        }}
      >
        <h1>YardTrim Lawncare & Tree Services</h1>
      </header>

      <main style={{ marginTop: '2rem' }}>
        <section>
          <h2>Our Services</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem'
            }}
          >
            <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '1rem' }}>
              <h3>Lawn Care</h3>
              <ul>
                <li>Mowing</li>
                <li>Edging</li>
                <li>Weed Eating</li>
                <li>Trimming Bushes</li>
              </ul>
            </div>
            <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '1rem' }}>
              <h3>Tree Services</h3>
              <ul>
                <li>Tree Removal</li>
                <li>Stump Grinding</li>
                <li>Lot Clearing</li>
                <li>Storm Cleanup</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>About Us</h2>
          <p>
            YardTrim Lawncare is a locally owned and operated business proudly serving Henry County, GA. With years of
            experience in lawn maintenance and a recent expansion into tree removal, we are your one-stop-shop for
            outdoor care.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <Gallery />
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Get a Free Quote</h2>
         <form
  action="https://formsubmit.co/yardtrimservices@gmail.com"
  method="POST"
  style={{ display: 'grid', gap: '0.5rem', maxWidth: '400px' }}
>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <input type="text" name="phone" placeholder="Your Phone (optional)" />

  <textarea name="message" placeholder="What service do you need?" required />

  <input type="hidden" name="_next" value="https://www.yard-trim.com/thank-you" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_subject" value="New Quote Request from YardTrim Lawncare!" />

  <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700">
    Send Quote Request
  </button>
</form>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Contact Us</h2>
          <p>Email: yardtrimservices@gmail.com</p>
          <p>Phone: (470) 650-9920</p>
          <p>Service Area: Henry County, GA</p>
        </section>
      </main>

      <footer style={{ textAlign: 'center', color: '#666', fontSize: '0.75rem', padding: '2rem 0' }}>
        &copy; {new Date().getFullYear()} YardTrim Lawncare. All rights reserved.
      </footer>
    </div>
  );
}

