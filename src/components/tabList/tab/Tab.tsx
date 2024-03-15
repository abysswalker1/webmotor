import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import store from '../../../store/store';
import cn from 'classnames';
import '../tabList.scss';
import { ITab } from '../../../types';
import TabIcon from './tab-icon';

interface Props extends ITab {}

const Tab: FC<Props> = (props) => {
  const { currentId, setCurrentId } = store;
  const isCurrent = currentId === props.id && 'current';

  return (
    <div className={cn('tab', isCurrent)} onClick={() => setCurrentId(props.id)}>
      <div className="tab__heading">
        <h3>{props.title}</h3>
        {TabIcon}
      </div>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default observer(Tab);
