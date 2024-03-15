import { FC } from 'react';
import './tabContent.scss';
import Article from '../article/Article';
import MainForm from '../mainForm/MainForm';
import withCurrentIdCondition from '../high-order/withCurrentIdCondition';

const TabContentArtile = withCurrentIdCondition(1, Article);
const TabContentForm = withCurrentIdCondition(2, MainForm);

const TabContent: FC = () => {
  return (
    <div className="tab-content">
      <div className="tab-content__inner scroll-style">
        <TabContentArtile />
        <TabContentForm />
      </div>
      <button className="tab-content__button" type="button">
        Кнопка действия
      </button>
    </div>
  );
};

export default TabContent;
