// import React from "react";
// import { Link } from "react-router-dom";

// const link = document.createElement('link');
// link.rel = 'stylesheet';
// document.head.appendChild(link);

// const styles = {
//   navbar: {
//     justifyContent: "center",
//     width: "100%",
//     margin: "auto",
//     display: "flex",
//     lineHeight: "80px",
//     background: "#AC7D88",
//     fontFamily: "Poppins, sans-serif", 
//   }, 
//   navLinks: {
//     display: "flex",
//     gap: "50px",
//   },
//   link: {
//     textDecoration: "none",
//     color: "#FFF7F1",
//     fontSize: "16px",
//     fontWeight: "bold",
//     fontFamily: "Poppins, sans-serif", 
//   },
// };

// class Header extends React.Component {
//   render() {
//     return (
//       <div style={styles.navbar}>
        
//         <div style={styles.navLinks}>
//           <Link to="/" style={styles.link}>
//             Beranda
//           </Link>
//           <Link to="/Aboutme" style={styles.link}>
//             Tentang Saya
//           </Link>
//           <Link to="/Kreatif" style={styles.link}>
//             Karya
//           </Link>
//           <Link to="/Contact" style={styles.link}>
//             Kontak
//           </Link>
//         </div>
//       </div>
//     );
//   }
// }

// export default Header;

import React from "react";
import "./index-module.css";
import { Link } from "react-router-dom";

const styles = {
    navLinks: {
        gap: "50px",
        justifyContent: "center",
        lineHeight: "80px",
    }
}

class Header extends React.Component {
    render(){
        return(
            
            <div className='header' style={styles.navLinks} > 
           <Link style={{ textDecoration: 'none', color: '#eff1f3' }} to="/Beranda" >Beranda</Link>
           <Link style={{ textDecoration: 'none', color: '#eff1f3' }} to="/Aboutme" >Aboutme</Link>
           <Link style={{ textDecoration: 'none', color: '#eff1f3' }} to="/Kreatif" >karya</Link>
           <Link style={{ textDecoration: 'none', color: '#eff1f3' }} to="/Contact" >Contact</Link>
           <Link style={{ textDecoration: 'none', color: '#eff1f3' }} to="/Gallery">Gallery</Link>
           <Link style={{ textDecoration: 'none', color: '#eff1f3' }} to="/Cart">Card</Link>
           </div>
           
          
        )
    }
}

export default Header;