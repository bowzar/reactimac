import React, { Component } from 'react';
import { Button, Layout } from 'antd';

const { Content } = Layout;

export class Sample2 extends Component {
    render() {
        return (
            <Content>
                <Button type='danger'>Test 2</Button>
            </Content>
        );
    }
}
