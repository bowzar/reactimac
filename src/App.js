import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Main from './components/main';

class App extends Component {
    render() {
        return (
            <Layout style={{ height: '100%' }}>
                <Switch>
                    <Route exact path='/main' component={Main}></Route>
                    <Route path='/main/:name' component={Main}></Route>
                </Switch>
            </Layout>
        );
    }
}

export default App;
