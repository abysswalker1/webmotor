import {FC, ReactNode} from 'react';
import store from '../../store/store';
import { observer } from 'mobx-react-lite';
import './tab-content.scss';

interface Props {
  children?: ReactNode
}

const TabContent: FC<Props> = ({ children }) => {
  const {currentId} = store;

  return (
    <div className='tab-content'>
      <h2>Контент таба {currentId}</h2>
      {children}
      <button className='tab-content__button' type="button">Кнопка действия</button>
    </div>
  );
};

export default observer(TabContent);