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
import { CSSProperties, Dispatch, SetStateAction, memo, useRef, useState } from 'react'
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
  //const books = [...randbooks]
  const result: T[] = []; // 存放结果的数组

  while (result.length < 4 && books.length > 0) {
    const index = Math.floor(Math.random() * books.length); // 生成一个随机索引值
    if (!result.includes(books[index])) { // 判断该数字是否已经在结果数组中
      result.push(books[index]); // 将当前数字添加到结果数组中
      books.splice(index, 1); // 移除原始数组中对应位置上的数字，确保后面不会再次被选择
    }
  }
  return result
}

const BookList = memo(() => {
  let booklist: {
    name: string,
    url: string
    desc: string
  }[] = []
  category.map((c, id) =>
    c.subCategory.map((b) =>
      booklist = [...booklist, ...b.books]
    )
  )
  const [bookshelf, setBookshelf] = useState(getFourCards([...booklist]))
  return <div>
    {category.map((c, id) =>
      <div key={id}>
        <div className={home.title}>{c.name}</div>
        {/* <Row gutter={12}>
          <Col span={2}></Col>
          <Col span={20}> */}
        <DecorateGrid span={2} gutter={12}>
          <Row gutter={12}>
            {
              bookshelf.map((sc, id) =>
                <Col key={id} span={6} style={{ padding: '30px' }}>
                  <Card
                    hoverable
                    cover={<img alt={sc.name} src={sc.url} />}
                  >
                    <Meta title={sc.name} description={sc.desc} />
                  </Card>
                </Col>
              )}
            {/* </Row>
          </Col>
          <Col span={2}></Col> */}
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

  const [pictures, setPictures] = useState<Picture[]>(getFourCards([...randbooks]))

  return <div>
    <div>
      <Popover content={categoryContent}>
        <Button type='link' onClick={() => { router.push('/') }}>首页</Button>
        <Button type='link' onClick={() => { router.push('/contact') }}>商品展示</Button>
      </Popover>
      <Button type='link' onClick={() => { router.push('/contact') }}>联系我们</Button>
    </div>
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
    {/* <Row style={{ minWidth: '1100px' }} gutter={12}>
      <Col span={1}></Col>
      <Col span={22}>
        <Row gutter={12}>
          <Col span={12} style={{ overflow: 'hidden' }}>
            <CarouselImage />
          </Col>
          <Col span={12}>
            <RandomPicture result={pictures} />
          </Col>
        </Row>
      </Col>
      <Col span={1}>
        <ChangePicture setPictures={setPictures} />
      </Col>
    </Row> */}
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