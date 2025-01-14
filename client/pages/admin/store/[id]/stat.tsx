import AdminFooter from "@/src/components/AdminFooter";
import AdminHeader from "@/src/components/AdminHeader";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Filler, Title, Tooltip, Legend);

import { Line, Bar, Doughnut } from "react-chartjs-2";
import AdminLayout from "@/src/components/AdminLayout";
import { useRecoilValue } from "recoil";
import { AdminAccessTokenState } from "@/src/recoil/states";
import { useEffect } from "react";

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const defaultData = {
  labels: [
    //x 축
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ],
  datasets: [
    {
      //데이터
      label: "test1", //차트 제목
      fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
      data: [
        21,
        19,
        25,
        20,
        23,
        26,
        25, //x축 label에 대응되는 데이터 값
      ],
      backgroundColor: [
        //색상
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        //경계선 색상
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1, //경계선 굵기
    } /* ,
    {
        label: 'test2',
        fill: false,
        data: [
            8, 34, 12, 24
        ],
        backgroundColor: 'rgb(157, 109, 12)',
        borderColor: 'rgb(157, 109, 12)'
    } */,
  ],
};

export default function Stat() {
  const router = useRouter();
  const id = Number(router.query.id);

  const accessToken = useRecoilValue(AdminAccessTokenState);

  useEffect(() => {
    if (accessToken === "") router.push("/admin");
  }, []);

  return (
    <AdminLayout>
      <div className="store-stat">
        <div className="store-detail__heading">
          <h2>Store Stats</h2>
        </div>
        <div className="store-detail__container">
          <div className="store-detail__title">
            <h1>Miller Draft 서초 2점</h1>
            <p>
              Miller Draft 서초 2점의 Store NFT 정보입니다.
              <br />
              {/* Store NFT를 가지고 계십니까?{" "} */}
              <Link href="/admin/store">
                <span> 다른 매장 보러가기 ↘</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="chart-layout">
          <div className="line-chart-container">
            <Line data={defaultData} width={100} height={50}></Line>
          </div>
          <div className="doughnut-chart-layout">
            <div className="chart-container">
              {/* <Bar options={options} data={data}></Bar> */}
              <Doughnut data={data} />
            </div>
            <div className="chart-container">
              {/* <Bar options={options} data={data}></Bar> */}
              <Doughnut data={data} />
            </div>{" "}
            <div className="chart-container">
              {/* <Bar options={options} data={data}></Bar> */}
              <Doughnut data={data} />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
