import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { Sample1 } from './sample1';
import { Sample2 } from './sample2';

const { SubMenu } = Menu;
const { Sider } = Layout;

const samples = [
    {
        name: 'sample1',
        title: 'Sample 1',
        component: Sample1,
    },
    {
        name: 'sample2',
        title: 'Sample 2',
        component: Sample2,
    }
];


export class Home extends Component {

    renderMenu(baseUrl) {

        return samples.map((item, index) => {
            return (
                <Menu.Item key={index}>
                    <Link to={`${baseUrl}/${item.name}`}>{item.title}</Link>
                </Menu.Item>);
        });
    }

    renderRouter(baseUrl) {

        return samples.map((item, index) => {
            return (
                <Route key={index} path={`${baseUrl}/${item.name}`} component={item.component}></Route>
            );
        });
    }

    render() {

        const name = this.props.match.params.name;
        let selectedKeys = [];
        var index = samples.findIndex(c => c.name === name);
        selectedKeys.push(index.toString());

        return (
            <Layout style={{ padding: '32px 32px 0 32px' }}>
                <Layout style={{ padding: '0', background: '#fff' }}>
                    <Sider width={200} style={{ background: '#fff', overflowY: 'auto' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={selectedKeys}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', padding: '24px 0' }}>
                            <SubMenu key="sub1" title={<span><Icon type="user" />Samples</span>}>
                                {this.renderMenu(this.props.match.path.replace('/:name', ''))}
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '24px', background: '#fff' }}>
                        <Switch>
                            {this.renderRouter(this.props.match.path.replace('/:name', ''))}
                        </Switch>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
