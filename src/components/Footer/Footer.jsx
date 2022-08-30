import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <>
    <div className="outer-footer">

    
    <div className="Footer">
        <div className="Footer-top">
         <div className="div1">
            <h2>SafeZen</h2>
            <p>the world's first zero premium <br /> and pay-as-you-go insurance <br /> products based on risk-based <br /> coverage pools</p>
         </div>
         <div className="div2">
            <div className="column-1">
                <h3>Column 1</h3>
                <li>Link one</li>
                <li>Link two</li>
                <li>Link three</li>
                <li>Link four</li>
                <li>Link five</li>
            </div>
            <div className="column-2">
                <h3>Column 2</h3>
                <li>Link six</li>
                <li>Link seven</li>
                <li>Link eight</li>
                <li>Link nine</li>
                <li>Link ten</li>
            </div>
            <div className="column-3">
                <h3>Column 3</h3>
                <li>Link eleven</li>
                <li>Link twelve</li>
                <li>Link thirteen</li>
                <li>Link Fourteen</li>
                <li>Link Fifteen</li>
            </div>
         </div>
         <div className="div3">
         <h3>Subscribe</h3>
         <li>Join our newsletter to stay up to date on features and releases.</li>
         <div className="subscribe-us">
          <input type="text" placeholder='Enter your email'  /> 
          <button>Subscribe</button>
         </div>
       <p>
       By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
       </p>
         </div>
        </div>
        <div className="Footer-bottom">
            <div className="foot-bot-left">
                      <p>© 2022 SafeZen. All right reserved.</p>
        <li>Privicy Policy</li>
        <li>Terms and Conditions</li>
        <li>Cookies Settings</li>
            </div>
            <div className="foot-bot-right">
                <div className="facebook">
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 3H6.5C5.9477 3 5.5 3.44772 5.5 4V7H9.5C9.6137 6.99748 9.7216 7.0504 9.7892 7.1419C9.8568 7.2334 9.8758 7.352 9.84 7.46L9.1 9.66C9.0318 9.8619 8.8431 9.9984 8.63 10H5.5V17.5C5.5 17.7761 5.2761 18 5 18H2.5C2.22386 18 2 17.7761 2 17.5V10H0.5C0.22386 10 0 9.7761 0 9.5V7.5C0 7.2239 0.22386 7 0.5 7H2V4C2 1.79086 3.7909 0 6 0H9.5C9.7761 0 10 0.22386 10 0.5V2.5C10 2.77614 9.7761 3 9.5 3Z" fill="#fff"/>
</svg>

                </div>
                <div className="instagram">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 0H5C2.23858 0 0 2.23858 0 5V13C0 15.7614 2.23858 18 5 18H13C15.7614 18 18 15.7614 18 13V5C18 2.23858 15.7614 0 13 0ZM16.25 13C16.2445 14.7926 14.7926 16.2445 13 16.25H5C3.20735 16.2445 1.75549 14.7926 1.75 13V5C1.75549 3.20735 3.20735 1.75549 5 1.75H13C14.7926 1.75549 16.2445 3.20735 16.25 5V13ZM13.75 5.25C14.3023 5.25 14.75 4.80228 14.75 4.25C14.75 3.69772 14.3023 3.25 13.75 3.25C13.1977 3.25 12.75 3.69772 12.75 4.25C12.75 4.80228 13.1977 5.25 13.75 5.25ZM9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5027 7.8057 13.0294 6.65957 12.1849 5.81508C11.3404 4.97059 10.1943 4.49734 9 4.5ZM6.25 9C6.25 10.5188 7.4812 11.75 9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.4812 10.5188 6.25 9 6.25C7.4812 6.25 6.25 7.4812 6.25 9Z" fill="#fff"/>
</svg>

                </div>
                <div className="twitter">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9728 2.7174C17.5084 3.33692 16.947 3.87733 16.3103 4.31776C16.3103 4.47959 16.3103 4.64142 16.3103 4.81225C16.3154 7.7511 15.1415 10.5691 13.0518 12.6345C10.962 14.6999 8.1312 15.8399 5.19405 15.7989C3.49599 15.8046 1.81967 15.4169 0.296422 14.6661C0.214282 14.6302 0.161312 14.549 0.161622 14.4593V14.3604C0.161622 14.2313 0.266232 14.1267 0.395272 14.1267C2.06442 14.0716 3.67402 13.4929 4.99634 12.4724C3.48553 12.4419 2.12619 11.5469 1.5006 10.1707C1.46901 10.0956 1.47884 10.0093 1.52657 9.9432C1.57429 9.8771 1.653 9.8407 1.73425 9.8471C2.19342 9.8932 2.65718 9.8505 3.1002 9.7212C1.43239 9.375 0.179212 7.9904 -0.000137933 6.2957C-0.00650793 6.2144 0.029922 6.1357 0.096002 6.0879C0.162072 6.0402 0.248242 6.0303 0.323382 6.062C0.770942 6.2595 1.25409 6.3635 1.74324 6.3676C0.281842 5.40846 -0.349388 3.58405 0.206552 1.92622C0.263942 1.76513 0.401812 1.64612 0.569502 1.61294C0.737182 1.57975 0.909962 1.63728 1.02432 1.76439C2.99639 3.86325 5.70604 5.11396 8.5819 5.25279C8.5083 4.95885 8.4721 4.65676 8.4741 4.35372C8.501 2.76472 9.4842 1.34921 10.9634 0.769872C12.4425 0.190542 14.1249 0.562032 15.223 1.71044C15.9714 1.56785 16.695 1.31645 17.3707 0.964212C17.4202 0.933312 17.483 0.933312 17.5325 0.964212C17.5634 1.01373 17.5634 1.07652 17.5325 1.12604C17.2052 1.87552 16.6523 2.50412 15.9509 2.92419C16.5651 2.85296 17.1685 2.70807 17.7482 2.49264C17.797 2.45942 17.8611 2.45942 17.9099 2.49264C17.9508 2.51134 17.9814 2.54711 17.9935 2.59042C18.0056 2.63373 17.998 2.68018 17.9728 2.7174Z" fill="#fff"/>
</svg>

                </div>
                <div className="linkdin">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H16C17.1046 0 18 0.89543 18 2V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.89543 0 2 0ZM5 15C5.27614 15 5.5 14.7761 5.5 14.5V7.5C5.5 7.2239 5.27614 7 5 7H3.5C3.22386 7 3 7.2239 3 7.5V14.5C3 14.7761 3.22386 15 3.5 15H5ZM4.25 6C3.42157 6 2.75 5.32843 2.75 4.5C2.75 3.67157 3.42157 3 4.25 3C5.07843 3 5.75 3.67157 5.75 4.5C5.75 5.32843 5.07843 6 4.25 6ZM14.5 15C14.7761 15 15 14.7761 15 14.5V9.9C15.0325 8.3108 13.8576 6.95452 12.28 6.76C11.177 6.65925 10.1083 7.1744 9.5 8.1V7.5C9.5 7.2239 9.2761 7 9 7H7.5C7.2239 7 7 7.2239 7 7.5V14.5C7 14.7761 7.2239 15 7.5 15H9C9.2761 15 9.5 14.7761 9.5 14.5V10.75C9.5 9.9216 10.1716 9.25 11 9.25C11.8284 9.25 12.5 9.9216 12.5 10.75V14.5C12.5 14.7761 12.7239 15 13 15H14.5Z" fill="#fff"/>
</svg>

                </div>
            </div>
  
        </div>
    </div></div>
    </>
  )
}
