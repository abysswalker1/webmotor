import { FC } from 'react';
import './App.scss';
import TabList from './components/tabList/TabList';
import TabContent from './components/tabContent/TabContent';

const App: FC = () => {
  return (
    <main className="app">
      <div className="container">
        <TabList />
        <TabContent />
      </div>
    </main>
  );
};

export default App;
