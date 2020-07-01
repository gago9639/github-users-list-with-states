import React from 'react';
import './AboutUser.css'
import Loading from '../Loading/Loading.js'

export default class AboutUser extends React.Component {
    state = {
        data: {isLoading: true, user: null}
    }

    componentDidMount() {
        window.client.getUserProfile(this.props.login, (res) => {this.setState({data: {isLoading: false, user: res}})});
    }
   
    render() {
        const {data} = this.state;

        return (
            <div className="About-user">
                <AboutUserContent
                    user = {data.user}
                    isLoading = {data.isLoading}
                    onBack = {this.props.onBack}
                />
            </div>
        );
    }
}

function AboutUserContent(props) {
    const user = props.user;
    
    return (
        <>
            <div className="app-header">
                <i className="fas fa-arrow-left back-button" onClick={props.onBack}></i>
                <div className="about-user-header-cap">About User</div>
            </div>
                {props.isLoading
                ? <Loading/>
                : <div className="app-body about-user-body">
                    <div className="main-info row-container">
                        <span className="user-name-location">{user.name ?? 'none'} | {user.location ?? 'none'}</span>
                        <img className="user-image" src={user.avatar_url} alt="user_avatar"></img>
                    </div>
                    <div className="more-info ">
                        <div className="followers-repos row-container">
                            <span className="more-info-text">Followers: {user.followers} </span>
                            <span className="more-info-text">Following: {user.following}</span>
                            <span className="more-info-text">Public repos: {user.public_repos}</span>
                            <span className="more-info-text">Public gists: {user.public_gists}</span>
                            <span className="more-info-text">Last update: {user.updated_at.slice(0, 10)}</span>
                        </div>
                    </div>
                </div>}            
        </>);
}