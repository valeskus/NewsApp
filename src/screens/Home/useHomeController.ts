import {useContext} from 'react';
import {Context} from '../../Context';

export const useHomeController = () => {
  const {newsList, setNewsList} = useContext(Context);
  const mockData = [
    {
      id: '1',
      title: 'string',
      image: 'https://picsum.photos/500/500',
      description: 'string',
      time: '2 minuts ago',
    },
    {
      id: '2',
      title: 'string',
      image: 'https://picsum.photos/500/500',
      description: 'string',
      time: '2 minuts ago',
    },
  ];
  return {
    newsList: mockData,
  };
};
