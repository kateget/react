import { useNavigate } from "react-router-dom";
import React from "react";
import "../common/common.scss";
import "./index.scss";

interface NavProps {
    label_zh: string;
    label_en: string;
    link: string;
}

const navList: NavProps[] = [
    {
        label_zh: "首页",
        label_en: "header",
        link: "/home",
    },
    {
        label_zh: "案例中心",
        label_en: "test",
        link: "/home",
    },
];

const NavListDom = () => {
    const navigate = useNavigate();
    const handleClick = (val) => {
        navigate(val.link);
    };
    const dom = navList.map((val: NavProps) => (
        <li key={val.label_en.toString()} onClick={() => handleClick(val)}>
            <span>{val.label_zh}</span>
            <span>{val.label_en}</span>
        </li>
    ));
    return <ul>{dom}</ul>;
};

const Header = () => {
    return (
        <div className="nav dis_flex">
            <div className="logo">
                <img src={require("../../assets/home/logo.jpg")} alt="logo" />
            </div>
            <div>
                <div className="nav_title dis_flex">
                    <span className="nav_title_text">
                        始于1998年 专注标识系统一站式解决方案
                    </span>
                    <p className="dis_flex tel">
                        <img
                            src={require("../../assets/home/tel.jpg")}
                            alt="电话"
                        ></img>
                        <span> 400-8879-739</span>
                    </p>
                </div>
                <div>
                    <NavListDom />
                </div>
            </div>
        </div>
    );
};

export default Header;
