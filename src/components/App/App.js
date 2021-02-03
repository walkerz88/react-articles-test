import React from 'react';
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from 'antd';
import Articles from '../Articles';
import styles from './styles';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  render () {
    return (
      <Layout style={styles.layout}>
        <Header style={styles.header}>
          <div style={styles.logo}>
            W.Articles
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">Latest</Menu.Item>
          </Menu>
        </Header>
        <Content style={styles.inner}>
          <Breadcrumb style={styles.breadcrumbs}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Articles</Breadcrumb.Item>
            <Breadcrumb.Item>Latest</Breadcrumb.Item>
          </Breadcrumb>
          <div style={styles.content}>
            <Articles />
          </div>
        </Content>
        <Footer style={styles.footer}>Walarticles ©2021</Footer>
      </Layout>
    );
  }
}

export default App;
