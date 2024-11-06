import style from "./home.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function home () {
    return (
   
        <div className={cx('title')}>
            trang chủ
        </div>
    )
}

export default home;