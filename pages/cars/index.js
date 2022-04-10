import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { forwardRef } from "react";

const ImageButton = forwardRef(({ onClick, href, src }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image src={src} height={200} width={300} />
    </a>
  );
});

export default function CarsList({ carList }) {
  const router = useRouter();
  return (
    <>
      <h1>Car List</h1>
      <button onClick={() => router.push("/")}>Go Home</button>
      <div style={{ display: "flex" }}>
        {carList?.map((car) => {
          return (
            <div
              key={car.id}
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                margin: "20px",
              }}
            >
              <p>{car.id}</p>
              <p>{car.color}</p>
              <Link passHref={true} href={`/cars/${car.id}`}>
                <ImageButton src={car.image} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const req = await fetch("http://localhost:3000/cars.json");

  const data = await req.json();

  return {
    props: {
      carList: data,
    },
  };
}
