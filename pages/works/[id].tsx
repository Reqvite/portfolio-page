import WorkInfo from "@/components/WorkInfo";
import works, { WorkI } from "@/data/works";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";

export const getStaticPaths = async () => {
  const data = works;
  const paths = data.map(({ id }) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetServerSideProps = async (context: any) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const data = works.filter((work) => work.id === context.params.id);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      work: data[0],
    },
  };
};

const Work: FC<{ work: WorkI }> = ({ work }) => {
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
