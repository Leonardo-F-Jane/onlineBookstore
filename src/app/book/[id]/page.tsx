'use client'

import { Breadcrumb, Col, Row, Space } from "antd"
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { Books, category } from "@/common/category";
import DecorateGrid from "@/app/components/grid";
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons'
import buuk from './buuk.module.css'


const Book = ({ params }: { params: { id: string } }) => {

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
            <div className={buuk.carousel} style={{ overflow: 'hidden' }}>
              <div style={{ display: 'inline-flex', width: '400px', alignItems: 'center' }} className={buuk.animate}>
                {picture?.map((p, id) =>
                  <img key={id} src={p} width={400}></img>
                )}
                <img src={picture?.at(0)} width={400}></img>
              </div>
            </div>
          </Space>
          <Space style={{ width: '100%', justifyContent: 'center', position: 'relative' }}>
            <CaretLeftOutlined style={{ fontSize: '50px', position: 'absolute', left: '50px', top: '10px' }} />
            <Space style={{ width: '310px', overflow: 'hidden' }}>
              {
                book?.pictures.map((b, id) =>
                  <img key={id} src={b} width={70}></img>
                )
              }
            </Space>
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