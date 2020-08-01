import React, {Component} from 'react';
import { Segment, Container, Grid, Button, Menu, Header, Card, Image, Dimmer, List, Icon } from 'semantic-ui-react'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.stateInicial = {
      activeItem: '',
      menuMobile: false,
    };

    this.state = this.stateInicial;

  }


  handleItemClickMenuMobile = (e) => this.setState({menuMobile: !this.state.menuMobile})

  handleItemClickMenu = (e, { name }) => this.setState({activeItem: name})

  render() {

    const { activeItem, menuMobile } = this.state;

    return (
      <Segment>
    <Grid centered>

      <Grid.Row className="menu" only='tablet computer'>
        <Container>
          <Grid relaxed>
            <Grid.Row verticalAlign="middle">
              <Grid.Column width={4} textAlign="left">
                <img src="/images/logo.svg" width="139" height="20" alt="Logo"/>
              </Grid.Column>
              <Grid.Column width={8} className="menu-link" verticalAlign="bottom">
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
              <Grid.Column width={4} textAlign="right" className="space-button">
                <Button  className="menu-button">Request Invite</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Grid.Row>
      <Grid.Row only='mobile'>
          <Grid className="menu-mobile">
              <Grid.Row verticalAlign="middle">
          <Grid.Column width={8} textAlign="left" id="mobile-logo">
              <img src="/images/logo.svg" width="139" height="20" alt="Logo"/>
          </Grid.Column>
          <Grid.Column  width={8} textAlign="right" verticalAlign="middle" id="mobile-bar">
            <img src={`/images/icon-${menuMobile ? 'close' : 'hamburger'}.svg`} alt ="Menu mobile" onClick={this.handleItemClickMenuMobile}   />
          </Grid.Column>
          </Grid.Row>
          </Grid>
      </Grid.Row>
    </Grid>

    <Dimmer.Dimmable as={Grid} dimmed={menuMobile} className="mobile-menu">
    <Dimmer
            active={menuMobile}
            onClickOutside={this.handleItemClickMenuMobile}
            verticalAlign='top'
          >
            <Container className="menu-mobile-float">
                <List link>
                  <List.Item as='a'>Home</List.Item>
                  <List.Item as='a'>About Us</List.Item>
                  <List.Item as='a'>Contact</List.Item>
                  <List.Item as='a'>Blog</List.Item>
                  <List.Item as='a'>Careers</List.Item>
                </List>
              </Container>
          </Dimmer>

    <Grid centered>

    <Grid.Row className="text-next-row" only='tablet computer'>
      <Grid stackable className="text-next">
        <Grid.Row className="text-next-row" verticalAlign="middle">

          <Grid.Column textAlign="left" width="8" className="text-next-row">
            <div className="text-next-information">
            <Header as="h2">Next generation digital banking</Header>
            Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.
            <Button  className="menu-button">Request Invite</Button>
            </div>
          </Grid.Column>

          <Grid.Column textAlign="left" width="8" className="text-next-row text-next-background">
            <div className="text-next-img">
            </div>
          </Grid.Column>

        </Grid.Row>
      </Grid>
      </Grid.Row>

      <Grid.Row only='mobile' className="next-mobile">
        <Container>
          <Grid centered>

            <Grid.Row className="next-mobile-background" >
              <div className="next-mobile-img">
              </div>
            </Grid.Row>

            <Grid.Row className="next-mobile-row">
              <Container>
              <Header as="h2">Next generation digital banking</Header>
              Take your financial life online. Your Easybank account will be a one-stop-shop 
              for spending, saving, budgeting, investing, and much more.<br />
              <Button  className="menu-button">Request Invite</Button>
              </Container>
            </Grid.Row>

          </Grid>
        </Container>
      </Grid.Row>

      <Grid.Row className="text-information">
        <Container>
          <Grid stackable>
              <Grid.Row>
                <Grid.Column textAlign="left">
                    <Container>
                      <Header as="h3">Why choose Easybank?</Header>
                      We leverage Open Banking to turn your bank account into your financial hub.<br />
                      Control your finances like never before.
                    </Container>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={4} textAlign="left">
                <Grid.Column>
                  <Container>
                    <img src="/images/icon-online.svg" alt="Icon Online"/>
                    <Header as="h4">Online Bank</Header>
                    Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                  </Container>
                </Grid.Column>
                <Grid.Column>
                  <Container>
                    <img src="/images/icon-budgeting.svg" alt="Icon Online"/>
                    <Header as="h4">Simple Budgeting</Header>
                    See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.
                  </Container>
                </Grid.Column>
                <Grid.Column>
                  <Container>
                    <img src="/images/icon-onboarding.svg" alt="Icon Online"/>
                    <Header as="h4">Fast Onboarding</Header>
                    We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
                  </Container>
                </Grid.Column>
                <Grid.Column>
                  <Container>
                    <img src="/images/icon-api.svg" alt="Icon Online"/>
                    <Header as="h4">Open API</Header>
                    Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
                  </Container>
                </Grid.Column>
              </Grid.Row>
          </Grid>
        </Container>
      </Grid.Row>

      <Grid.Row className="text-articles">
        <Container>
          <Grid stackable centered>

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
                <Card centered>
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
                <Card centered>
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
                <Card centered>
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
                <Card centered>
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

      <Grid.Row className="footer-pag">
        <Container>
          <Grid stackable centered>
            <Grid.Row className="footer-main">
              <Grid.Column width={4} textAlign="left" className="footer-pag-right">
                <img className="footer-img" src="/images/logo-white.svg" width="139" height="20" alt="Logo"/><br />
                <a href="/" ><Icon name='facebook official' size='big' /></a>
                <a href="/" ><Icon name='youtube square' size='big' /></a>
                <a href="/" ><Icon name='twitter' size='big' /></a>
                <a href="/" ><Icon name='pinterest' size='big' /></a>
                <a href="/" ><Icon name='instagram' size='big' /></a>
              </Grid.Column>
              <Grid.Column width={8} className="footer-menu" textAlign="left">
                <List link  className="footer-menu-list">
                  <List.Item as='a'>About Us</List.Item>
                  <List.Item as='a'>Contact</List.Item>
                  <List.Item as='a'>Blog</List.Item>
                </List>
            
                <List link className="footer-menu-list">
                  <List.Item as='a'>Careers</List.Item>
                  <List.Item as='a'>Support</List.Item>
                  <List.Item as='a'>Privacy Policy</List.Item>
                </List>

              </Grid.Column>
              <Grid.Column width={4} textAlign="right" className="space-button">
                <Button  className="menu-button">Request Invite</Button><br />
                <div className="footer-all-rights">© Easybank. All Rights Reserved</div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Container className="attribution">    
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer" >Frontend Mentor</a>. Coded by<a href="https://www.linkedin.com/in/paulohsz/" target="_blank" rel="noopener noreferrer" >Paulo Henrique Stocco Zancanaro</a>.
            </Container>
            </Grid.Row>
          </Grid>
          </Container>
      </Grid.Row>
    </Grid>
    </Dimmer.Dimmable>
    </Segment>
    );
  }
}

export default App;
