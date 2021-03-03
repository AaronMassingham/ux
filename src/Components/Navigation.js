import React from "react";

//COMPONENTS
import Navlinks from './Navlinks';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {addClass: false}
    this.state = { matches: window.matchMedia("(min-width: 1200px)").matches };
  }

  toggle() {
    setTimeout(() => {
      this.setState({addClass: !this.state.addClass});
    }, 200);
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 1200px)").addListener(handler);
  }

  render() {
    let navClass = ["nav"];
    if(this.state.addClass) {
      navClass.push('open');
    }
    return(
<>

      {this.state.matches && (
        <div className="nav">
          <Navlinks/>
        </div>
      )}

      {!this.state.matches && (
        <div className={navClass.join(' ')} onClick={this.toggle.bind(this)}>
          <div className="icon"></div>
          <Navlinks onClick={this.props.onClick}/>
        </div>    
      )}
        
       </>    
    );
  }
}
export default Navigation;
