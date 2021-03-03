import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

/*const DesafioDois = {
  cart: [],
  addN: 5,
  // foco é usar o número sem deixar os outros atrapalharem
  number: 0,
};
//O objetivo da função reducer é pegar o estado atual e para cada
//ação evoluir o estado alterando algum atributo
function reducer(state, action) {
  switch (action.type) {
    case 'arredondar':
      return { ...state, number: Math.ceil(state.number) };
    case 'Adicionar':
      return { ...state, addN: { number: action.payload } };
    default:
      return state;
  }
}*/

const Desafio = (props) => {
  const [count, setCount] = useState(1);

  return (
    <div className="UseState">
      <PageTitle
        title="Hook Desafio"
        subtitle="Multiplicar por 7, dividir por 25, arredondar para numero inteiro e somar n"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>

        <div>
          <button className="btn" onClick={() => setCount(count * 7)}>
            *7
          </button>
          <button className="btn" onClick={() => setCount(count / 25)}>
            ÷25
          </button>
          <button className="btn" onClick={() => setCount(Math.ceil(count))}>
            Arredondar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desafio;
