import {useCallback, useState} from 'react';

export const useSearchController = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setFocused] = useState(false);

  const handleChange = useCallback((nextValue: string) => {
    setSearchTerm(nextValue);
  }, []);

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
