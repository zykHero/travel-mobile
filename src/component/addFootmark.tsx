import { FC, RefObject,useState } from 'react'
import { NavBar,Space, Form, Input, DatePicker, Button, Cascader } from 'antd-mobile'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs'
import type { DatePickerRef } from 'antd-mobile/es/components/date-picker'
import {AreaData} from '../core/AreaData';


const SelectArea = ()=> {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  const options = AreaData;
  return (
    <Space align='center'>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择位置
      </Button>
      <Cascader
        options={options}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        value={value}
        onConfirm={setValue}
        onSelect={(val, extend) => {
          console.log('onSelect', val, extend.items)
        }}
      >
        {items => {
          if (items.every(item => item === null)) {
            return '未选择'
          } else {
            return items.map(item => item?.label ?? '未选择').join('-')
          }
        }}
      </Cascader>
    </Space>
  )
}


const AddFootmark: FC = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate('/footmark');
  };

  const submitValue = () => {

  }
  return (
    <>
      <NavBar back='返回' onBack={backPage}>添加足迹</NavBar>
      <Form name='form' onFinish={submitValue}
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.Item name='name' label='姓名' rules={[{ required: true }]}>
          <Input placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item name='address' label='地址' rules={[{ required: true }]}>
          <SelectArea />
        </Form.Item>

        {/* <Form.Item name='address' label='地址' help='详情地址'>
          <Input placeholder='请输入地址' />
        </Form.Item> */}
        <Form.Item
          name='time'
          label='时间'
          trigger='onConfirm'
          onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
            datePickerRef.current?.open()
          }}
        >
          <DatePicker>
            {value => value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期'}
          </DatePicker>
        </Form.Item>
      </Form>
    </>

  );
}

export { AddFootmark }