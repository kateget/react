import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./index.scss";

interface NavProps {
    label_zh: string;
    label_en: string;
    link: string;
}

const navList: NavProps[] = [
    {
        label_zh: "首页",
        label_en: "HOME",
        link: "/home",
    },
    {
        label_zh: "案例中心",
        label_en: "CASE",
        link: "/home",
    },
    {
        label_zh: "规划·设计",
        label_en: "DESIGN",
        link: "/home",
    },
    {
        label_zh: "生产·安装",
        label_en: "PRODUCE",
        link: "/home",
    },
    {
        label_zh: "解决方案",
        label_en: "SOLUTIONS",
        link: "/home",
    },
    {
        label_zh: "荣誉资质",
        label_en: "HONOR",
        link: "/home",
    },
    {
        label_zh: "新闻资讯",
        label_en: "NEWS",
        link: "/home",
    },
    {
        label_zh: "荣誉客户",
        label_en: "CLIENT",
        link: "/home",
    },
    {
        label_zh: "关于友昆",
        label_en: "ABOUT",
        link: "/home",
    },
    {
        label_zh: "联系我们",
        label_en: "CONTACT",
        link: "/home",
    },
];

const Header = () => {
    const [menuCu, setMenuCu] = useState<string>("Home");
    const NavListDom = () => {
        const navigate = useNavigate();
        const handleClick = (val: NavProps) => {
            setMenuCu(val.label_en);
            navigate(val.link);
        };
        const dom = navList.map((val: NavProps) => (
            <li
                className={val.label_en === menuCu ? "active" : ""}
                key={val.label_en.toString()}
                onClick={() => handleClick(val)}
            >
                <span className="nav-li-zh">{val.label_zh}</span>
                <span className="nav-li-en">{val.label_en}</span>
            </li>
        ));
        return <ul className="dis_flex nav_ul">{dom}</ul>;
    };
    useEffect(() => {
        // setMenuCu("Home");
    }, []);
    return (
        <div className={`nav dis_flex ${menuCu}`}>
            <div className="logo">
                <img src={require("../../assets/home/logo.jpg")} alt="logo" />
                <p className="logo-text">华润集团·万科集团战略供应商</p>
            </div>
            <div className="nav-content">
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
                <NavListDom />
            </div>
        </div>
    );
};

export default Header;
