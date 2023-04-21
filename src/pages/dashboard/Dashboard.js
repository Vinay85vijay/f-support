// import { Card, Space, Statistic, Table, Typography } from "antd";

// import { AppstoreOutlined, CarOutlined, DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined} from "@ant-design/icons";
// import { green } from "@mui/material/colors";
// import { Outlet } from "react-router-dom";

// function Dashboard() {
//   return (
//     <div>
//       <Typography.Title level={4}>Dashboard</Typography.Title>
//       <Space direction="horizontal">

//         <DashboardCard icon={<ShoppingCartOutlined 
//          style={{
//           color:"green",
//         backgroundColor:"rgba(0,255,0.25)" ,
//          borderRadius:20,
//          fontSize:24,
//          padding:8
       
  
//       }}/>} title={"Sales"} value={1234} />
//         <DashboardCard icon={<ShoppingOutlined   style={{
//           color:"green",
//         backgroundColor:"rgba(0,255,255,0.25)" ,
//          borderRadius:20,
//          fontSize:24,
//          padding:8
       
  
//       }} />} title={"Purchase"} value={1221} />
        
     
//         <DashboardCard icon={<CarOutlined    style={{
//           color:"red",
//         backgroundColor:"rgba(255,0,0,0.25)" ,
//          borderRadius:20,
//          fontSize:24,
//          padding:8
       
  
//       }}/>} title={"Logistics"} value={1233} />
//       </Space>
//       <Outlet />
     
//     </div>
//   );
// }
// function DashboardCard({ title, value,icon }) {
//   return (
//     <Card>
//       <Space direction="horizontal">
//         {icon}
//         <Statistic title={title} value={value} />
//       </Space>
//     </Card>
//   );
// }


// export default Dashboard;


import React from 'react'

function Dashboard() {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
