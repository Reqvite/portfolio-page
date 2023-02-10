import WorkInfo from "@/components/WorkInfo";
import works, { workType } from "@/data/works";
import Head from "next/head";
import { FC } from "react";

export const getServerSideProps = (context) => {
  const { id } = context.query.id;

  const data = works.filter((work) => work.id === context.query.id);

  return {
    props: {
      work: data[0],
    },
  };
};

const Work: FC<workType> = ({ work }) => {
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
