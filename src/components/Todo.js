import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [input, setInput] = useState("");
  // const [items, putItems] = React.useState([
  //     /* テストコード 開始 */
  //   { key: getKey(), text: '日本語の宿題', done: false },
  //   { key: getKey(), text: 'reactを勉強する', done: false },
  //   { key: getKey(), text: '明日の準備をする', done: false },
  //   /* テストコード 終了 */
  // ]);
  
  const [items, putItems, clearItems] = useStorage();
  
  const [filter, setFilter] = useState("ALL");
  const handleFilterChange = (value) => {
    setFilter(value)
  }
  
  const handleCheck = checked => {
    const newItems = items.map(item => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    putItems(newItems);
  };
  
  const handleInput = (e) => {
    setInput(e.target.value)
  }
  
  const handleEnter = (e) => {
    if(e.key === "Enter"){
      putItems([...items, {key: getKey(), text: input, done: false}]);
      setInput("");
    }
  }
  
  const displayItems = items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
  }); 
  
  console.log(displayItems);
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <input class="input" type="text" value={input} onChange={handleInput} onKeyPress={handleEnter} />
      <Filter onChange={ handleFilterChange } value={filter} />
      {displayItems.map(item => (
        <TodoItem key={item.getKey} item={item} onCheck={handleCheck} />
      ))}
      <div className="panel-block">
        {displayItems.length} items
      </div>
    </div>
  );
}

export default Todo;