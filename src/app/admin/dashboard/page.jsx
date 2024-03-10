
'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

export default function Dashboard() {
  return (
   
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HiChartPie}>
            Home
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="Shop Products">
            <Sidebar.Item href="#">Product</Sidebar.Item>
            <Sidebar.Item href="#">Inventary</Sidebar.Item>
            <Sidebar.Item href="#">Category</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse icon={HiShoppingBag} label="Orders">
            <Sidebar.Item href="#">Orders</Sidebar.Item>
            <Sidebar.Item href="#">Abandoned Carts</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiInbox}>
            Review
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href=""> Contacts</Sidebar.Item>
          <Sidebar.Item href=""> Marketing & SEO</Sidebar.Item>
          <Sidebar.Item href=""> Analytics & Reports</Sidebar.Item>
          <Sidebar.Item href=""> Billing and Payments</Sidebar.Item>
          <Sidebar.Item href="">Settings</Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
