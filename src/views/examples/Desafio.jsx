import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const Desafio = (props) => {
  const [count, setCount] = useState(1);

  const [name, setName] = useState('');

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
        </div>
      </div>
      <div className="center">
        <div></div>
      </div>
      <SectionTitle title="Exercício #02" />
      <input
        type="text"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className="text">{name}</span>
    </div>
  );
};

export default Desafio;
