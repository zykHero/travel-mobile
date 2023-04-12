import { FC } from 'react'
import { TabBar } from 'antd-mobile';
import {
  useNavigate,
  useLocation,
} from 'react-router-dom';
import {
  AppOutline,
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