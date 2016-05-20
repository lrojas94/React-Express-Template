import React from 'react';
import {Link} from 'react-router';


export var Hello = React.createClass({
    displayName: 'Hello',
    onClick: function(e){
    	e.preventDefault();
    	//Init ajax call:
    	$.ajax({
    		url: '/api',
    		method: 'GET',
    		dataType: 'json',
    		success: function(data){
    			console.log(data);
    		}
    	});
    },
    render: function(){
        return (
          <div>
			       <div>This is a react hello module</div>
			       <br/>
			       <input type='button' onClick={this.onClick} value='Get API Data'/>
			       <br/>
			       <Link to='/hello/helloAgainMessage'>Hello Again!!</Link>
		       	   {this.props.children}
		      </div>
        );
    }
});
