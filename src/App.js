import React from 'react';
import UsersList from './components/UsersList.js';
import SearchBar from './components/SearchBar.js';
import AboutUser from './components/AboutUser/AboutUser.js';
import Loading from './components/Loading/Loading.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutUserPage: {isOpen: false, login: null},
            data: {isLoading: true, users: []},
            filteredData: []
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSeeMore = this.handleSeeMore.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);        
    }    

    componentDidMount() {
        window.client.getUsers((res) => {
            this.setState({
                data: {isLoading: false, users: res},
                filteredData: res
            });
        });
    }

    handleSearch(text) {
        this.setState({filteredData: this.state.data.users.filter((user) => ('' === text) ?  true : user.login.includes(text))});
    }

    handleSeeMore(login) {
        this.setState({aboutUserPage: {isOpen: true, login}});
    }

    handleSave(login, NodeId, index) {
        const{data, filteredData} = this.state;
        this.setState({
            data: {isLoading: false, users: data.users.map(setUser)},
            filteredData: filteredData.map(setUser)
        });

        function setUser(user) {
            if(user.id === index) {
                user.login = login;
                user.node_id = NodeId;

                return user;
            }

            return user;
        }
    }

    handleDelete(index) {
        const newData = this.state.filteredData.filter((user) => user.id !== index);

        this.setState({
            data: {isLoading: false, users: newData},
            filteredData: newData
        });
    }

    render = () => (<>
        {this.state.data.isLoading
        ?<Loading/>
        :<AppContent
            onSearch = {this.handleSearch}
            users = {this.state.filteredData}
            onSeeMore = {this.handleSeeMore}
            onSave = {this.handleSave}
            onDelete = {this.handleDelete}
            aboutUserPage = {this.state.aboutUserPage}
            onCloseAboutUserPage = {() => {this.setState({aboutUserPage: {isOpen: false, login: null}})}}
        />
        }</>);
}

function AppContent(props) {
    return (
        <div className="App">
            {!props.aboutUserPage.isOpen
            ? <>
                <SearchBar
                    onSearch = {props.onSearch}
                />
                <UsersList
                    users = {props.users}
                    onSeeMore = {props.onSeeMore}
                    onSave = {props.onSave}
                    onDelete = {props.onDelete}
                />
            </>
            : <>
                <AboutUser
                    login = {props.aboutUserPage.login}
                    onBack = {props.onCloseAboutUserPage}
                />
            </>}
        </div>
    );
}

export default App;
