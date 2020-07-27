import React, {Component} from 'react';
import { Container, Grid, Button, Menu } from 'semantic-ui-react'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.stateInicial = {
      activeItem: '',
    };

    this.state = this.stateInicial;

  }

  handleItemClickMenu = (e, { name }) => this.setState({activeItem: name})

  render() {

    const { activeItem } = this.state;

    return (
      <div>
    <Grid centered>

      <Grid.Row className="menu">
        <Container>
          <Grid relaxed>
            <Grid.Row verticalAlign="middle">
              <Grid.Column width={5}>
                <img src="/images/logo.svg" width="139" height="20" alt="Logo"/>
              </Grid.Column>
              <Grid.Column width={6} className="menu-link">
                <Menu pointing secondary compact>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClickMenu}
          />
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClickMenu}
          />
          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClickMenu}
          />
          <Menu.Item
            name='blog'
            active={activeItem === 'blog'}
            onClick={this.handleItemClickMenu}
          />
          <Menu.Item
            name='carrers'
            active={activeItem === 'carrers'}
            onClick={this.handleItemClickMenu}
          />

        </Menu>
              </Grid.Column>
              <Grid.Column width={5}>
                <Button  className="menu-button">Request Invite</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Grid.Row>

      <Grid.Row>
      <Grid.Column>
          1
        </Grid.Column>
        <Grid.Column>
          2
        </Grid.Column>
        <Grid.Column>
          3
        </Grid.Column>
        <Grid.Column>
          4
        </Grid.Column>
        <Grid.Column>
          5
        </Grid.Column>
        <Grid.Column>
          6
        </Grid.Column>
        <Grid.Column>
          7
        </Grid.Column>
        <Grid.Column>
          8
        </Grid.Column>        
        <Grid.Column>
          9
        </Grid.Column>
        <Grid.Column>
          10
        </Grid.Column>
        <Grid.Column>
          11
        </Grid.Column>
        <Grid.Column>
          12
        </Grid.Column>
        <Grid.Column>
          13
        </Grid.Column>
        <Grid.Column>
          14
        </Grid.Column>
        <Grid.Column>
          15
        </Grid.Column>
        <Grid.Column>
          16
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={5}>
        <Grid.Column>
          1
        </Grid.Column>
        <Grid.Column>
          2
        </Grid.Column>
        <Grid.Column>
          3
        </Grid.Column>
        <Grid.Column>
          4
        </Grid.Column>
        <Grid.Column>
          5
        </Grid.Column>
      </Grid.Row>

      <Grid.Row className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer" >Frontend Mentor</a>.
          Coded by
          <a href="https://www.linkedin.com/in/paulohsz/" target="_blank" rel="noopener noreferrer" >Paulo Henrique Stocco Zancanaro</a> .
      </Grid.Row>
    </Grid>




    </div>
    );
  }
}

export default App;
