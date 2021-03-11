import logo from './logo.svg';

import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu,Input,Typography } from 'antd';
import backimage from './Image/image1.png'
const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Text } = Typography;


function App() {
  return (
    <div>  
      <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
     <div className="logo" ></div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{float: 'right'}}>
        <Menu.Item key="1">About Us</Menu.Item>
        <Menu.Item key="2">Services</Menu.Item>
        <Menu.Item key="3">Buyer Login</Menu.Item>
        <Menu.Item key="4">Seller Login</Menu.Item>
        <Menu.Item key="5">Contact Us</Menu.Item>
        <Menu.Item key="6">Raise Request</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ backgroundImage: `url(${backimage})`,minHeight:'100vh'}} >
      <div  >
      <Search  style={{ padding: '30px 70px 10px 70px', marginTop: 64 }} placeholder="search for port"  enterButton />
      </div>
    </Content>
   
  </Layout>
            
    </div>
  );
}

export default App;
