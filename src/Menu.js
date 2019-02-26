import React from 'react';
import { Link } from 'react-router-dom';
import './style.less';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    }
  }

  handleClick = (value) => {
    console.log(value);
    this.setState({
      currentIndex: value,
    });
  }

  render() {
    let menu = 'czml,two'.split(',');
    return(
      <div className="Wrapper-menu">
      {/* <span>
        <Link to="/">Home</Link>
      </span> */}
        {
          menu.map((val, index) => {
            return (
              <span 
                key={index}
                className={this.state.currentIndex === index ? 'active' : ''}
                onClick={() => { this.handleClick(index); }}>
                <Link to={`/${val}`}>{val}</Link>
              </span>
            )
          })
        }
      </div>
    );
  }
}

export default Menu;