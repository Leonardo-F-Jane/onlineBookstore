'use client'

import { newslist } from "@/common/newslist";
import { Button, List, Space } from "antd";
import { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined, RedoOutlined, ClockCircleOutlined } from '@ant-design/icons'
import React from "react";
import { useRouter } from "next/navigation"

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

const NewsList = () => {
  const router = useRouter();

  const PushRouter = (title: string) => {
    router.push(`/news/${title}`)
  }
  return <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
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
          title={<a onClick={() => { PushRouter(item.title) }}>{item.title}</a>}
          description={item.description}
        />
        {/* {item.content} */}
      </List.Item>
    )}
  />
}

const news = () => {
  return <div>
    <NewsList />
  </div>
}

export default news