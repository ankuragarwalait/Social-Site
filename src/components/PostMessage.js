import React, { Component } from 'react';
const initialState = {
    postValue: ''
};

export default class PostMessage extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
        this.handleLocationClick = this.handleLocationClick.bind(this);
    }

    handlePostChange = (e) => {
        this.setState({
            postValue: e.target.value
        });
    }

    handlePostSubmit(e) {
        e.preventDefault();
        e.target.reset();
        this.state.postValue && this.props.handlePostSubmit(this.state.postValue);
        this.setState(initialState);
    }

    handleLocationClick(e) {
        e.preventDefault();
        let location = navigator.geolocation.getCurrentPosition(position => {
           this.props.handleLocationClick(position);
        });
    }
    
    render() {
        return (
            <div className="bg-white clearfix py-3 px-1">
                <form id="postForm" onSubmit={this.handlePostSubmit}>
                    <textarea className="w-100 border-0" onChange={this.handlePostChange} placeholder="Write Something here..."></textarea>
                    <div className="px-2">
                        <button type="submit" className="float-left btn btn-primary">Post</button>
                        <a className="float-right pt-2" onClick={this.handleLocationClick} href="#">Add Location</a>
                    </div>
                </form>
            </div>
        );
    }
}