import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/53712536?s=460&u=8fce4248cd2ecbda14c8bf3f3b649bc07d3d47c6&v=4" alt="Rosana Rezende" />
        <div>
          <strong>Christhopher Porpino</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <br /><br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem delectus quod officiis, quisquam a ullam. Excepturi iure perferendis illo error delectus, cupiditate tempora exercitationem quis odio voluptatum reiciendis culpa assumenda!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;