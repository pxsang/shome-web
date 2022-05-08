import React, { Component, Fragment } from "react";
import Link from "next/link";
import Router from "next/router";
import dateformat from "dateformat";
import { Breadcrumb, Row, Col, Button, Spin, Alert } from "antd";
import Layout from "../../components/Layout";
import SEOMeta from "../../components/SEOMeta";
import Card from "../../components/Card";
import { INTERIOR_DESIGN_SLUGS, ROUTE } from "../../constants/route";
import fetcher from "../../helpers/fetcher";

class News extends Component {
  state = {
    news: this.props.news || [],
    paging: this.props.paging || { page: 1, per_page: 6 },
    isLoading: false,
  };

  _loadData = async () => {
    const newData = await fetcher.get("news", {
      data: this.state.paging,
    });

    setTimeout(() => {
      this.setState({
        news: this.state.news.concat(newData),
        isLoading: false,
      });
    }, 1000);
  };

  loadMore = async () => {
    this.setState(
      {
        isLoading: true,
        paging: {
          ...this.state.paging,
          page: this.state.paging.page + 1,
        },
      },
      () => this._loadData()
    );
  };

  render() {
    return (
      <>
        <SEOMeta
          key="seo"
          title="Tin tức"
          description="Chuyên tư vấn thiết kế và thi công nội thất căn hộ, nhà phố, biệt thự."
          url="tin-tuc"
        />
        <section>
          <Breadcrumb>
            <Breadcrumb.Item key="home">
              <Link href="/">
                <a>Trang chủ</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item key="news">
              <Link href={ROUTE.NEWS}>
                <a>Tin tức</a>
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </section>
        <section className="listing-container">
          <Row gutter={[32, 32]} className="listing-list">
            {this.state.news.map((item) => (
              <Col key={item.id} xl={8} lg={12} md={24}>
                <Card
                  image={item.avatar.url}
                  title={item.title}
                  description={dateformat(item.created_at, "dd/mm/yyyy")}
                  linkTo={`${ROUTE.NEWS}/${item.slug}`}
                />
              </Col>
            ))}
          </Row>
        </section>
        {this.state.news.length < this.props.total && (
          <section className="center">
            <Button loading={this.state.isLoading} onClick={this.loadMore}>
              Xem thêm
            </Button>
          </section>
        )}
      </>
    );
  }
}

News.getInitialProps = () => {
  const paging = {
    page: 1,
    per_page: 6,
  };
  return Promise.all([
    fetcher.get("news/count"),
    fetcher.get("news", { data: paging }),
  ]).then(([total, news]) => {
    return {
      total,
      paging,
      news,
    };
  });
};

export default News;
