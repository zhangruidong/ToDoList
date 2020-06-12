import React from 'react';
import { Tabs, Row, Col } from 'antd';
import List from './List'
import {ToDoList} from '../utils/interface'

const { TabPane } = Tabs;

interface Tab {
  key: string,
  title: string
}

const tabs: Tab[] = [
  {key: '1', title: '未完成'},
  {key: '2', title: '已完成'},
  {key: '3', title: '全部'},
]

interface ContentInterface {
  list: ToDoList[],
  onChangeStatus: Function,
  moveUp: Function,
  moveDown: Function
}

const getList = (key: string, list: ToDoList[] ): ToDoList[] => {
  if(key === '3') return list;
  return list.filter(item => item.status === key)
}

export default ({list, onChangeStatus, moveUp, moveDown}: ContentInterface) => {
  return (
    <Row justify="start">
      <Col span="24">
        <Tabs defaultActiveKey="1">
          {
            tabs.map(item => {
              const computedList = getList(item.key, list)
              return (
                <TabPane tab={`${item.title}(${computedList.length})`} key={item.key} >
                  {
                    computedList.length ?
                    computedList.map((item, index)=> {
                      return (
                        <List
                        data={item}
                        canUp={computedList.length > 1 && index !== 0}
                        canDown={computedList.length > 1 && index !== computedList.length - 1}
                        prev={computedList[index -1]}
                        next={computedList[index + 1]}
                        key={item.id}
                        onChangeStatus={onChangeStatus}
                        moveUp={moveUp}
                        moveDwon={moveDown}
                        />
                      )
                    }) :
                    `${item.title}任务为空`
                  }
                </TabPane>
              )
            })
          }
        </Tabs>
      </Col>
    </Row>
  )
}
