'use client'

import { Books, category, SubCategory } from "@/common/category"
import { Button, Card, Col, Pagination, Row } from "antd"
import Meta from "antd/es/card/Meta"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction, memo, useState } from "react"
import DecorateGrid from "../components/grid"

const Table = () => {
  const [classA, setClassA] = useState<Books[]>([])
  const [total, setTotal] = useState(0)
  const [curPageBooks, setCurPageBooks] = useState<Books[]>([])
  const ClassAButton = memo((props: {
    setCurPageBooks: Dispatch<SetStateAction<Books[]>>,
    setClassA: Dispatch<SetStateAction<Books[]>>,
    setTotal: Dispatch<SetStateAction<number>>,
    subCategory: SubCategory[],
    name: string
  }) => {
    const [books] = useState(props.subCategory.reduce((a: Books[], b) => [...a, ...b.books], []))
    return <Button type="link" onClick={() => {
      props.setCurPageBooks(books.slice(0, 8))
      props.setClassA(books)
      props.setTotal(books.length)
    }}>{props.name}</Button>
  })
  const ClassBButton = memo((props: {
    setCurPageBooks: Dispatch<SetStateAction<Books[]>>,
    setClassA: Dispatch<SetStateAction<Books[]>>,
    setTotal: Dispatch<SetStateAction<number>>,
    books: Books[],
    name: string
  }) => {
    const [books] = useState(props.books)
    return <Button type="link" onClick={() => {
      props.setCurPageBooks(books.slice(0, 8))
      props.setClassA(props.books)
      props.setTotal(books.length)
    }}>{props.name}</Button>
  })
  const clickClass = (clazz: string) => {
    let tempClass: Books[] = []
    //console.log(clazz)
    for (const c of category) {
      console.log(clazz, c.name)
      if (clazz == c.name) {
        c.subCategory.map((cs => {
          tempClass = [...tempClass, ...cs.books]
        }))
        setClassA(tempClass)
        setTotal(tempClass.length)
        break
      } else {
        for (const cs of c.subCategory) {
          if (clazz == cs.name) {
            tempClass = [...cs.books]
            break
          }
        }
        setClassA(tempClass)
        setTotal(tempClass.length)
      }
    }
  }

  const onChange = (page: number, pageSize: number) => {
    console.log(page)
    console.log(pageSize)
    setCurPageBooks(classA.slice((page - 1) * pageSize, page * pageSize))
  }

  const router = useRouter()

  const cardOnChange = (bookName: string) => {
    router.push(`/book/${bookName}`)
  }

  return <div>
    {category.map((c, id) =>
      <div key={id}>
        <ClassAButton setTotal={setTotal} setClassA={setClassA} name={c.name} subCategory={c.subCategory} setCurPageBooks={setCurPageBooks}></ClassAButton>
        {/* <Button type="link" onClick={() => { clickClass(c.name) }}>{c.name}</Button> */}
        {c.subCategory.map((sc, id) =>
          <div key={id}>
            <ClassBButton setTotal={setTotal} setClassA={setClassA} name={sc.name} books={sc.books} setCurPageBooks={setCurPageBooks}></ClassBButton>
            {/* <Button type="link" onClick={() => { clickClass(sc.name) }}>{sc.name}</Button> */}
          </div>
        )}
      </div>
    )}
    <DecorateGrid span={2} gutter={12}>
      <Row>
        {curPageBooks.map((c, id) =>
          <Col span={6} key={id}>
            <Card
              hoverable
              cover={<img alt={c.name} src={c.url} />}
              onClick={() => { cardOnChange(c.name) }}>
              <Meta title={c.name} description={c.desc} />
            </Card>
          </Col>
        )}
      </Row>
    </DecorateGrid>
    <Pagination showQuickJumper defaultPageSize={8} defaultCurrent={1} total={total} onChange={onChange} />
  </div>
}

const test = () => {
  return <div>
    <Table />
  </div>
}

export default test