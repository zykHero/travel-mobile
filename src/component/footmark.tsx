import React, { FC } from 'react'
import { Tabs , Button } from 'antd-mobile'
import {
  Route,
  useNavigate,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom';
const Footmark: FC =()=> {
  const navigate =useNavigate();
  const addFootmark = ()=>{
    navigate('/add-footmark');
  }
  return (
    <div>
        <Button color='primary' fill='solid' onClick={()=>{addFootmark()}}>添加足迹</Button>
    </div>
    
    // 按钮
    //地图
  );
}

export {Footmark}