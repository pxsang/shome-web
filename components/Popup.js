import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Row, Col, Menu } from "antd";
import { Layout } from "antd";
import { Modal, Button } from "antd";
import { getImageUrl } from "../utils/image-url";

const Popup = (props) => {
  const { popup } = props;
  const [isOpen, setOpen] = useState(false);

  // if (!isOpen) return null;

  useEffect(() => {
    if (popup) {
      const closedPopup = sessionStorage.getItem("__popup");
      if (parseInt(closedPopup) !== popup.id) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
  }, []);

  const _onCancel = () => {
    sessionStorage.setItem("__popup", popup.id);
    setOpen(false);
  };

  if (!popup) return null;

  return (
    <Modal
      className="popup"
      maskStyle={{
        backgroundColor: "rgba(0, 0, 0, 0.65)",
      }}
      title=""
      centered
      visible={isOpen}
      footer={null}
      onCancel={_onCancel}
    >
      <img src={getImageUrl(popup.image.url)} />
    </Modal>
  );
};

export default Popup;
