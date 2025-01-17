import React, { Component } from 'react'
import { Tabs, Card, Input, Table, Tag, Space, Descriptions, Badge, Image, Button, Row, Col ,InputNumber, message} from 'antd';
import { post, get } from '../../../utils/request'
import { AudioOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Search } = Input;



function callback(key) {
    console.log(key);
}
const onSearch = value => console.log(value);

const l = ()=>{
  get("/loan").then(res => {
      console.log(res)
  }) 
  .catch(err => {
      console.error(err);
  })
}

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
export class loan extends Component {

    render() {
        const addLoan = ()=>{
            post("/loan", {value: 10000}).then(res => {
                console.log(res)
                message.info("添加一笔借款合约.")
            }) 
            .catch(err => {
                console.error(err);
            })
        }
        return (
          
              <Descriptions title="个人信用及贷款记录" bordered>
                <Descriptions.Item label="客户">李明</Descriptions.Item>
                <Descriptions.Item label="信用分">85</Descriptions.Item>
                <Descriptions.Item label="上次评估日期">2021/1/26</Descriptions.Item>
                <Descriptions.Item label="目前信用状况" span={3}>
                  <Badge status="processing" text="良好" />
                </Descriptions.Item>
                <Descriptions.Item label="最大贷款金额">￥80000</Descriptions.Item>
                <Descriptions.Item label="目前贷款金额">￥40000</Descriptions.Item>
                <Descriptions.Item label="可用贷款金额">￥40000</Descriptions.Item>
                <Descriptions.Item label="贷款记录">
                  1.日期:2020/2/15 金额：￥50000
                  <br />
                  状况：还款完毕
                  <br />
                  <br />
                  2.日期：2020/11/13 金额：￥40000
                  <br />
                  状况：未还款
                  <br />
                  <br />
                </Descriptions.Item>
                <Space direction="vertical">
                <Search placeholder="输入贷款金额" enterButton="确认" onClick={addLoan} style={{ width: 500 }} />
                </Space>
              </Descriptions>



          
        )
    }
}


export default loan
