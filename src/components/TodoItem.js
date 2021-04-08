/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React from 'react';
function TodoItem({item}) {
  var [checked, setChecked] = React.useState(item.done);
  
  const handleCheckbox = () => {
    setChecked(!checked);
  }
  
  return (
    <label className="panel-block">
      <input type="checkbox" onChange={ handleCheckbox } />
      { checked ? <span className="has-text-grey-light">{item.text}</span> : <span>{item.text}</span>} 
    </label>
  );
}

export default TodoItem;