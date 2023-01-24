import React from 'react';
import { PageLevelContext } from '../lib/LevelContext';

export function usePageLevel() {
  const context = React.useContext(PageLevelContext);
  const [level, setLevel] = React.useState(context);

  if (context === undefined) {
    throw new Error('usePageLevel must be used within a PageLevelProvider');
  }

  const handleLevelChange = React.useCallback(
    (newLevel: number) => {
      setLevel(newLevel);
    },
    [setLevel],
  );

  React.useEffect(() => {
    if (context !== level) {
      handleLevelChange(context);
    }
  }, [context, level, handleLevelChange]);

  return {
    level,
    handleLevelChange,
  };
}
