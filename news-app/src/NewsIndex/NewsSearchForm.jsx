import React, {Component} from 'react';


class NewsSearchForm extends Component{
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchNews(this.state);
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
        Search: <input onChange = {this.handleChange} type="text" name="search" /> 
          
        <input class="button" type="submit" />
        </form>
    }
}

export default NewsSearchForm;