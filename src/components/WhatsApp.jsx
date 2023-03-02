import React from 'react';

const WhatsApp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=0218004423"
      target="_blank"
      rel="noreferrer"
      className="whatsapp"
    >
      <div className="icon">
        <img src="/images/icon/whatsapp.png" alt="whatsapp" />
      </div>
    </a>
  );
};

export default WhatsApp;
