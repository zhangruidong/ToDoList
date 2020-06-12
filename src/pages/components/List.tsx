import React, {FC} from 'react';
import {Typography, Checkbox, Row, Col, Button} from 'antd'
import {ToDoList} from '../utils/interface'
import { ArrowUpOutlined, ArrowDownOutlined, FlagOutlined } from '@ant-design/icons';

const {Text} = Typography

interface ListInterface {
  onChangeStatus: Function,
  moveUp: Function,
  moveDwon: Function,
  data: ToDoList,
  canUp: boolean,
  canDown: boolean,
  prev: ToDoList,
  next: ToDoList
}

export default ({data, canUp, canDown, onChangeStatus, moveUp, moveDwon, prev, next}: ListInterface) => {
  const {id, status, title, mark} = data;
  const handleChange = (title: string) => {
    onChangeStatus({...data, title})
  }
  return (
    <Row align="middle">
      <Col flex="0 0 20px">
        <Checkbox checked={status === '2'} onChange={() => onChangeStatus({...data, status: status === '2'? '1': '2' })} />
      </Col>
      <Col flex="0 0 120px">
        <Text delete={status === '2'} ellipsis editable={{onChange: handleChange}} mark={mark}>
          {title}
        </Text>
      </Col>
      <Col flex="0 0 30px">
        { <Button type="link" icon={<FlagOutlined/>} onClick={() => onChangeStatus({...data, mark: !mark})}></Button>}
      </Col>
      <Col flex="0 0 30px">
        {canUp && <Button type="link" icon={<ArrowUpOutlined/>} onClick={() => moveUp(id, prev.id, 'up')}></Button>}
      </Col>
      <Col flex="0 0 30px">
        {canDown && <Button type="link" icon={<ArrowDownOutlined/>} onClick={() => moveUp(id, next.id, 'down')}></Button>}
      </Col>
    </Row>
  )
}
