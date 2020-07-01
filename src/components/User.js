import React from 'react';
import Button from './Buttons.js';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditorOpen: false,
            login: props.login,
            nodeId: props.nodeId
        }

        this.handleOnLoginChange = this.handleOnLoginChange.bind(this);
        this.handleOnNodeIdChange = this.handleOnNodeIdChange.bind(this);
        this.handleOnCancel = this.handleOnCancel.bind(this);
    }

    handleOnLoginChange(value) {
        this.setState({login: value});
    }

    handleOnNodeIdChange(value) {
        this.setState({nodeId: value});
    }

    handleOnCancel() {
        this.setState({
            isEditorOpen: false,
            login: this.props.login,
            nodeId: this.props.nodeId
        });
    }
    
    render() {
        const {isEditorOpen, login, nodeId} = this.state;
        return (
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <a href={this.props.profileUrl} target="_blank" rel="noopener noreferrer">
                            <img src={this.props.avatarUrl} className="card-img" alt="user avatar"></img>
                        </a>
                    </div>
                    <div className="col-md-8">
                        <div className="row-75 card-body">
                            {!isEditorOpen
                            ?<InfoDisplay
                                profileUrl = {this.props.profileUrl}
                                login = {this.props.login}
                                nodeId = {this.props.nodeId}
                                />                
                            :<InfoEditor
                                login = {this.props.login}
                                nodeId = {this.props.nodeId}
                                onLoginChange = {this.handleOnLoginChange}
                                onNodeIdChange = {this.handleOnNodeIdChange}
                            />}                            
                        </div>
                        <div className="row-25 button-bar">          
                            {!isEditorOpen
                            ?<>
                                <Button
                                    action = "SEE_MORE"
                                    onClick = {this.props.onSeeMore}
                                />
                                <Button 
                                    action = "EDIT"
                                    onClick = {() => { this.setState({isEditorOpen: true}); }}
                                />
                                <Button
                                    action = "DELETE"
                                    onClick = {this.props.onDelete}
                                />
                            </>
                            :<>
                                <Button 
                                    action = "CANCEL"
                                    onClick = {() => { this.handleOnCancel(); }}
                                />
                                <Button 
                                    action = "SAVE"
                                    onClick = {() => {
                                        this.setState({isEditorOpen: false});
                                        this.props.onSave(login, nodeId)
                                    }}
                                />
                            </>}
                        </div>                        
                    </div>    
                </div>
            </div>
        );  
    }  
}

class InfoEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: props.login,
            nodeId: props.nodeId
        }

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleNodeIdChange = this.handleNodeIdChange.bind(this);
    }

    handleLoginChange(event) {
        this.setState({login: event.target.value});
        this.props.onLoginChange(event.target.value);
    }

    handleNodeIdChange(event) {
        this.setState({nodeId: event.target.value});
        this.props.onNodeIdChange(event.target.value);
    }

    render() {
        const {login, nodeId} = this.state;

        return(
            <div className='user-info-display'>
                <a href={this.props.profileUrl} target="_blank" rel="noopener noreferrer">
                    <h5 className="card-title">Login:<span> </span>
                        <input type="text" onChange={this.handleLoginChange} value={login}></input>
                    </h5>                    
                </a>   
                <span className="text-muted">Node Id:<span> </span>
                    <input type="text" onChange={this.handleNodeIdChange} value={nodeId}></input>
                </span>
            </div>
        );
    }
}

function InfoDisplay(props) {
    return(
        <div className='user-info-display'>
            <a className="text-body" href={props.profileUrl} target="_blank" rel="noopener noreferrer">
                <h5 className="card-title">Login: {props.login}</h5>
            </a>   
            <span className="text-muted">Node Id: {props.nodeId}</span>
        </div>
    );
}