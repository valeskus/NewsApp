import {useState} from 'react';

export const useCardListController = () => {
  const [isLoading] = useState<boolean>(false);

  return {
    isLoading,
  };
};
