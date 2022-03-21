import React from "react";


const Footer =()=>{
  return(
  
    <footer className="footer" style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            height: '50px',
            backgroundColor: '#C9E4CA'
        }}>
        <p id="FooterText" className="text-muted"
        style={{textAlign: 'center'}}
         >
          Typed by the fingers of Jim Doyle
        </p>
    </footer>
  )
}
export default Footer;
