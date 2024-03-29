// import React, { Component } from 'react';
// import './App.css';
// import Media from './Components/Media';
// // import { Alert } from './Components/Alert';

// // class App extends Component {
// //   render() {
// //     return (
// //       // <div className="App container">
// //       //   <div className='alert alert-info'>
// //       //   <h3 className='text-danger'>Ini Project Pertama React Js</h3>
// //       //   <p>Belajar React</p>
// //       //   <botton className='mr-1 btn btn-success'>Success</botton>
// //       //   <botton className='btn btn-info'>Iya</botton>
// //       //   </div>
// //       // </div>

// //       <div className="App container col-sm-6">
// //         <Alert type="danger">danger</Alert>
// //         <Alert type="success">success</Alert>
// //         <Alert type="warning">warning</Alert>
// //       </div>
// //     );
// //   }
// // }
// // export default App;

// // import React, {Component} from  'react';
// // import './App.css';
// // // import Alert from './Components/Alert';
// // import Media from '../Components/Media';

// // class App extends Component {
// //   render (){
// //     return (
// //       // <div className="App container">
// //       //   <div className='alert alert-info'>
// //       //   <h3 className='text-danger'> Ini Project Pertama React Js</h3>
// //       //   <p> Belajar React Js itu mudah </p>
// //       //   <button className='mr-1 btn btn-success'> Success </button>
// //       //   <button className='btn btn-info'> Iya </button>
// //       // </div>
// //       // </div>
// //       <div className='App container col-sm-6'>
// //         <Alert type="danger">danger</Alert>
// //         <Alert type="success">success</Alert>
// //         <Alert type="warning">warning</Alert>
// //       </div>
// //     );
// //   }
// // }
// // export default App;

// //pancasila 
// class App extends Component{
//   render(){
//     return (
//       <header>
//         <div className='title'> PANCASILA </div>
//         <div className='head-text'>
//           <div className='text-on-image'>
//             <strong>Sila Pertama</strong>
//             <br></br>
//             Ketuhanan Yang Maha Esa 
//           </div>
//           <Media image="sila1.png"></Media>
//         </div>
 
//         <div className='head-text'>
//           <div className='text-on-image'>
//             <strong>Sila Kedua</strong>
//             <br></br>
//             Kemanusiaan Yang Adil dan Beradab
//           </div>
//           <Media image="sila2.png"></Media>
//         </div>

//         <div className='head-text'>
//           <div className='text-on-image'>
//             <strong>Sila Ketiga</strong>
//             <br></br>
//             Persatuan Indonesia
//           </div>
//           <Media image="sila3.png"></Media>
//         </div>

//         <div className='head-text'>
//           <div className='text-on-image'>
//             <strong>Sila Keempat</strong>
//             <br></br>
//             Kerakyatan Yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan Perwakilan
//           </div>
//           <Media image="sila4.png"></Media>
//         </div>

//         <div className='head-text'>
//           <div className='text-on-image'>
//             <strong>Sila Kelima</strong>
//             <br></br>
//             Keadilan Sosial Bagi Seluruh Rakyat Indonesia
//           </div>
//           <Media image="sila5.png"></Media>
//         </div>
//         <hr></hr>

//         <div className="kotak">
//           <div className="form-daftar">
//             <p>Form daftar osis</p>
//           </div>
//         </div>
        
//         <br></br>

//         <div className='jarak'>
//              <input type="text" id="Nama" className="form-input" placeholder="Nama" />
//         </div>
  
//         <div className='jarak'>
//           {/* <input type="label" id="jenis_kelamin" className="form-input" placeholder="Jenis Kelamin" /> */}
//           <select name="gender" id="jenis-kelamin" className='form-input' placeholder='Jenis Kelamin'>  
// 		        <option value="">Jenis Kelamin</option>  
// 	        	<option value="Perempuan">Perempuan</option>  
//         		<option value="Laki-laki">Laki-laki</option>  
//           </select>
//         </div>

//         <div className='jarak'>
//           <input type="text" id="alamat" className="form-input" placeholder="Alamat" />
//         </div>

//       <div class='jarak'>
//           <button type="submit" class="buton" className='bcolor'>Submit</button>
//         </div>

//         <hr></hr>


// <div className="App Container">
       
//         <button className="mr-1 btn btn-danger">Button Merah</button> 
//         <br></br>
//         <br></br>
//         <button className="mr-2 btn btn-warning">Button Kuning</button>
//         <br></br>
//         <br></br>
//         <button className="mr-3 btn btn-success">Button Hijau</button>
//         <br></br>
//         <br></br>
//         <button className="mr-4 btn btn-light">Button Putih</button>
//         <br></br>
//         <br></br>
//         <button className="mr-4 btn btn-dark">Button Hitam</button>
//         <br></br>
//         <br></br>
//         </div>

//       </header>

    
//     );
//   }
// }
// export default App;



// import React from "react";
// import "./App.css"
// import Header from "./Header";
// import JalanAja from "./Jalan";

// <Link to="/gallery" className="nav-link">Gallery</Link> 


// class App extends React.Component {
//   render(){
//     return(
//       <div> 
//         <Header/>
//         <JalanAja/>
//       </div>
//     );
//   }
// }



// export default App;

import React from "react";
import Header from "./Components/Mainpage"
import Jalan from "./Jalan";
import Gallery from "./Components/Gallery";
import { Link } from "react-router-dom";

{/* <Link to="/Gallery" className="nav-link"> Gallery </Link> */ }

// import "../src/App.css"
class App extends React.Component {
  render () {
  return (
    <div> <hr />
    <Link to="/">Beranda</Link>
    <Link to="/Aboutme">Tentang Saya</Link>
    <Link to="/Kreatif">Karya</Link>
    <Link to="/Contact">Kontak</Link>
    <Link to="/Gallery">Gallery</Link>
    <Link to="/Cart">Cart</Link>

    </div>
  );
    }
}

export default App;