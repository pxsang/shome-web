import React from "react";
import AdviseButton from "./AdviseButton";

class Commitment extends React.Component {
  render() {
    return (
      <section className="commitment">
        <h5 className="title">Chúng tôi cam kết</h5>
        <ol>
          <li>Sản phẩm thi công đúng 100% so với bản vẽ thiết kế.</li>
          <li>
            Sử dụng nguyên liệu đạt chứng chỉ chất lượng quốc tế, đảm bảo sức
            khỏe cho gia đình bạn.
          </li>
          <li>
            Bảo hành tất cả các sản phẩm 2 năm, bảo hành chất lượng gỗ trọn vòng
            đời sử dụng.
          </li>
          <li>Cam kết mức giá cực kỳ cạnh tranh và nhiều ưu đãi đặc biệt.</li>
        </ol>
        <AdviseButton />
      </section>
    );
  }
}

export default Commitment;
