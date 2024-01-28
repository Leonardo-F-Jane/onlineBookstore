import { Col, Row } from "antd"
import { CSSProperties } from "react"

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

  export default DecorateGrid