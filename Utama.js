import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Beranda from './Components/Mainpage';
import Tentangsaya from './Components/Aboutme';
import Karya from './Components/Kreatif';
import Kontak from './Components/Contact';
import Gallery from './Components/Gallery';
import Cart from './Components/Cart';

class Utama extends React.Component {
    render(){
        return (
            <Routes>
                <Route exact path="/Mainpage" Component={Beranda} />
                <Route exact path="/Aboutme" Component={Tentangsaya} />
                <Route exact path="/Kreatif" Component={Karya} />
                <Route exact path="/Contact" Component={Kontak} />
                 <Route exact path="/Gallery" Component={Gallery}/>
                 <Route exact path="/Cart" Component={Cart}/>
            </Routes>
           
        )
    }
}


export default Utama;