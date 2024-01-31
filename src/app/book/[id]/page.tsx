'use client'

import { Breadcrumb, Col, Row, Space } from "antd"
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { Books, category } from "@/common/category";
import DecorateGrid from "@/app/components/grid";
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons'
import buuk from './buuk.module.css'
//import Swiper from "swiper";
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore  from 'swiper';
import { Autoplay } from "swiper/modules";
import { FreeMode, Navigation,Thumbs } from "swiper/modules";

const Book = ({ params }: { params: { id: string } }) => {
  //SwiperCore.use([Autoplay])
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
    <p>Post: {bookName}</p>
    <DecorateGrid span={2} gutter={12}>
      <Row style={{ width: '100%' }}>
        <Col span={12}>
          <Space style={{ width: '100%', justifyContent: 'center', position: 'relative' }}>
            <div style={{ overflow: 'hidden' }}>
              <Swiper
              navigation={true}
                modules={[FreeMode, Navigation,Thumbs]} thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                style={{ display: 'inline-flex', width: '400px', alignItems: 'center' }} >
                {picture?.map((p, id) =>
                  <SwiperSlide key={id}>
                    <img src={p} width={400}></img>
                  </SwiperSlide>
                )}
                {/* <img src={picture?.at(0)} width={400}></img> */}
              </Swiper>
            </div>
          </Space>
          <Space style={{ width: '100%', justifyContent: 'center', position: 'relative' }}>
            <CaretLeftOutlined style={{ fontSize: '50px', position: 'absolute', left: '50px', top: '10px' }} />
            {/* <Space style={{ width: '310px', overflow: 'hidden' }}> */}
              <Swiper 
                modules={[FreeMode, Navigation,Thumbs]}
                watchSlidesProgress
                slidesPerView={4}
                freeMode={true}
                onSwiper={setThumbsSwiper}
                >
                {
                  book?.pictures.map((b, id) =>
                    <SwiperSlide style={{width: '25%'}} key={id}>
                      <img src={b} width={70}></img>
                    </SwiperSlide>
                  )
                }
              </Swiper>
            {/* </Space> */}
            <CaretRightOutlined style={{ fontSize: '50px', position: 'absolute', right: '50px', top: '10px' }} />
          </Space>
        </Col>
        <Col span={12}>
          这是文本
        </Col>
      </Row>
    </DecorateGrid>
  </div>
}

export default Book