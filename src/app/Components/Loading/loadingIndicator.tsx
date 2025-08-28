'use client';

import { useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { CircularProgress, styled } from '@mui/material';

// Кастомизация стилей CircularProgress
const CustomCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main,
  thickness: 5,
  size: 50,
}));

// Типизация для хука навигации
type NavigationCallback = () => void;

function useNavigationEvent(onStart: NavigationCallback, onComplete: NavigationCallback) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    onStart();
    const timer = setTimeout(() => onComplete(), 100);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);
}

const LoadingIndicatorInner: React.FC<{ onStart: () => void; onComplete: () => void }> = ({
  onStart,
  onComplete,
}) => {
  useNavigationEvent(onStart, onComplete);
  return null;
};

const LoadingIndicator: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Suspense fallback={null}>
        <LoadingIndicatorInner
          onStart={() => setLoading(true)}
          onComplete={() => setLoading(false)}
        />
      </Suspense>

      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
          }}
        >
          <CustomCircularProgress />
        </div>
      )}
    </>
  );
};

export default LoadingIndicator;
