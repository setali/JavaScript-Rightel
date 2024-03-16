import React from 'react'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  DashboardOutlined
} from '@ant-design/icons'
import { Menu as AntMenu } from 'antd'
import { Link } from 'react-router-dom'

function getItem (label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}

const items = [
  getItem(<Link to='/'>داشیورد</Link>, 'dashboard', <DashboardOutlined />),
  getItem('مقالات', 'posts', <MailOutlined />, [
    getItem(<Link to='/posts'>لیست</Link>, 'posts-1'),
    getItem('افزودن مقاله', 'posts-2')
  ]),

  getItem('کاربران', 'people', <MailOutlined />, [
    getItem(<Link to='/people'>لیست</Link>, 'people-1'),
    getItem('افزودن کاربر', 'people-2')
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [
      getItem('Option 7', '7'),
      getItem('Option 8', '8')
    ])
  ]),
  {
    type: 'divider'
  },
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ]),
  getItem(
    'Group',
    'grp',
    null,
    [getItem('Option 13', '13'), getItem('Option 14', '14')],
    'group'
  )
]
export default function Menu () {
  const onClick = e => {
    console.log('click ', e)
  }

  return (
    <AntMenu
      onClick={onClick}
      style={{
        width: '100%'
      }}
      defaultSelectedKeys={['dashboard']}
      defaultOpenKeys={['posts']}
      mode='inline'
      items={items}
    />
  )
}
