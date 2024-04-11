import Trend from "./Trend";
import style from "./TrendSection.module.css";

export default function TrendSection() {
  return (
    <div className={style.trebdBg}>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}