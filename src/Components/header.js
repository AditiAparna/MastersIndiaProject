import React from 'react';
import './header.css';
import { FaSearch, FaSave } from 'react-icons/fa';
// import SnippetCard from './snippetCard';
import { snippet } from '../Data/codeSnippet';

let codeSnippet = snippet;
let filteredResult=[];

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchText:' ',
        };
      };

    // codeSnippet=snippet;

    render(){
    return(
        <div className="bg">
            <div className="search">
                <input id="searchBar" className="input" placeholder="Search" onChange={(value)=>this.setState({searchText: value})}></input>
                {console.log(this.state.searchText.nativeEvent?.target?.value)}
                {
                    filteredResult = codeSnippet.filter(data=>{
                        return data.code.includes(`${this.state.searchText.nativeEvent?.target?.value}`)
                    })
                }
                {/* {
                    console.log((codeSnippet.map(data=>{return data.code.includes('books')})))
                } */}
                <p className="icon"><FaSearch/></p>
            </div>
            <div className="saved">
                <p>saved <FaSave/></p>
            </div>
        </div>
        )
    }
}

// searchResult(){
//     const filteredResult = codeSnippet.filter(data=>{
//         return data.code.contain(this.state.searchText.nativeEvent?.target?.value) || data.title.contain(this.state.searchText.nativeEvent?.target?.value)
//     })
// }