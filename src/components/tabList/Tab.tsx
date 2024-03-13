import {FC} from 'react';
import { observer } from 'mobx-react-lite';
import store from '../../store/store';
import cn from 'classnames';
import './tabList.scss';
import { ITab } from '../../types';

interface Props extends ITab {
}

const Tab: FC<Props> = (props) => {
  const { currentId, setCurrentId } = store; 
  const className = cn(
    'tab',
    currentId === props.id && 'current' 
  );

  return (
    <div className={className} onClick={() => setCurrentId(props.id)}>
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default observer(Tab);