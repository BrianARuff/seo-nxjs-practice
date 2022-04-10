import { useRouter } from "next/router";
import Head from "next/head";

export default function Car({ car }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          {car.color}-{car.id}
        </title>
        <link rel="icon" href={car.image}></link>
      </Head>
      <button onClick={() => router.back()}>{"Go Back"}</button>
      <p>Car Image from File: </p>
      <img src={car.image} />
      <p>Car ID from File: {car.id}</p>
      <p>Car Color from File: {car.color}</p>
    </>
  );
}

export async function getStaticProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);

  const data = await req.json();

  return {
    props: {
      car: data,
    },
  };
}

export async function getStaticPaths() {
  const req = await fetch("http://localhost:3000/cars.json");

  const data = await req.json();

  const paths = data.map((car) => ({ params: { id: car.id } }));
  return {
    paths,
    fallback: false,
  };
}
