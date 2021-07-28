import React from 'react';
import { snippet } from './Data/codeSnippet';
import SnippetCard from './Components/snippetCard';

export default class CodeList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      };
    render(){
    return(
        <div>
            {
                snippet.map(code=>{
                    return(
                        <SnippetCard
                        title={code.title}
                        origin={code.origin}
                        code={code.code}
                        />
                    )
                })
            }
        </div>
        )
    }
}