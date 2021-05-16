import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange= event => {
        this.setState({term: event.target.value})
    };

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
         <div style={{backgroundColor:"#303030"}} className="search-bar ui segment">
             <form onSubmit={this.onFormSubmit} className="ui form">
                 <div className="field" >
                     <label style={{color:"white"}}>
                         Video search
                     </label>
                     <input style={{backgroundColor: "#52527a", color:"white"}}
                     type="text" 
                     value={this.state.term}
                     onChange={this.onInputChange}
                     />
                 </div>
             </form>
         </div>
        );
    }
}

export default SearchBar;