import React,{Component} from 'react';
import './ScrollableParagraph.css';

class ScrollableParagraph extends Component{
    constructor() {
        super();
        this.state={
            i:-1,
            paragraph: ["In", "Chronicle", "everything", "is", "made", "with", "Blocks", "that", "come", "with", "pixel", "perfect", "design,", "interactivity", "and", "motion", "out", "of", "the", "box.", "Instead", "of", "designing", "from", "scratch,", "simply", "choose", "the", "right", "one", "from", "our", "library", "of", "blocks", "and", "see", "the", "magic", "unfold."]
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        if(event.deltaY<0){
            this.setState({i:this.state.i===-1?-1:this.state.i-1})
        }
        if(event.deltaY>0){
            this.setState({i:this.state.i===40?40:this.state.i+1})
        }
        if(this.state.i<30){
            document.body.classList.add("disable-scroll");
        }
        else{
            document.body.classList.remove("disable-scroll")
        }
    }
    render(){
        return(
            <div style={{ backgroundColor: "black", height: "745px", margin:"80px", padding:'0px', overflow:"hidden" ,width:"100%"}}>
                <div onWheel={event => this.handleChange(event)} style={{ backgroundColor: "black", height: "79%", marginLeft:"15%", width:"100%", marginTop:"2%" }}>
                    <div id="scrollContainer" style={{fontWeight:600, fontSize:52, width:"55%"}}>
                        {this.state.paragraph.map((item,id)=>{
                            return(
                                this.state.i>=id?
                                    <span id={id} style={{opacity:1, color:"#fff"}}>{item} </span>:
                                    <span id={id} style={{color:"#808080"}}>{item} </span>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ScrollableParagraph
