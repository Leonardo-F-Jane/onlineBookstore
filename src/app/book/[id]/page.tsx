'use client'

import { Breadcrumb, Col, Row } from "antd"
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { Books, category } from "@/common/category";
import DecorateGrid from "@/app/components/grid";

const Book = ({ params }: { params: { id: string } }) => {
  const bookName = decodeURI(params.id)

  const [book, setBook] = useState<Books>()
  const [classA, setClassA] = useState('')
  const [classB, setClassB] = useState('')

  useEffect(
    () => {
      for (const c of category) {
        for (const sc of c.subCategory) {
          for (const b of sc.books) {
            if (bookName == b.name) {
              setBook(b)
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
      <Row style={{width: '100%'}}>
        <Col span={12}>
          <img src = {`${book?.pictures.slice(0,1)}`} width={400}></img>
          {
            book?.pictures.map((p,id)=>
            <img key = {id} src = {p} width ={70}></img>
            )
          }
        </Col>
        <Col span={12}>
          这是文本
        </Col>
      </Row>
    </DecorateGrid>
  </div>
}

export default Book