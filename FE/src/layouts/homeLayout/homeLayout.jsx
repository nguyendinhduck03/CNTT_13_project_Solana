// import React from 'react';
import style from "./homeLayout.module.scss"
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function homeLayout({ children }) {
  return (
    <div className="home-layout">
      {/* Phần đầu trang, như header */}
      <header>
        <h2 className={cx('title')}>Header</h2>
      </header>

      {/* Phần nội dung */}
      <main>
        {children}
      </main>

      {/* Phần cuối trang, như footer */}
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default homeLayout;
