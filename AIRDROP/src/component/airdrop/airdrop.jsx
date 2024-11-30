import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Airdrop() {
  const location = useLocation();

  const currentPage = location.pathname.split('/')[1] || 'Home';

  return (
    <div>
      <h1>{currentPage} Page</h1> {}
    </div>
  );
}
