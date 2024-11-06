import style from "./home.module.scss";
import classNames from "classnames/bind";

import slider1 from "../../../assets/images/slider/slider1.png";
import slider2 from "../../../assets/images/slider/slider2.jpg";
import slider3 from "../../../assets/images/slider/slider3.png";
import slider4 from "../../../assets/images/slider/slider4.jpg";
import slider5 from "../../../assets/images/slider/slider5.jpg";
import slider6 from "../../../assets/images/slider/slider6.jpg";
import slider7 from "../../../assets/images/slider/slider7.jpg";
import slider8 from "../../../assets/images/slider/slider8.jpg";

import shopee from "../../../assets/images/logoMall/shoppee.webp";
import dmx from "../../../assets/images/logoMall/dmx.webp";
import fahasha from "../../../assets/images/logoMall/fahasha.webp";
import grab from "../../../assets/images/logoMall/grab.webp";
import highlands from "../../../assets/images/logoMall/highlands.webp";
import klook from "../../../assets/images/logoMall/klook.webp";
import lazada from "../../../assets/images/logoMall/lazada.webp";
import sendo from "../../../assets/images/logoMall/sendo.webp";
import shopeeFood from "../../../assets/images/logoMall/shopeeFood.webp";
import tiki from "../../../assets/images/logoMall/tiki.webp";
import traveloka from "../../../assets/images/logoMall/traveloka.webp";
import vnAirline from "../../../assets/images/logoMall/vnAirline.webp";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

