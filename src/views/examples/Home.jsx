import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const Home = (props) => (
  <div className="Home">
    <PageTitle
      title="Módulo Hooks"
      subtitle="Hooks são uma nova adição ao React 16.8."
    />
    <SectionTitle>Site para Aprender básicos sobre Hooks</SectionTitle>
    <div>
      <a target="_blank" href="https://pt-br.reactjs.org/docs/hooks-intro.html">
        <img
          src="https://miro.medium.com/max/700/1*4ObYIqJkEYP6-0ndSGi4LQ.png"
          alt="Hooks icon"
        />
      </a>
    </div>
  </div>
);

export default Home;
