import WorkInfo from "@/components/WorkInfo";
import works, { workType } from "@/data/works";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = works.filter((work) => work.id === context.query.id);

  return {
    props: {
      work: data[0],
    },
  };
};

const Work: FC<{ work: workType }> = ({ work }) => {
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <WorkInfo {...work} />
    </>
  );
};

export default Work;
