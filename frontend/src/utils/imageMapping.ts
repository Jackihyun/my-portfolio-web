// 이미지들을 import 해서 매핑 객체를 구성합니다.
import khucnt from "@/assets/imgs/khucnt.png";
import barojobImg from "@/assets/imgs/barojobImg.png";
import blog from "@/assets/imgs/blog.png";
import ao from "@/assets/imgs/AO.png";
import memoria from "@/assets/imgs/Memoria.png";
import videoFrame from "@/assets/imgs/videoFrame.png";
import login from "@/assets/imgs/login.png";
import blog2 from "@/assets/imgs/blog2.png";

const imageMapping: Record<string, string> = {
  "src/assets/imgs/khucnt.png": khucnt,
  "src/assets/imgs/barojobImg.png": barojobImg,
  "src/assets/imgs/blog.png": blog,
  "src/assets/imgs/AO.png": ao,
  "src/assets/imgs/Memoria.png": memoria,
  "src/assets/imgs/videoFrame.png": videoFrame,
  "src/assets/imgs/login.png": login,
  "src/assets/imgs/blog2.png": blog2,
};

export default imageMapping;
