/**
 * src/components/Footer/index.jsx
 * Footer message and public links
 *
 * created by Lynchee on 7/16/23
 */

import React from 'react';
import { FaStore, FaWeixin, FaQq } from 'react-icons/fa';
import './style.css';

const Footer = () => (
  <footer>
    <div className='rounded-social-buttons'>
      <a
        className='social-button github'
        href='https://qr01.cn/E0VqCY'
        target='_blank'
        rel='noreferrer'
      >
        <FaStore />
      </a>
      <a
        className='social-button discord'
        href='https://docs.qq.com/doc/DWGtjYVVxTUxTYWVL'
        target='_blank'
        rel='noreferrer'
      >
        <FaWeixin />
      </a>
      <a
        className='social-button twitter'
        href='http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=W18nuFY8tNFsbiZpkVJTYpcVGWbxhZ9b&authKey=qPjz8YznmwTDdbNYZ8qojeS0kmIrH1aUZ7mrUnxKsXnUKIx5ur5%2BkA5BMWJoZKIP&noverify=0&group_code=653065114'
        target='_blank'
        rel='noreferrer'
      >
        <FaQq />
      </a>
    </div>
    <p className='copyright'>
      Copyright © 2023 RealChar. All rights reserved. Any AI character&apos;s
      statements are fictional and don&apos;t represent actual beliefs or
      opinions.
    </p>
  </footer>
);

export default Footer;
