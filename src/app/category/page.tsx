'use client'

import { books, category, subCategory } from "@/common/category"
import { Button } from "antd"
import { useState } from "react"

const Table = () => {
  const [classA, setClassA] = useState<books[]>([])
  const clickClass = (clazz: string) => {
    let tempClass: books[] = []
    console.log(clazz)
    category.map(c => {
      if (clazz == c.name) {
        c.subCategory.map((cs=>{
          tempClass = [...tempClass,...cs.books]
        }))
        setClassA(tempClass)
      }
      else{
        c.subCategory.map(cs=>{
          if (clazz == cs.name) {
            setClassA([...cs.books])
          }
        })
      }
    })
  }

  return <div>
    {category.map((c, id) =>
      <div key={id}>
        <Button type="link" onClick={() => {clickClass(c.name)}}>{c.name}</Button>
        {c.subCategory.map((sc, id) =>
          <div key={id}>
            <Button type="link" onClick={()=>{clickClass(sc.name)}}>{sc.name}</Button>
          </div>
        )}
      </div>
    )}
    <div>
      {classA.map((c,id)=>
        <div key = {id}>
          {c.name}
        </div>
      )}
    </div>
  </div>
}

const test = () => {
  return <div>
    <Table />
  </div>
}

export default test