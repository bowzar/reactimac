import React, { Component } from 'react';
import { Button, Layout } from 'antd';

const { Content } = Layout;

export class Sample1 extends Component {
    render() {
        return (
            <Content>
                <Button type='primary'>Test 1</Button>
            </Content>
        );
    }
}
