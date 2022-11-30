 import React from 'react'
 import { Button, Menu, Typograpy, Avatar} from 'antd'
 import { Link } from 'react-router-dom' 
 import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
 
 const Navbar = () => {
   return (
     <div className="nav-container">
        <div className="logo-container">
            <Avatar />
            <Typograpy.Title level={2} className="logo">
                <Link to="/">Crypto</Link>
            </Typograpy.Title>
            {/* <Button className="menu-control-container">

            </Button> */}
        </div>
       
     </div>
   )
 }
 
 export default Navbar
 