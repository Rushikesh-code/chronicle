import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import ScrollableParagraph from './ScrollableParagraph'
import './App.css'
import logo from './logo.svg';
import Section2 from './Section2'

class App extends Component{
    render(){
        return(
            <div className="main">
                <div className="img">
                    <img src={logo} alt="" className="svg"/>
                </div>
                <button className="btn">
                    <div className="text-container">
                        <div className="text-hidden">
                            <h3>Join Beta</h3>
                        </div>
                        <div className="text-visible">
                            <h3 style={{opacity:0}}>Join Beta</h3>
                        </div>
                    </div>
                </button>
                <ScrollableParagraph/>
                <Section2/>
            </div>
        )
    }
}

export default App;
