import React, { Component, Fragment } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { Row, Col, Breadcrumb, Button } from "antd";
import SEOMeta from "../../components/SEOMeta";
import { INTERIOR_DESIGN_SLUG_LABEL, ROUTE } from "../../constants/route";
import Card from "../../components/Card";

import fetcher from "../../helpers/fetcher";

class InteriorDesignSlug extends Component {
  static getInitialProps(ctx) {
    const { slug } = ctx.query;
    const paging = {
      page: 1,
      per_page: 6,
    };
    const filters = {
      type: slug,
    };

    return Promise.all([
      fetcher.get("interior-designs/count", { data: { ...filters } }),
      fetcher.get("interior-designs", { data: { ...paging, ...filters } }),
    ]).then(([total, data]) => {
      return {
        total,
        paging,
        data,
      };
    });
  }

  state = {
    data: this.props.data || [],
    paging: this.props.paging || { page: 1, per_page: 6 },
    isLoading: false,
  };

  _loadData = async () => {
    const { slug } = this.props.router.query;
    const newData = await fetcher.get("interior-designs", {
      data: {
        ...this.state.paging,
        type: slug,
      },
    });

    setTimeout(() => {
      this.setState({
        data: this.state.data.concat(newData),
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
    const { slug } = this.props.router.query;
    return (
      <>
        <SEOMeta
          title={`Thiết kế nội thất - ${INTERIOR_DESIGN_SLUG_LABEL[slug]}`}
          description="Chuyên tư vấn thiết kế và thi công nội thất căn hộ, nhà phố, biệt thự."
          url={`thiet-ke-noi-that/${slug}`}
        />
        <section>
          <Breadcrumb>
            <Breadcrumb.Item key="home">
              <Link href="/">
                <a>Trang chủ</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item key="architecture">
              <Link href={`${ROUTE.INTERIOR_DESIGN}/tat-ca`}>
                <a>Kiến trúc</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item key="slug">
              {INTERIOR_DESIGN_SLUG_LABEL[slug]}
            </Breadcrumb.Item>
          </Breadcrumb>
        </section>
        <section className="listing-container">
          <Row gutter={[32, 32]} className="listing-list">
            {this.state.data.map((item) => (
              <Col key={item.id} xl={8} lg={12} md={24}>
                <Card
                  image={item.avatar.url}
                  title={item.title}
                  linkTo={`/thiet-ke-noi-that/chi-tiet/${item.slug}`}
                />
              </Col>
            ))}
          </Row>
        </section>
        {this.state.data.length < this.props.total && (
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

export default withRouter(InteriorDesignSlug);
