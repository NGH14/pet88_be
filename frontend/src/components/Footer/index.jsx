import logo from 'assets/images/logo-text.png';
import bgImg from 'assets/images/navy-bg.png';
import React from 'react';
import { useTranslation } from 'react-i18next';

import './style.css';
import { FooterContainer } from './Footer.style';

export default function FooterWave() {
  const [t] = useTranslation();
  return (
    <FooterContainer>
      <footer
        className="footer"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <section className="footer-content">
          <section className="footer-content-column">
            <section className="footer-menu">
              <h2 className="footer-menu-name">{t('working time')}</h2>
              <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <p>
                    {t('Monday')} - {t('Saturday')}
                  </p>
                  <p>08:00 - 14:00</p>
                  <p>
                    {t('Sunday')} & {t('Holidays')}
                  </p>
                  <p>08:00 - 12:00</p>
                </li>
              </ul>
            </section>
          </section>

          <section className="footer-content-column">
            <section className="footer-call-to-action">
              <h2 className="footer-menu-name"> {t('Email')} </h2>
              <p className="footer-call-to-action-description">{t('Have a support question')}?</p>
              <a
                className="footer-call-to-action-button"
                href='mailto:servicepet88@gmail.com?subject=Feedback&body = Message"'
                target="_self"
              >
                servicepet88@gmail.com
              </a>
            </section>
            <section className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">{t('Calling us')}</h2>
              <p className="footer-call-to-action-link-wrapper">
                <a className="footer-call-to-action-link" href="tel:+0916x4841" target="_self">
                  (+84) 0916x4841
                </a>
              </p>
            </section>
          </section>
          <section className="footer-content-column">
            <section className="footer-menu">
              <h2 className="footer-menu-name">{t('Location')}</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <p>
                    418 Truong Sa, Phu Nhuan,
                    {t('Ho Chi Minh City')}
                  </p>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <p>
                    969 Xuan Thuy, Thao Dien,
                    {t('Ho Chi Minh City')}
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        <section className="footer-copyright">
          <section className="footer-copyright-wrapper">
            <p className="footer-copyright-link">
              ©2022-2025. Pet88 | {t('from')}
              <a href="https://www.linkedin.com/in/vu-huu-nghia/"> Nghia </a>
              {t('with love')}
            </p>
          </section>
        </section>
      </footer>
 </FooterContainer>
  );
}
