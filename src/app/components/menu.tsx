'use client'

import { Button, Divider, Popover, Space } from 'antd'
import { category } from '@/common/category'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const categoryContent = () => {
  return <div>
    {
      category.map((c, id) => [
        <div key={id}>
          <Space direction='vertical'>
            <Link href={'/category?c1=' + c.router}>{c.name}</Link>
            <Space>
              {c.subCategory.map((sc, id) =>
                <Link key={id} href={`/category?c1=${c.router}&c2=${sc.router}`}>{sc.name}</Link>
              )}
            </Space>
          </Space>
        </div>]
      ).reduce((a, b) =>
        [...a, <Divider key={'key' + a.length} type="vertical" />, ...b]
      )
    }
  </div>
}

const Menu = () => {
  const router = useRouter()
  const crtPathName = usePathname()
  const MenuItem = (props: { pathName: string, menuName: string }) => {
    return <Button
      style={crtPathName == props.pathName ? { color: 'red' } : { color: 'black' }}
      type='link'
      onClick={() => { router.push(props.pathName) }}>
      {props.menuName}</Button>
  }
  return <div>
    <MenuItem pathName='/' menuName='首页' />
    <MenuItem pathName='/newslist' menuName='资讯' />
    <Popover content={categoryContent}>
    <Button
      style={crtPathName == '/category' ? { color: 'red' } : { color: 'black' }}
      type='link'
      onClick={() => { router.push('/category') }}>
      商品展示</Button>      {/* <MenuItem pathName='/contact' menuName='商品展示' /> */}
    </Popover>
    <MenuItem pathName='/about' menuName='关于我们' />
    <MenuItem pathName='/contact' menuName='联系我们' />
  </div>
}

export default Menu