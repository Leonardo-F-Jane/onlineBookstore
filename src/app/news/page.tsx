'use client'

import { newslist } from "@/common/newslist";
import { List, Space } from "antd";
import { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined, RedoOutlined, ClockCircleOutlined } from '@ant-design/icons'
import React from "react";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const NewsList = () => {
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
                    title={<a href={item.href}>{item.title}</a>}
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