'use client'

import { Button, Popover, Divider, Space, Carousel, Card, Flex, Typography, Row, Col } from 'antd'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { category } from '@/common/category'
import { recommend, randbooks } from '@/common/recommend'
import home from './home.module.css'
import { LeftOutlined, RightOutlined, RedoOutlined } from '@ant-design/icons'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { CarouselRef } from 'antd/es/carousel'

const categoryContent = () => {
  return <div>
    {
      category.map((c, id) =>
        [
          <div key={id}>
            <Space direction='vertical'>
              <Link href={'/category?c1=' + c.router}>{c.name}</Link>
              <Space>
                {c.subCategory.map((sc, id) =>
                  <Link key={id} href={`/category?c1=${c.router}&c2=${sc.router}`}>{sc.name}</Link>
                )}
              </Space>
            </Space>
          </div>
        ]
      ).reduce((a, b) =>
        [...a, <Divider key={'key' + a.length} type="vertical" />, ...b]
      )
    }
  </div>
}

const CarouselImage = () => {
  const ref = useRef<CarouselRef>()
  return <div>
    <div className={home.leftBlur} />
    <div className={home.rightBlur} />
    <LeftOutlined className={home.left} onClick={() => { ref.current?.prev() }} />
    <RightOutlined className={home.right} onClick={() => { ref.current?.next() }} />
    <Carousel   //@ts-ignore
      ref={ref} autoplay dotPosition={'top'} className={home.carousel}>

      {
        recommend.map((r, id) =>
          // <div className={home.carousel} key={id}>
          <div key={id} style={{ width: '100%' }}>
            <img src={r.url} alt={r.desc} style={{ width: '100%' }} />
          </div>
        )
      }
    </Carousel>
  </div>
}
type Picture = {
  url: string,
  desc: string
}
const RandomPicture = (props: {
  result: Picture[]
}) => {
  return <div>
    <Flex justify='center' style={{ minWidth: "500px" }} wrap='wrap'>
      {
        props.result.map((r, id) =>
          <div key={id} className={home.randomCard}>
            <Card hoverable bodyStyle={{ padding: 0, overflow: 'hidden' }}>
              <Flex justify="space-between">
                <img
                  style={{ width: '60%' }}
                  alt={r.desc}
                  src={r.url}
                  className={home.randomImg}
                />
                <Flex vertical align="flex-end" justify="space-between" style={{ margin: 8 }}>
                  <Typography.Title level={3}>
                    {r.desc}
                  </Typography.Title>
                </Flex>
              </Flex>
            </Card>
          </div>
        )
      }
    </Flex>
  </div>
}

const ChangePicture = (props: {
  setPictures: Dispatch<SetStateAction<Picture[]>>
}) => {
  return <Button style={{ height: 'fit-content', padding: 0 }}
    onClick={() => { props.setPictures(getFourCards()) }}>
    <div style={{ padding: 3, }}>
      <RedoOutlined />
      <div className={home.changePicture}>换一换</div>
    </div>
  </Button>
}
const getFourCards = () => {
  const books = [...randbooks]
  const result: Picture[] = []; // 存放结果的数组

  while (result.length < 4 && books.length > 0) {
    const index = Math.floor(Math.random() * books.length); // 生成一个随机索引值
    if (!result.includes(books[index])) { // 判断该数字是否已经在结果数组中
      result.push(books[index]); // 将当前数字添加到结果数组中
      books.splice(index, 1); // 移除原始数组中对应位置上的数字，确保后面不会再次被选择
    }
  }
  return result
}

const BookList = ()=>{
  
}

export default function Home() {
  const router = useRouter()

  const [pictures, setPictures] = useState<Picture[]>(getFourCards())

  return <div>
    <div>
      <Popover content={categoryContent}>
        <Button type='link' onClick={() => { router.push('/') }}>首页</Button>
        <Button type='link' onClick={() => { router.push('/contact') }}>商品展示</Button>
      </Popover>
      <Button type='link' onClick={() => { router.push('/contact') }}>联系我们</Button>
    </div>
    <Row style={{ minWidth: '1100px' }} gutter={12}>
      <Col span={1}></Col>
      <Col span={11} style={{ overflow: 'hidden', padding: 0 }}>
        <CarouselImage />
      </Col>
      <Col span={11}>
        <RandomPicture result={pictures} />
      </Col>
      <Col span={1}>
        <ChangePicture setPictures={setPictures} />
      </Col>
    </Row>
  </div>
}