import React, { Children, useState } from 'react';
import { Layout, Menu, MenuProps, MenuTheme } from 'antd';
import { Link, RouteObject } from 'react-router-dom';
import { ItemType } from 'antd/es/menu/hooks/useItems';

const { Header } = Layout;

interface NavbarProps {
  routeObj: RouteObject[];
}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const getRouteDom = (item: RouteObject) => {
  return !item.children ? <Link to={item.path || ''}>{item.id}</Link> : item.id;
};

const getItemDom = (routeObj: RouteObject[]): MenuItem[] => {
  const navDom = routeObj.filter((dom: RouteObject) => dom.id);
  return navDom.map((item: RouteObject, index) => {
    return getItem(
      getRouteDom(item),
      index,
      '',
      item.children ? getItemDom(item.children as RouteObject[]) : undefined,
    ) as MenuItem;
  });
};

const Navbar: React.FC<NavbarProps> = ({ routeObj }: NavbarProps) => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const item = getItemDom(routeObj);
  return (
    <Layout className="layout">
      <Header>
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['1']}
          mode={'horizontal'}
          theme={theme}
          items={item}
        />
      </Header>
    </Layout>
  );
};

export default Navbar;
