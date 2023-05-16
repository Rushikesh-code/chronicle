import React,{Component} from 'react';
import './Section2.css'
import img from './download1.jpg'
import sec from './Section2.jpg'
import sec2 from './Section2.png'
import rotate from './rotate.png'
import selector from './selector.png'
import r1 from './r1.png'
import r2 from './r2.png'
import r3 from './r3.png'

class Section2 extends Component{
    constructor() {
        super();
        this.state={
            count:50,
            i:1,
            isOpac:false,
            isOpac2:true,
            isOpac3:true,
            top:40,
            add:0,
            select:false,
            selectCount:0,
        }
        this.handleChange=this.handleChange.bind(this);
    }
        componentDidMount(){
            this.interval = setInterval(() => this.setState(state => ({
                add:this.state.add===2?0:this.state.add+1
            })), 5000);
            this.select=setInterval(()=>{this.setState(state=>({select:!this.state.select,selectCount:this.state.selectCount===2?0:this.state.selectCount+1}))},2000);
        }
    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.select)
    }
    handleChange(event){
    if(event.deltaY<0){
        this.setState({count:this.state.count===50?50:this.state.count-2})
    }
    if(event.deltaY>0){
        this.setState({count:this.state.count===400?400:this.state.count+2})
    }
        if(this.state.count>100){
            document.body.classList.add("disable-scroll");
        }
        else{
            document.body.classList.remove("disable-scroll")
        }
        if(this.state.count===70 && this.state.count<=138 || this.state.count===138){
            this.setState({i:1, isOpac: false, isOpac2: true,isOpac3:true})
        }
        if(this.state.count===140 && this.state.count<=278 || this.state.count===278){
            this.setState({i:2, isOpac: true,isOpac2: false,isOpac3:true})
        }
        if(this.state.count===280){
            this.setState({i:3, isOpac: true, isOpac2: true,isOpac3:false})
        }
    }
    render(){
        const { isOpac, isOpac2, isOpac3,isVisible,top,select } = this.state;
        return(
            <div className="section2"  onWheel={event => this.handleChange(event)}>
                <div className="v16_9">
                    <div className="v1_48"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="mt-[3px]">
                        <path
                            d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
                            fill="#A594FD"></path>
                    </svg><span className="v1_49">Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you</span><span
                        className="v1_8">Create at
the speed
of thought.

</span><span className="v1_7">Workflow</span>
                        <div className="v1_5">
                            <div className="v1_6"></div>
                        </div>
                    </div>
                    <div className="section">
                        <div className={`v16_8 ${isOpac ? 'opac' : '' }`}>
                            <div className="v1_50">2</div>
                            <span className="v1_53">    A keyboard
 first experience</span><span className="v1_54">     Powerful shortcuts and a keyboard-first
 workflow means you will get to your finish line
                              in no time!</span>
                            <div className="v3_18"></div>
                            <div className="v3_30"></div>
                            <div className="v3_29 "></div>
                            <div className="v3_28"></div>
                            <div className="v3_27"></div>
                            <div className="v3_26"></div>
                            <div className="v3_14"></div>
                            <div className="v3_13"></div>
                            <div className="v3_12"></div>
                            <div className="v3_23"></div>
                            <div className="v3_22"></div>
                            {this.state.add===0?<>
                                <div className="v3_19"></div>
                                <div className="v3_20_t add_once">/</div>
                                <div className="v3_21"></div>
                            </>:(this.state.add===1?<>
                                <div className="v3_21_t add">3</div>
                                <div className="v3_20_t add">2</div>
                                <div className="v3_19_t add">1</div>
                            </>:<>
                                    <div className="v3_21_t add">T</div>
                                    <div className="v3_20_t add">Win</div>
                                    <div className="v3_19_t add">Shift</div>
                                </>
                            )}
                            <div className="v3_11"></div>
                        </div><div className={`v16_8 ${isOpac2 ? 'opac' : '' }`}>
                            <div className="v1_50"></div>
                            <span className="v1_53">    Bullets to visuals in a click.</span>
                        <span className="v1_54">Transform any block to any other and try different options without any design hassle</span>
                        {this.state.selectCount===0?
                            <img src={sec} alt="Image" className="v5"/>:
                            (this.state.selectCount===1?
                                <img src={sec2} alt="Image" className="v5"/>:
                            <>
                                <img src={r1} className="r1"/>
                                <img src={r2} className="r2"/>
                                <img src={r3} className="r3"/>
                            </>)}
                        {this.state.select?
                            <><img src={rotate} className="rotate"/>
                            <img src={selector} className="selector"/></>
                            :
                            <><img src={rotate} className="rotate rotate-animation"/>
                            <img src={selector} className="selector anime"/></>}
                        </div><div className={`v16_8 ${isOpac3 ? 'opac' : '' }`}>
                            <div className="v1_50"></div>
                            <span className="v1_53">    A powerful assistant just a click away.</span>
                        <span className="v1_54">Insert blocks, perform powerful actions and leverage the limitless power of AI - all without leaving your keyboard</span>
                        <div className="slice"></div>
                        <div className="path" style={{top:`${top}px`}}>|</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-250 -200 500 500">
                            <g transform="matrix(1,0,0,1,287,180)" opacity="0.7087894042479327" style={{ display: 'block' }}>
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                    <path fill="rgb(15,15,15)" fillOpacity="1" d="M-206.4530029296875,-163.25 C-206.4530029296875,-163.25 -206.5,-137.75 -206.5,-137.75"></path>
                                    <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(165,148,253)" strokeOpacity="1" strokeWidth="1" d="M-206.4530029296875,-163.25 C-206.4530029296875,-163.25 -206.5,-137.75 -206.5,-137.75"></path>
                                </g>
                            </g>
                        </svg>
                        <img src={img} alt="Image" className="v55"/>
                        </div>
                    </div>
                    <div className="box">
                        <p style={{color:'grey'}}>0{this.state.i}</p>
                        <div className="scroll">
                            <div style={{height:this.state.count, backgroundColor:"#A594FD"}}></div>
                        </div>
                        <p style={{color:'grey'}}>03</p>
                    </div>
            </div>
            </div>
        )
    }
}

export default Section2;
