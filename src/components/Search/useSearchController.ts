import {useCallback, useContext, useState} from 'react';
import {Context} from '../../Context';

export const useSearchController = () => {
  const {searchTerm, setSearchTerm} = useContext(Context);

  const [isFocused, setFocused] = useState(false);

  const handleChange = useCallback(
    (nextValue: string) => {
      setSearchTerm(nextValue);
    },
    [setSearchTerm],
  );

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);
  return {
    searchTerm,
    isFocused,
    handleChange,
    handleFocus,
    handleBlur,
  };
};
