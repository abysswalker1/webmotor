import {FC} from 'react';
import './tabList.scss'
import Tab from './tab/Tab';
import store from '../../store/store';

const TabList: FC = () => {
  const { tabList } = store;
  return (
    <div className='tab-list'>
      {tabList.map(tab => <Tab {...tab} key={`tab-${tab.id}`}/>)}
    </div>
  );
};

export default TabList;