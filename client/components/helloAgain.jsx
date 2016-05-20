var React = require('react');

export var HelloAgain = React.createClass({
    displayName: 'HelloAgain',
    render: function(){
        return (
          <div>
          This is a react hello AGAIN Module!
          <br/>
  	   		<strong>Im Being reached from: {this.props.reachingFrom || "HelloAgain Module"}</strong>
  	   		<br/>
  	   		{this.props.message ? <div>I recieved a message!: <strong>{this.props.message}</strong></div> : ''}
          </div>);
    }
});
