import React, { Component } from 'react'
import { Modal, Button, Space, Steps, InputNumber, Select } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { Step } = Steps;
const { confirm } = Modal;
export default class ConfirmModal extends Component {
    showConfirm = () => {
        confirm({
            title: 'Do you Want to delete these items?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    render() {
        const selectAfter = (
            <Select defaultValue="USD" style={{ width: 60 }}>
                <Option value="USD">$</Option>
                <Option value="EUR">€</Option>
                <Option value="GBP">£</Option>
                <Option value="CNY">¥</Option>
            </Select>
        );
        const { Option } = Select;

        const selectBefore = (
            <Select defaultValue="add" style={{ width: 60 }}>
                <Option value="add">+</Option>
                <Option value="minus">-</Option>
            </Select>
        );
        return (
            <div>
                <Space>
                    <Button onClick={this.showConfirm}>Confirm</Button>
                    <Button type="primary" danger>
                        Primary
                    </Button>
                </Space>

                <Steps current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
                <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
            </div>
        )
    }
}
