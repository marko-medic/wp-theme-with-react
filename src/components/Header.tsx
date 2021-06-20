import * as React from 'react';

function Header({ text }: { text: string }) {
  return (
    <div className="header">
      <p>Header {text}</p>
    </div>
  );
}

export default Header;
