import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Row, Col, Menu } from "antd";
import { Layout } from "antd";

const Copyright = () => {
  return (
    <div className="copyright">
      &copy; S-Home Interior
      {" - "}
      <a target="_blank" href="https://www.facebook.com/pxsang194">
        Designed by Cris Sang
      </a>
    </div>
  );
};

export default Copyright;
