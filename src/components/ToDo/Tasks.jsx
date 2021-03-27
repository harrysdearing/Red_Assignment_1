import React from 'react';

class Tasks extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tasks: [],
            word: "",
            checked: false
        }
    }

    search = (event) => {
        this.setState({ word: event.target.value });
        this.setState({checked: this.state.checked })
        console.log(this.state.checked);
        console.log(this.state.word);
        this.state.tasks.push(this.state.word);
        console.log(this.state.tasks);
       }
    
    componentDidMount(){
        this.state.checked;
    }

    render(){
        return (
            <div>
                <input placeholder="Enter Task Here" value={this.state.word} onChange={e => this.setState({word: e.target.value})} />
                {/* <input placeholder="Enter Task Here" value={e => this.setState({word: e.target.value})}></input> */}
                {/* <Input placeholder='Search Here' value={this.state.word} onChange={event => this.searchFunction(event)}/> */}
                <button onClick={event => this.search(event)}>Add New Task</button>
                <ul>
                    {this.state.tasks.map((task) => {
                        console.log(task);
                        return (
                            <div>
                                <li>{task}</li>
                                <label>Completed?</label>
                                <input 
                                type="checkbox" 
                                value={this.state.checked}
                                onChange={() => this.setState({checked: true})}></input>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Tasks;