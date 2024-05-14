import {useContext} from 'react';
import {Context} from '../../Context';

export const useHomeController = () => {
  const {newsList, setNewsList} = useContext(Context);

  return {newsList};
};
