import React, { Component, Fragment } from "react";
import Link from "next/link";
import Router from "next/router";
import { Breadcrumb, Row, Col, Button, Spin, Alert } from "antd";
import Card from "../../components/Card";
import SEOMeta from "../../components/SEOMeta";
import { ROUTE } from "../../constants/route";
import fetcher from "../../helpers/fetcher";

class Projects extends Component {
  state = {
    completedProjects: this.props.completedProjects || [],
    paging: this.props.paging || { page: 1, per_page: 6 },
    isLoading: false,
  };

  _loadData = async () => {
    const newData = await fetcher.get("completed-projects", {
      data: this.state.paging,
    });

    setTimeout(() => {
      this.setState({
        completedProjects: this.state.completedProjects.concat(newData),
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
          title="Công trình thực tế"
          description="Chuyên tư vấn thiết kế và thi công nội thất căn hộ, nhà phố, biệt thự."
          url="cong-trinh-thuc-te"
        />
        <section>
          <Breadcrumb>
            <Breadcrumb.Item key="home">
              <Link href="/">
                <a>Trang chủ</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item key="completed-project">
              <Link href={ROUTE.COMPLETED_PROJECT}>
                <a>Công trình thực tế</a>
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </section>
        <section className="listing-container">
          <Row gutter={[32, 32]} className="listing-list">
            {this.state.completedProjects.map((item) => (
              <Col key={item.id} xl={8} lg={12} md={24}>
                <Card
                  image={item.avatar.url}
                  title={item.title}
                  description={item.project}
                  linkTo={`${ROUTE.COMPLETED_PROJECT}/${item.slug}`}
                />
              </Col>
            ))}
          </Row>
        </section>
        {this.state.completedProjects.length < this.props.total && (
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

Projects.getInitialProps = () => {
  const paging = {
    page: 1,
    per_page: 6,
  };

  return Promise.all([
    fetcher.get("completed-projects/count"),
    fetcher.get("completed-projects", { data: paging }),
  ]).then(([total, completedProjects]) => {
    return {
      total,
      paging,
      completedProjects,
    };
  });
};

export default Projects;
