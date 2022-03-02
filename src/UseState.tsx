import React, { useState } from 'react';
import './App.css';

interface AppProps {

}

export interface User { name: string, age: number }

const App: React.FC<AppProps> = () => {
  const [count, setCount] = useState<number | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const [listInput, setListInput] = useState<string>('');

  const [listNames, setListNames] = useState<string[]>([
    'John',
    'Jane',
    'Joe',
    'Jill',
    'Jack',
  ]);

  const [user, setUser] = useState<User>({
    name: 'joão',
    age: 20,
  });

  const changeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      name: event.target.value,
    })
  }

  const changeUserAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      age: Number(event.target.value),
    });
  }

  const addToListOnFinal = () => {
    setListNames([...listNames, listInput]);
  }

  const addToListOnInicio = () => {
    setListNames([listInput, ...listNames]);
  }

  const changeList = (addOnFinal: boolean) => {
    if (addOnFinal) {
      addToListOnFinal();
    } else {
      addToListOnInicio();
    }

    setUser({
      ...user,
      name: listInput,
    })
    setListInput('');
  }

  return (
    <div className="App">
      <header className="App-header">
        {listNames.map((name, index) => (<p>Posição #{index + 1}: {name}</p>))}
        <input value={listInput} onChange={(event) => setListInput(event.target.value)}></input>
        <button onClick={() => changeList(false)}>+ Inicio</button>
        <button onClick={() => changeList(true)}>+ Fim</button>
        ---
        <pre>
          {JSON.stringify(user, undefined, 2)}
        </pre>
        <p>Nome: {user.name}</p>
        <label>Nome</label>
        <input value={user.name} onChange={changeUserName}></input>
        <label>Idade</label>
        <input type='number' value={user.age} onChange={changeUserAge}></input>
        <br />
        ---
        <p>{name || 'Sem nome definido'}</p>
        <input disabled={canEdit === false} onChange={(event) => setName(event.target.value)}></input>
        <button onClick={() => setCanEdit(!canEdit)}>
          {canEdit ? 'Desabilitar edição' : 'Habilitar edição'}
        </button>
        ---
        <p>{count}</p>
        <button onClick={() => setCount((count || 0) + 1)}>Incrementar</button>
        <button onClick={() => setCount((count || 0) - 1)}>Remover</button>
      </header>
    </div>
  );
};

export default App;
