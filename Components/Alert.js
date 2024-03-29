import React, {Component} from 'react';

class Alert extends Component{
    render(){
        return(
            <div className={"alert alert-"+this.props.type}>
                <h4>{this.props.header}</h4>
                {this.props.children}
            </div>
        )
    }
}

// class Alert extends Component{
//     render(){
//        return(
//         <div className="alert alert-">
//             <h4>info</h4>
//             Belajar React menyenangkan 
//         </div>
//        )
//     }
// }
export default Alert;

