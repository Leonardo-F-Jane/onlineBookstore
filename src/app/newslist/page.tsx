'use client'

import { newslist } from "@/common/newslist";
import { Button, List, Space } from "antd";
import { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined, RedoOutlined, ClockCircleOutlined } from '@ant-design/icons'
import React from "react";
import { useRouter } from "next/navigation"
import DecorateGrid from "../components/grid";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

const NewsList = () => {
  const router = useRouter();

  return <List
    itemLayout="vertical"
    size="large"
    pagination={{
      pageSize: 5,
    }}
    dataSource={newslist}
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={ClockCircleOutlined} text={item.date} />
        ]}
        extra={
          <img
            width={150}
            alt="logo"
            src={item.image}
          />
        }
      >
        <List.Item.Meta
          // avatar={<Avatar src={item.avatar} />}
          title={<a onClick={() => { router.push(`/news/${item.title}`) }}>{item.title}</a>}
          description={item.description}
        />
        {/* {item.content} */}
      </List.Item>
    )}
  />
}

const news = () => {
  return <DecorateGrid style={{ minWidth: '1100px' }} span={2} gutter={12}>
    <div style={{width:'100%'}}>
    <NewsList />
    </div>
  </DecorateGrid>
}

export default news