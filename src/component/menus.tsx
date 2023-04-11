import React, { FC } from 'react'
import { NavBar, TabBar } from 'antd-mobile';
import {
  Route,
  useNavigate,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom';
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

const Menus: FC = () => {
  const navigate = useNavigate();//跳转
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  };

  const tabs = [
    {
      key: '/footmark',
      title: '足迹',
      icon: <AppOutline />,
    },
    {
      key: '/diary',
      title: '日记',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/me',
      title: '我的',
      icon: <UserOutline />,
    },
  ];

  return (
    <TabBar safeArea activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export {Menus};