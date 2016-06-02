import * as React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import * as template from './../views/hello.rt';


export class Hello extends React.Component<{},{}>{
    displayName : String = 'Hello'
    private sendGet(e) {
        e.preventDefault();
        //Init ajax call:
        $.ajax({
            url: '/api',
            method: 'GET',
            dataType: 'json',
            data: { msg: "Hello Server with Get!" },
            success: function(data) {
                console.log(data);
            }
        });
    }

    private sendPost(e){
        e.preventDefault();
        //Init ajax call:
        $.ajax({
            url: '/api',
            method: 'POST',
            dataType: 'json',
            data: { msg: "Hello Server with Post!" },
            success: function(data) {
                console.log(data);
            }
        });
    }

    render(){
        return template;
    }
}
