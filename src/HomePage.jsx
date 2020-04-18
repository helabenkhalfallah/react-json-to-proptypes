import React, { useState } from 'react'
import './ant.less'
import {
  Button,
  Input,
  Layout,
  Row,
  Col,
  Typography,
} from 'antd'
import ValidatorUtils from './ValidatorUtils'

const {
  formatPropTypes,
  formatDefaultPropTypes,
  convertJsonToPropTypes,
} = ValidatorUtils

const {
  TextArea,
} = Input

const {
  Title,
} = Typography

const {
  Header,
  Content,
  Footer,
} = Layout


const AppHomePage = () => {
  const [sourceText, setSourceText] = useState()
  const [propTypeText, setPropTypeText] = useState()
  return (
    <>
      <Layout>
        <Header>
          <Row>
            <Col span={24}>
              <Title>
                Json to PropTypes
              </Title>
            </Col>
          </Row>
        </Header>
        <Content style={{
          marginTop: '1rem',
          marginRight: '1rem',
          marginLeft: '1rem',
        }}
        >
          <Row
            gutter={16}
            justify="center"
            align="middle"
          >
            <Col
              span={10}
            >
              <TextArea
                rows={25}
                value={sourceText}
                onChange={({ target: { value } }) => setSourceText(value)}
              />
            </Col>
            <Col
              span={2}
              style={{ padding: '0' }}
            >
              <Button
                type="primary"
                shape="round"
                onClick={() => {
                  const propTypes = convertJsonToPropTypes(sourceText)
                  const propsTypeTextDisplay = `
import PropTypes from 'prop-types'

// propsType (validation)
MyComponent.propTypes = ${formatPropTypes(propTypes[0])}

// default props
MyComponent.defaultProps = ${formatDefaultPropTypes(propTypes[1])}
                  `
                  setPropTypeText(propsTypeTextDisplay)
                }}
              >
                Convert
              </Button>
            </Col>
            <Col
              span={10}
            >
              <TextArea
                rows={25}
                value={propTypeText}
              />
            </Col>
          </Row>
        </Content>
        <Footer />
      </Layout>
    </>
  )
}

// propsType (validation)
AppHomePage.propTypes = {

}

// default props
AppHomePage.defaultProps = {

}

export default AppHomePage