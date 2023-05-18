import React, { FC } from 'react'
import { List, Button,Avatar,NavBar } from 'antd-mobile'
import { SetOutline } from 'antd-mobile-icons'
import {
  Route,
  useNavigate,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom';


const ModifyPassCode: FC =()=> {
    const backPage = () => {
      const navigate = useNavigate();
      navigate('/me');
    };
    return (
        <>
          <NavBar back='返回' onBack={backPage}>修改密码</NavBar>          
          <Button block color='primary' size='large' onClick={()=>{}}>确定</Button>
          <Button block size='large' onClick={()=>{ backPage() }}>取消</Button>
        </>
    );
}

export {ModifyPassCode}