'use client'

import { Breadcrumb, Card, Col, Row, Space } from "antd"
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { Books, category } from "@/common/category";
import DecorateGrid from "@/app/components/grid";
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons'
import buuk from './buuk.module.css'
//import Swiper from "swiper";
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from "swiper/modules";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Book = ({ params }: { params: { id: string } }) => {
  SwiperCore.use([Autoplay, Navigation])
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  useEffect(
    () => {
      const id = setInterval(
        () => { book?.pictures }, 3000
      )
      return () => { clearInterval(id) }
    })

  const bookName = decodeURI(params.id)

  const [book, setBook] = useState<Books>()
  const [picture, setPicture] = useState<string[]>()
  const [classA, setClassA] = useState('')
  const [classB, setClassB] = useState('')

  useEffect(
    () => {
      for (const c of category) {
        for (const sc of c.subCategory) {
          for (const b of sc.books) {
            if (bookName == b.name) {
              setBook(b)
              setPicture(b.pictures)
              setClassA(c.name)
              setClassB(sc.name)
              break
            }
          }
        }
      }
    }, [])


  // useEffect(() => {
  //   // 配置swiper播放 配置项都写这里面
  //   new Swiper('.swiper-container', {
  //     loop: true,
  //     autoplay: {
  //       delay: 3000,
  //       stopOnLastSlide: false,
  //       disableOnInteraction: true,
  //       },
  //     pagination: {
  //       el: '.swiper-pagination', // 分页器元素
  //       clickable: true // 可点击切换
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     }
  //   })
  // }, [])

  return <div>
    <Breadcrumb
      separator=">"
      items={[
        {
          title: <HomeOutlined />,
          href: '/',
        },
        {
          title: '商品展示',
          href: '/category',
        },
        {
          title: `${classA}`,
          href: '/category',
        },
        {
          title: `${classB}`,
          href: '/category',
        },
        {
          title: bookName,
        },
      ]}
    />
    {/* <p>Post: {bookName}</p> */}
    <DecorateGrid span={2} gutter={12}>
      <Row style={{ width: '100%' }}>
        <Col span={12}>
          <Space style={{ width: '100%', justifyContent: 'center', position: 'relative' }}>
            <div style={{ overflow: 'hidden' }}>
              <Swiper
                autoplay
                loop
                navigation={{ prevEl: `.${buuk.prev}`, nextEl: `.${buuk.next}` }}
                modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                style={{ display: 'inline-flex', width: '400px', alignItems: 'center' }} >
                {picture?.map((p, id) =>
                  <SwiperSlide key={id}>
                    <img src={p} width={400}></img>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </Space>
          <Space style={{ width: '100%', justifyContent: 'center' }}>
            <Space style={{ width: '320px', position: 'relative' }}>
              <CaretLeftOutlined className={buuk.prev} />
              <Swiper
                modules={[Thumbs]}
                watchSlidesProgress
                slidesPerView={4}
                freeMode={true}
                onSwiper={setThumbsSwiper}
                style={{ display: 'inline-flex', width: '320px', alignItems: 'center' }}
              >
                {
                  book?.pictures.map((b, id) =>
                    <SwiperSlide style={{ width: '25%' }} key={id}>
                      <img src={b} width={70}></img>
                    </SwiperSlide>
                  )
                }
              </Swiper>
              <CaretRightOutlined className={buuk.next} />
            </Space>
          </Space>
        </Col>
        <Col span={12}>
          <h2>{bookName}</h2>
          <p>{book?.detail}</p>
        </Col>
      </Row>
    </DecorateGrid>
    <Row gutter={12}>
      <Col span={2} />
      <Col span={20}>
        <Card title='产品详情' bordered={false} style={{ width: '100%', textAlign: 'center' }}>
          {/* <div style={{textAlign: 'center'}}>产品详情</div> */}
          <img style={{ width: '100%' }} src={book?.long}></img>
        </Card>
      </Col>
      <Col span={2} />
    </Row>
  </div>
}

export default Book