import React from 'react';

// Grid хелпер для отображения нескольких вариантов в 1 скриншот тесте
export const VariantsContainer: React.FC<{
  children: React.ReactNode;
  direction?: 'row' | 'column';
}> = ({ children, direction = 'column' }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        gap: '16px',
        padding: '32px',
      }}
    >
      {children}
    </div>
  );
};

// Grid item хелпер для отображения варианта теста вместе с label надписью
export const VariantItem: React.FC<{
  label: string;
  children: React.ReactNode;
}> = ({ label, children }) => {
  return (
    <div>
      <div style={{ marginBottom: '8px', color: '#666', fontSize: '12px' }}>
        {label}
      </div>
      {children}
    </div>
  );
};
