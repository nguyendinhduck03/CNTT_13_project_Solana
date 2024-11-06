// import React from 'react';
import style from "./homeLayout.module.scss"
import classNames from 'classnames/bind';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const cx = classNames.bind(style);

function homeLayout({ children }) {
  return (
    <div className={cx('home-layout')}>
      {/* Phần đầu trang, như header */}
      <header className={cx('header')}>
        <div className={cx('header-jr')}>
            <div className={cx('logo')}>
                <Link to = "/">
                    <img src={ logo } alt="Logo trang web" />
                </Link>
            </div>
            <div className={cx('menu')}>
                <ul>
                    <li> <Link to = "#" className={cx('active')}>Trang chủ</Link> </li>
                    <li> <Link to = "#">Mã giảm giá</Link> </li>
                    <li> <Link to = "#">Tin khuyến mãi</Link> </li>
                    <li> <Link to = "#">Trung tâm hỗ trợ</Link> </li>
                    <li> <Link to = "#">Tích điểm đổi quà</Link> </li>
                </ul>
            </div>
        </div>
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
