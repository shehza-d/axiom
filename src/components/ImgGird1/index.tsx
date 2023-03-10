import { ImgGridType } from "../../types/types";
import Img from "./Img";

export default function ImgGrid1(props: { data: ImgGridType[] }) {
  return (
    <>
      <section className=" mx-5">
        <div className="flex flex-wrap bg-gray-900">
          <Img data={props?.data[0]} />
          <Img data={props?.data[1]} />
          <Img data={props?.data[2]} />
        </div>
        <div className="flex flex-wrap  bg-gray-900">
          <Img data={props?.data[3]} />
          <Img data={props?.data[4]} />
          <Img data={props?.data[5]} />
        </div>
      </section>
    </>
  );
}
