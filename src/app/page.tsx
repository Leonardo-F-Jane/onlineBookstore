'use client'

import { Button, Popover, Divider, Space, Carousel, Card, Flex, Typography, Row, Col, List, Avatar } from 'antd'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { category } from '@/common/category'
import { recommend, randbooks } from '@/common/recommend'
import { newslist } from '@/common/newslist'
import home from './home.module.css'
import { LeftOutlined, RightOutlined, RedoOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { CSSProperties, Dispatch, SetStateAction, memo, useEffect, useRef, useState } from 'react'
import { CarouselRef } from 'antd/es/carousel'
import Meta from 'antd/es/card/Meta'

type DecorateGridProps = {
  span?: number,
  leftSpan?: number,
  rightSpan?: number,
  gutter: number,
  children: JSX.Element,
  rightAction?: JSX.Element,
  leftAction?: JSX.Element,
  style?: CSSProperties
}
const DecorateGrid = (props: DecorateGridProps) => {
  let { leftSpan, rightSpan, span, gutter, rightAction, leftAction, children } = props
  if (span) {
    leftSpan = span
    rightSpan = span
  }
  leftSpan = leftSpan ?? 0
  rightSpan = rightSpan ?? 0
  return <Row gutter={gutter} style={props.style}>
    <Col span={leftSpan}>
      {leftAction && leftAction}
    </Col>
    <Col span={24 - leftSpan - rightSpan}>
      <Row gutter={gutter}>
        {
          children
        }
      </Row>
    </Col>
    <Col span={rightSpan}>
      {rightAction && rightAction}
    </Col>
  </Row>
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
  name: string
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
              <Flex>
                <img
                  style={{ width: '60%' }}
                  alt={r.desc}
                  src={r.url}
                  className={home.randomImg}
                />
                {/* <Flex vertical align="flex-end" justify="space-between" style={{ margin: 8 }}>
                  <Typography.Title level={3}>
                    {r.desc}
                  </Typography.Title>
                </Flex> */}
                <Meta title={r.name} description={r.desc} style={{ width: '40%', padding: '10px' }}></Meta>
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
    onClick={() => { props.setPictures(getFourCards([...randbooks])) }}>
    <div style={{ padding: 3, }}>
      <RedoOutlined />
      <div className={home.changePicture}>换一换</div>
    </div>
  </Button>
}
const getFourCards = function <T>(books: T[]) {
  const booksCopy = [...books]
  const result: T[] = []; // 存放结果的数组
  // return books.slice(0, 4)

  while (result.length < 4 && booksCopy.length > 0) {
    const index = Math.floor(Math.random() * booksCopy.length); // 生成一个随机索引值
    if (!result.includes(booksCopy[index])) { // 判断该数字是否已经在结果数组中
      result.push(booksCopy[index]); // 将当前数字添加到结果数组中
      booksCopy.splice(index, 1); // 移除原始数组中对应位置上的数字，确保后面不会再次被选择
    }
  }
  return result
}

const BookList = memo(() => {
  const [bookshelf, setBookshelf] = useState<{ name: string, books: Picture[] }[]>([])
  useEffect(() => {
    setBookshelf(category.map(c => {
      return {
        name: c.name,
        books: getFourCards(c.subCategory.reduce((a: Picture[], b) => [...a, ...b.books], []))
      }
    }))
  }, [])
  return <div>
    {
    bookshelf.map((c, id) =>
      <div key={id}>
        <div className={home.title}>{c.name}</div>
        <DecorateGrid span={2} gutter={12}>
          <Row gutter={12}>
            {
              c.books.map((sc, id) =>
                <Col key={id} span={6} style={{ padding: '30px' }}>
                  <Card
                    hoverable
                    cover={<img alt={sc.name} src={sc.url} />}
                  >
                    <Meta title={sc.name} description={sc.desc} />
                  </Card>
                </Col>
              )}
          </Row>
        </DecorateGrid>
      </div>
    )}
  </div>
})

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
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <ClockCircleOutlined />
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

export default function Home() {
  const router = useRouter()

  const [pictures, setPictures] = useState<Picture[]>([])

  useEffect(() => {
    setPictures(getFourCards(randbooks))
  }, [])

  return <div>
    <DecorateGrid style={{ minWidth: '1100px' }} span={1} gutter={12} rightAction={
      <ChangePicture setPictures={setPictures} />
    }>
      <Row gutter={12}>
        <Col span={12} style={{ overflow: 'hidden' }}>
          <CarouselImage />
        </Col>
        <Col span={12}>
          <RandomPicture result={pictures} />
        </Col>
      </Row>
    </DecorateGrid>
    <Divider style={{ padding: '20px' }}>我是分隔线</Divider>
    <BookList />

    <Divider style={{ padding: '20px' }}>我是分隔线</Divider>
    <DecorateGrid span={2} gutter={12} leftAction={<ChangePicture setPictures={setPictures} />}>
      <Row gutter={12}>
        <Col span={12}><RandomPicture result={pictures} /></Col>
        <Col span={12}><NewsList /></Col>
      </Row>
    </DecorateGrid>
    <Divider style={{ padding: '20px' }}>我是分隔线</Divider>
    <p>合作出版社</p>
    <Divider style={{ padding: '20px' }}>我是分隔线</Divider>
    <p>关于我们</p>
    <Divider style={{ padding: '20px' }}>我是分隔线</Divider>
    <p>联系我们</p>
  </div>
}