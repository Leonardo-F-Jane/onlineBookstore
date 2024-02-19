'use client'

import Doc from "@/app/components/makedown"
import { newslist } from "@/common/newslist"

const News = ({ params }: { params: { id: string } }) => {
  const title = decodeURI(params.id)
  const news = newslist.find((n)=>n.title == title)
  return <div>
    {title}
    <Doc sourceMd={news!.content}></Doc>
  </div>
}
export default News 