import React, {useState} from 'react'
import { Button, Input, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default ({onAdd}: {onAdd: Function}) => {
  const [title, setTitle] = useState('')
  const handleAdd = () => {
    if(title.trim() !== '') {
      onAdd(title);
      setTitle('')
    }
  }
  return (
    <div>
      <Row justify="start">
        <Col>
          <Input
          placeholder="Please input task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onPressEnter={handleAdd}
          />
        </Col>
        <Col>
          <Button icon={<PlusOutlined />} onClick={handleAdd} >添加</Button>
        </Col>
      </Row>
    </div>
  )
}