const voucherItems  = [];
for (let i = 0; i < 9; i++) {
    voucherItems.push(
        <div className={cx('voucher-item')}>
            <div className={cx('cut')}>
                <div className={cx('top')}>
                    <div className={cx('left')}>
                        <img src={lazada}  />
                        <h5>Toàn sàn</h5>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('discount')}>
                            Giảm <span> 45K</span>
                        </div>
                        <div className={cx('condition')}>
                            ĐH tối thiểu: <span> 120.000đ</span>
                        </div>
                        <div className={cx('note')}>
                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                            <span>...  Xem chi tiết</span> 
                        </div>
                    </div>
                </div>
                <div className={cx('bot')}>
                    <div className={cx('expiry')}>
                    <FontAwesomeIcon 
                        icon={faClockRotateLeft} 
                        className={cx('clock-icon')}
                    />
                    HSD: <span>30/11</span>
                    </div>
                    <div className={cx('promotion')}>
                        #Lưu trên banner
                    </div>
                    <div className={cx('action')}>
                        <Link to="/banner">Đến Banner</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function home () {
    return (
        <div className={cx('container')}>
            {/* slideShow */}
            <div className={cx('slider')}>
                <div className={cx('slider-items')}>
                    <div className={cx('slider-item')}>
                        <img src={slider1} alt="Image 1" />
                    </div>
                    <div className={cx('slider-item')}>
                        <img src={slider2} alt="Image 2" />
                    </div>
                    <div className={cx('slider-item')}>
                        <img src={slider3} alt="Image 3" />
                    </div>
                    <div className={cx('slider-item')}>
                        <img src={slider4} alt="Image 4" />
                    </div>
                    <div className={cx('slider-item')}>
                        <img src={slider5} alt="Image 5" />
                    </div>
                    <div className={cx('slider-item')}>
                        <img src={slider6} alt="Image 6" />
                    </div>
                    <div className={cx('slider-item')}>
                        <img src={slider7} alt="Image 7" />
                    </div>
                    <div className={cx('slider-item')}>
                        <img src={slider8} alt="Image 8" />
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className={cx('search')}>
                <input 
                    type="text"
                    placeholder="Tìm kiếm"
                />
                <FontAwesomeIcon 
                    icon={faMagnifyingGlass} 
                    className={cx('search-icon')}
                />
            </div>

            {/* findCode */}
            <div className={cx('findCode')}>
                <div className={cx('findCode-content')}>
                    <h2>Tìm mã theo Sàn</h2>
                    <div className={cx('findCode-items')}>
                        <div className={cx('item')}>
                            <img src={shopee} />
                            <div className={cx('text')}>
                                <h3>
                                    <p>Mã giảm giá</p> Shopee
                                </h3>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={tiki} />
                            <div className={cx('text')}>
                                <h3>
                                    <p>Mã giảm giá</p> Tiki
                                </h3>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={traveloka} />
                            <div className={cx('text')}>
                                <h3>
                                    <p>Mã giảm giá</p> Traveloka
                                </h3>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={klook} />
                            <div className={cx('text')}>
                                <h3>
                                    <p>Mã giảm giá</p> Klook
                                </h3>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={shopeeFood} />
                            <div className={cx('text')}>
                                <h3>
                                    <p>Mã giảm giá</p> ShopeeFood
                                </h3>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={vnAirline} />
                            <div className={cx('text')}>
                                <h3>
                                    <p>Mã giảm giá</p> VietnamAirline
                                </h3>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={lazada} />
                            <div className={cx('text')}>
                                <h3>
                                    <p>Mã giảm giá</p> Lazada
                                </h3>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={sendo} />
                            <div className={cx('text')}>
                                <h3>
                                    <p>Mã giảm giá</p> Sendo
                                </h3>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={grab} />
                            <div className={cx('text')}>
                                <h3>
                                    <p>Mã giảm giá</p> Grab
                                </h3>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={fahasha} />
                            <div className={cx('text')}>
                                <h3>
                                    <p>Mã giảm giá</p> Fahasha
                                </h3>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={dmx} />
                            <div className={cx('text')}>
                                <h3>
                                    <p>Mã giảm giá</p> Điện Máy Xanh
                                </h3>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <img src={highlands} />
                            <div className={cx('text')}>
                                <h3>
                                    <p>Mã giảm giá</p> Highlands
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Voucher hot */}
            <div className={cx('voucherHot')}>
                <div className={cx('voucherHot-content')}>
                    <h2>Mã giảm giá HOT nhất</h2>
                    <div className={cx('vouchers')}>
                        {voucherItems}
                        {/* <div className={cx('voucher-item')}>
                            <div className={cx('cut')}>
                                <div className={cx('top')}>
                                    <div className={cx('left')}>
                                        <img src={lazada}  />
                                        <h5>Toàn sàn</h5>
                                    </div>
                                    <div className={cx('right')}>
                                        <div className={cx('discount')}>
                                            Giảm <span>45K</span>
                                        </div>
                                        <div className={cx('condition')}>
                                            ĐH tối thiểu: <span> 120.000đ</span>
                                        </div>
                                        <div className={cx('note')}>
                                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                                            <span>...  Xem chi tiết</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bot')}>
                                    <div className={cx('expiry')}>
                                    <FontAwesomeIcon 
                                        icon={faClockRotateLeft} 
                                        className={cx('clock-icon')}
                                    />
                                    HSD: <span>30/11</span>
                                    </div>
                                    <div className={cx('promotion')}>
                                        #Lưu trên banner
                                    </div>
                                    <div className={cx('action')}>
                                        <Link to="/banner">Đến Banner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('voucher-item')}>
                            <div className={cx('cut')}>
                                <div className={cx('top')}>
                                    <div className={cx('left')}>
                                        <img src={lazada}  />
                                        <h5>Toàn sàn</h5>
                                    </div>
                                    <div className={cx('right')}>
                                        <div className={cx('discount')}>
                                            Giảm <span>45K</span>
                                        </div>
                                        <div className={cx('condition')}>
                                            ĐH tối thiểu: <span> 120.000đ</span>
                                        </div>
                                        <div className={cx('note')}>
                                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                                            <span>...  Xem chi tiết</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bot')}>
                                    <div className={cx('expiry')}>
                                    <FontAwesomeIcon 
                                        icon={faClockRotateLeft} 
                                        className={cx('clock-icon')}
                                    />
                                    HSD: <span>30/11</span>
                                    </div>
                                    <div className={cx('promotion')}>
                                        #Lưu trên banner
                                    </div>
                                    <div className={cx('action')}>
                                        <Link to="/banner">Đến Banner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('voucher-item')}>
                            <div className={cx('cut')}>
                                <div className={cx('top')}>
                                    <div className={cx('left')}>
                                        <img src={lazada}  />
                                        <h5>Toàn sàn</h5>
                                    </div>
                                    <div className={cx('right')}>
                                        <div className={cx('discount')}>
                                            Giảm <span>45K</span>
                                        </div>
                                        <div className={cx('condition')}>
                                            ĐH tối thiểu: <span> 120.000đ</span>
                                        </div>
                                        <div className={cx('note')}>
                                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                                            <span>...  Xem chi tiết</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bot')}>
                                    <div className={cx('expiry')}>
                                    <FontAwesomeIcon 
                                        icon={faClockRotateLeft} 
                                        className={cx('clock-icon')}
                                    />
                                    HSD: <span>30/11</span>
                                    </div>
                                    <div className={cx('promotion')}>
                                        #Lưu trên banner
                                    </div>
                                    <div className={cx('action')}>
                                        <Link to="/banner">Đến Banner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('voucher-item')}>
                            <div className={cx('cut')}>
                                <div className={cx('top')}>
                                    <div className={cx('left')}>
                                        <img src={lazada}  />
                                        <h5>Toàn sàn</h5>
                                    </div>
                                    <div className={cx('right')}>
                                        <div className={cx('discount')}>
                                            Giảm <span>45K</span>
                                        </div>
                                        <div className={cx('condition')}>
                                            ĐH tối thiểu: <span> 120.000đ</span>
                                        </div>
                                        <div className={cx('note')}>
                                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                                            <span>...  Xem chi tiết</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bot')}>
                                    <div className={cx('expiry')}>
                                    <FontAwesomeIcon 
                                        icon={faClockRotateLeft} 
                                        className={cx('clock-icon')}
                                    />
                                    HSD: <span>30/11</span>
                                    </div>
                                    <div className={cx('promotion')}>
                                        #Lưu trên banner
                                    </div>
                                    <div className={cx('action')}>
                                        <Link to="/banner">Đến Banner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('voucher-item')}>
                            <div className={cx('cut')}>
                                <div className={cx('top')}>
                                    <div className={cx('left')}>
                                        <img src={lazada}  />
                                        <h5>Toàn sàn</h5>
                                    </div>
                                    <div className={cx('right')}>
                                        <div className={cx('discount')}>
                                            Giảm <span>45K</span>
                                        </div>
                                        <div className={cx('condition')}>
                                            ĐH tối thiểu: <span> 120.000đ</span>
                                        </div>
                                        <div className={cx('note')}>
                                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                                            <span>...  Xem chi tiết</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bot')}>
                                    <div className={cx('expiry')}>
                                    <FontAwesomeIcon 
                                        icon={faClockRotateLeft} 
                                        className={cx('clock-icon')}
                                    />
                                    HSD: <span>30/11</span>
                                    </div>
                                    <div className={cx('promotion')}>
                                        #Lưu trên banner
                                    </div>
                                    <div className={cx('action')}>
                                        <Link to="/banner">Đến Banner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('voucher-item')}>
                            <div className={cx('cut')}>
                                <div className={cx('top')}>
                                    <div className={cx('left')}>
                                        <img src={lazada}  />
                                        <h5>Toàn sàn</h5>
                                    </div>
                                    <div className={cx('right')}>
                                        <div className={cx('discount')}>
                                            Giảm <span>45K</span>
                                        </div>
                                        <div className={cx('condition')}>
                                            ĐH tối thiểu: <span> 120.000đ</span>
                                        </div>
                                        <div className={cx('note')}>
                                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                                            <span>...  Xem chi tiết</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bot')}>
                                    <div className={cx('expiry')}>
                                    <FontAwesomeIcon 
                                        icon={faClockRotateLeft} 
                                        className={cx('clock-icon')}
                                    />
                                    HSD: <span>30/11</span>
                                    </div>
                                    <div className={cx('promotion')}>
                                        #Lưu trên banner
                                    </div>
                                    <div className={cx('action')}>
                                        <Link to="/banner">Đến Banner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('voucher-item')}>
                            <div className={cx('cut')}>
                                <div className={cx('top')}>
                                    <div className={cx('left')}>
                                        <img src={lazada}  />
                                        <h5>Toàn sàn</h5>
                                    </div>
                                    <div className={cx('right')}>
                                        <div className={cx('discount')}>
                                            Giảm <span>45K</span>
                                        </div>
                                        <div className={cx('condition')}>
                                            ĐH tối thiểu: <span> 120.000đ</span>
                                        </div>
                                        <div className={cx('note')}>
                                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                                            <span>...  Xem chi tiết</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bot')}>
                                    <div className={cx('expiry')}>
                                    <FontAwesomeIcon 
                                        icon={faClockRotateLeft} 
                                        className={cx('clock-icon')}
                                    />
                                    HSD: <span>30/11</span>
                                    </div>
                                    <div className={cx('promotion')}>
                                        #Lưu trên banner
                                    </div>
                                    <div className={cx('action')}>
                                        <Link to="/banner">Đến Banner</Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <Link to="/xem_all">Xem tất cả...</Link>
                </div>
            </div>


        </div>
    )
}

export default home;
