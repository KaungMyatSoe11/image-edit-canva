"use client";
import { useRouter } from "next/navigation";
import ImageWithTextOverlay from "./components/canva-img";

const Coupon = ({ searchParams }) => {
  const route = useRouter();
  console.log(searchParams);
  if (!searchParams.name || !searchParams.attend_course) {
    route.push("/");
  }
  return (
    <div>
      {!searchParams.name || !searchParams.attend_course ? (
        <h1>loading...</h1>
      ) : (
        <ImageWithTextOverlay
          name={searchParams.name}
          attend_course={searchParams.attend_course}
        />
      )}
    </div>
  );
};

export default Coupon;
