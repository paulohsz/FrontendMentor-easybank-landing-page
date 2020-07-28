import React, {Component} from 'react';
import { Container, Grid, Button, Menu, Header, Card, Image } from 'semantic-ui-react'
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
              <Grid.Column width={5} textAlign="left">
                <img src="/images/logo.svg" width="139" height="20" alt="Logo"/>
              </Grid.Column>
              <Grid.Column width={6} className="menu-link" verticalAlign="bottom">
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
              <Grid.Column width={5} textAlign="right">
                <Button  className="menu-button">Request Invite</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Grid.Row>

      <Grid.Row className="text-information">
        <Container>
          <Grid stackable>
              <Grid.Row>
                <Grid.Column width={10} textAlign="left">
                  <Header as="h3">Why choose Easybank?</Header>
We leverage Open Banking to turn your bank account into your financial hub.<br />
Control your finances like never before.
                </Grid.Column>
                <Grid.Column width={6}>
                  <p />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={4} textAlign="left">
                <Grid.Column>
                <img src="/images/icon-online.svg" alt="Icon Online"/>
                <Header as="h4">Online Bank</Header>
                Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                </Grid.Column>
                <Grid.Column>
                <img src="/images/icon-budgeting.svg" alt="Icon Online"/>
                <Header as="h4">Simple Budgeting</Header>
                See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.
                </Grid.Column>
                <Grid.Column>
                <img src="/images/icon-onboarding.svg" alt="Icon Online"/>
                <Header as="h4">Fast Onboarding</Header>
                We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
                </Grid.Column>
                <Grid.Column>
                <img src="/images/icon-api.svg" alt="Icon Online"/>
                <Header as="h4">Open API</Header>
                Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
                </Grid.Column>
              </Grid.Row>
          </Grid>
        </Container>
      </Grid.Row>

      <Grid.Row className="text-articles">
        <Container>
          <Grid stackable>

              <Grid.Row>
                <Grid.Column width={10} textAlign="left">
                  <Header as="h3" className="articles-title">Latest Articles</Header>
                </Grid.Column>
                <Grid.Column width={6}>
                  <p />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={4} textAlign="left">
                <Grid.Column>
                <Card>
                  <Image src='/images/image-currency.jpg' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>By Claire Robinson</Card.Header>
                    <Card.Meta>Receive money in any currency with no fees</Card.Meta>
                    <Card.Description>
                    The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …
                    </Card.Description>
                  </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column>
                <Card>
                  <Image src='/images/image-restaurant.jpg' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>By Wilson Hutton</Card.Header>
                    <Card.Meta>Treat yourself without worrying about money</Card.Meta>
                    <Card.Description>
                    Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …
                    </Card.Description>
                  </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column>
                <Card>
                  <Image src='/images/image-plane.jpg' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>By Wilson Hutton</Card.Header>
                    <Card.Meta>Take your Easybank card wherever you go</Card.Meta>
                    <Card.Description>
                    We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …
                    </Card.Description>
                  </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column>
                <Card>
                  <Image src='/images/image-confetti.jpg' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>By Claire Robinson</Card.Header>
                    <Card.Meta>Our invite-only Beta accounts are now live!</Card.Meta>
                    <Card.Description>
                    After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...
                    </Card.Description>
                  </Card.Content>
                </Card>
                </Grid.Column>
              </Grid.Row>
          </Grid>
        </Container>
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
