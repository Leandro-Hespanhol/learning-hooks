import React, { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';

const initialState = {
  cart: [],
  products: [],
  user: null,
  // foco é usar o número sem deixar os outros atrapalharem
  number: 0,
};
//O objetivo da função reducer é pegar o estado atual e para cada
//ação evoluir o estado alterando algum atributo
function reducer(state, action) {
  switch (action.type) {
    case 'number_add2':
      return { ...state, number: state.number + 2 };
    case 'login':
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'login', payload: 'Maria' })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'number_add2' })}
          >
            +2
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
