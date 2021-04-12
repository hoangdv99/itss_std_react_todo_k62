import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({ onAdd  }) {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  }
  const handleOnKeyDown = (e) => {
    if(e.keyCode === 13){
      onAdd(input);
      setInput("");
    }
  }
  
  return (
    <div className="panel-block">
      <input 
        className="input"
        type="text"
        placeholder="新しいToDoの作成"
        onChange={ handleInput }
        onKeyDown={ handleOnKeyDown }
      />
    </div>
  );
}

export default Input;
