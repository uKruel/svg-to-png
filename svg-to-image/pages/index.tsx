import type { NextPage } from "next";
import Head from "next/head";
import BlobCanvas from "../components/BlobCanvas";
import ConcentricsCanvas from "../components/ConcentricsCanvas";
import BackgroundCanvas from "../components/BackgroundCanvas";
import SVGtoPNG from "../components/SVGCanvas";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Canvas Drawings</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        <BlobCanvas />

        <SVGtoPNG></SVGtoPNG>
        {/* <ConcentricsCanvas /> */}
      </main>
    </div>
  );
};

export default Home;
