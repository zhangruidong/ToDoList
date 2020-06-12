import React, {useState} from 'react';
import Header from './components/header'
import Content from './components/Content'
import {ToDoList} from './utils/interface'
import styles from './index.less';

const defList: ToDoList[] = [
  {title:'任务', status: '1', id: 1, mark: true},
  {title:'已经完成的任务', status: '2', id: 2, mark: false}
]

const addItem = (title: string, list: ToDoList[]) => {
  const max = Math.max(...list.map(item => item.id), 0);
  return [{title, id: max +1, status: '1', mark: false}].concat(list)
}

const changeItemStatus = (targetItem: ToDoList, list: ToDoList[]) => {
  return list.map(item => {
    if(item.id === targetItem.id) {
      item = targetItem
    }
    return item
  }).filter(item => item.title)
}

const move = (cur: number, target: number, dir: string, list: ToDoList[]) => {
  let curIndex = 0;
  let targetIndex = 0;
  list.forEach((item, index) => {
    if(item.id === cur) {
      curIndex = index
    }
    if(item.id === target) {
      targetIndex = index
    }
  })
  console.log(curIndex,target, 'ttt')
  if(dir === 'up') {
     list.splice(targetIndex, 0, list.splice(curIndex,1)[0])
  }else {
    list.splice(curIndex, 0, list.splice(targetIndex,1)[0])
  }
  return [...list]
}

export default () => {
  const [list, changeList] = useState(defList)
  return (
  <div className={styles.box}>
    <Header onAdd={(title: string) => changeList(addItem(title, list))} />
    <Content
    moveUp={(cur: number, target: number, dir: string)=> changeList(move(cur, target, dir, list))}
    moveDown={(cur: number, target: number, dir: string)=> changeList(move(cur, target, dir, list))}
    onChangeStatus={(item: ToDoList) => changeList(changeItemStatus(item, list))}
    list={list}
    />
  </div>);
};

