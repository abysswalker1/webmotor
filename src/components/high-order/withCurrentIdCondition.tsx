import { FC } from 'react';
import store from '../../store/store';
import { observer } from 'mobx-react-lite';

const withCurrentIdCondition = <P extends {}>(
  id: number,
  Component: FC,
): ((props: P) => JSX.Element | null) => {
  return observer((props: P) => {
    const { currentId } = store;

    if (currentId === id) {
      return <Component {...props} />;
    }
    return null;
  });
};

export default withCurrentIdCondition;
