import "./index.less";
import { useNavigate } from "react-router-dom";
import React from "react";

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
        label_en: "test1",
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
        <div className="nav">
            {/* <image className="">logo</image> */}
            <NavListDom />
        </div>
    );
};

export default Header;
