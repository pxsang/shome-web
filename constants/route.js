export const INTERIOR_SLUG_EN_TO_VI = {
  all: "tat-ca",
  apartment: "can-ho-chung-cu",
  "residence-villa": "nha-pho-biet-thu",
  "restaurant-hotel": "nha-hang-khach-san",
  office: "van-phong",
  other: "khac",
};

export const INTERIOR_SLUG_VI_TO_EN = {
  "tat-ca": "all",
  "can-ho-chung-cu": "apartment",
  "nha-pho-biet-thu": "residence-villa",
  "nha-hang-khach-san": "restaurant-hotel",
  "van-phong": "office",
  khac: "other",
};

export const ROUTE = {
  HOME: "/",
  ARCHITECTURE: "/kien-truc",
  INTERIOR_DESIGN: "/thiet-ke-noi-that",
  COMPLETED_PROJECT: "/cong-trinh-thuc-te",
  NEWS: "/tin-tuc",
  ABOUT_US: "/ve-chung-toi",
  CONTACT: "/lien-he",
};

export const INTERIOR_DESIGN_SLUGS = [
  {
    path: `${ROUTE.INTERIOR_DESIGN}/tat-ca`,
    title: "Tất cả",
  },
  {
    path: `${ROUTE.INTERIOR_DESIGN}/can-ho-chung-cu`,
    title: "Căn hộ - Chung cư",
  },
  {
    path: `${ROUTE.INTERIOR_DESIGN}/nha-pho-biet-thu`,
    title: "Nhà phố - Biệt thự",
  },
  {
    path: `${ROUTE.INTERIOR_DESIGN}/nha-hang-khach-san`,
    title: "Nhà hàng - Khách sạn",
  },
  {
    path: `${ROUTE.INTERIOR_DESIGN}/van-phong`,
    title: "Văn phòng",
  },
  {
    path: `${ROUTE.INTERIOR_DESIGN}/khac`,
    title: "Khác",
  },
];

export const routes = [
  {
    path: "/",
    title: "Trang chủ",
  },
  {
    path: "/kien-truc",
    title: "Kiến trúc",
  },
  {
    path: ROUTE.INTERIOR_DESIGN,
    title: "Thiết kế nội thất",
    children: INTERIOR_DESIGN_SLUGS,
  },
  {
    path: "/cong-trinh-thuc-te",
    title: "Công trình thực tế",
  },
  {
    path: "/tin-tuc",
    title: "Tin tức",
  },
  {
    path: "/ve-chung-toi",
    title: "Về chúng tôi",
  },
  {
    path: "/lien-he",
    title: "Liên hệ",
  },
];

export const INTERIOR_DESIGN_SLUG_LABEL = {
  "tat-ca": "Tất cả",
  "can-ho-chung-cu": "Căn hộ - Chung cư",
  "nha-pho-biet-thu": "Nhà phố - Biệt thự",
  "nha-hang-khach-san": "Nhà hàng - Khách sạn",
  "van-phong": "Văn phòng",
  khac: "Khác",
};
