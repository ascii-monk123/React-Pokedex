import React, { Component } from 'react';
import Classes from './Header.module.css';
import Logo from '../../img/Pokedex.png';
import Logo1 from '../../img/PokedexSmall.png';
import ApiBtn from '../../UI/Buttons/ApiBtn/ApiBtn';
import ReachSearch from '../../UI/Buttons/ReachSearch/ReachSearch';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  render() {
    let ele = Logo;
    if (this.state.width <= 500) {
      ele = Logo1;
    }
    return (
      <header>
        <div className={Classes.headerLogo}>
          <img src={ele} id="#header-logo" />
        </div>
        <ApiBtn name={'API'} />
        <ReachSearch label={'Scroll Below'} />
        <div className={Classes.FooterText}>
          <p>
            Made with <span>❤</span> by Aahan Singh{' '}
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
