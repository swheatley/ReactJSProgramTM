var USER_DATA = {
  name: 'Shaylee Hansen',
  username: 'swheatley',
  image: 'https://avatars3.githubusercontent.com/u/10644939?v=3&u=de36c685aee3e947fe03c9cebe31b98b2c5df208&s=400'
}


var React = require('react')
var ReactDOM = require('react-dom');

/* React Components Acronym

  Focused
  Independant
  Reusable
  Small
  Testable

*/

var ProfilePic = React.createClass({
  render: function(){
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}/>
  }
});

var ProfileLink= React.createClass({
  render: function(){
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
        {this.props.username}
        </a>

      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function(){
    return(
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function(){
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    )
  }
})
ReactDOM.render(
  <Avatar user={USER_DATA}/>, document.getElementById('app')
);
