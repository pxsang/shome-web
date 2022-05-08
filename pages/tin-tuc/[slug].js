import React, { Component, Fragment } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import dateFormat from "dateformat";
import { Row, Col, Button, Breadcrumb } from "antd";
import SEOMeta from "../../components/SEOMeta";
import AdviseButton from "../../components/AdviseButton";
import { ROUTE } from "../../constants/route";
import fetcher from "../../helpers/fetcher";
import Commitment from "../../components/Commitment";

class NewsSlug extends Component {
  static getInitialProps(ctx) {
    const { slug } = ctx.query;

    return fetcher.get(`news/${slug}`).then((response) => {
      return { data: response };
    });
  }

  render() {
    const { data } = this.props;

    return (
      <>
        <SEOMeta
          title={data.title}
          description="Chuyên tư vấn thiết kế và thi công nội thất căn hộ, nhà phố, biệt thự."
          url={`tin-tuc/${data.slug}`}
          imageUrl={data.avatar.url}
        />
        <div className="news-detail-page">
          <section>
            <Breadcrumb>
              <Breadcrumb.Item key="home">
                <Link href="/">Trang chủ</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item key="news">
                <Link href={ROUTE.NEWS}>Tin tức</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </section>
          <section className="container news-detail-page__content">
            <h1 className="article-title">{data.title}</h1>
            <ul className="date-post">
              <li>{dateFormat(new Date(data.created_at), "dd/mm/yyyy")}</li>
              <li>Lượt xem: {data.count}</li>
              <li>Admin</li>
            </ul>
            <ReactMarkdown className="article-content" source={data.content} />
          </section>
          <Commitment />
        </div>
      </>
    );
  }
}

export default withRouter(NewsSlug);
