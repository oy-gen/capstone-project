import useStore from './useStore';
import { useState, useEffect } from 'react';

export default function useHydration() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsubFinishHydration = useStore.persist.onFinishHydration(() =>
      setHydrated(true)
    );

    setHydrated(useStore.persist.hasHydrated());

    return () => {
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
}
