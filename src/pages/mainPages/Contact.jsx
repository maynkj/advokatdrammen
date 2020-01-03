import React from 'react';

export default () => (
  <React.Fragment>
    <h1>Kontakt oss</h1>
    <div className="contactBlock">
      <h3>Advokat Thorgeier Kjær</h3>
      <address>
        <p>
          Bragernes Torg 13 (inngang fra Nedre Storgate 2), 3017 Drammen
        </p>
        <p>
          Telefon: <a href="tel:004732276220">32 27 62 20</a><br/>
          E-post: <a href="mailto:post@advokatdrammen.no">post@advokatdrammen.no</a>
        </p>
      </address>
    </div>
    <div>
      <iframe
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2010.3750304859755!2d10.203104315910204!3d59.74321068481082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46413cb51bf74b07%3A0xba0c80ac8bed28dd!2sAdvokatene+i+B%C3%B8rsg%C3%A5rden!5e0!3m2!1sen!2sno!4v1548184859469" width="600" height="450" frameBorder="0" style={{ border: 0}} allowFullScreen
      />
    </div>
  </React.Fragment>
);
