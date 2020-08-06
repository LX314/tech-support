import Head from "next/head";

const Home = ({ mail }) => {
  return (
    <div
      className="v-main-wrapper"
      style={{
        padding: "16px",
      }}
    >
      <p>
        If you have any questions, you can leave a message here or send it to
        the mailbox, and we will answer you in the first time.
      </p>
      <p>
        Email address: <a href={`mailto:${mail}`}>{mail}</a>
      </p>
      <p>Thank you!</p>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};
export const getStaticProps = async ({ params, preview, previewData }) => {
  console.log('process.env.mail_lxthyme: ', process.env.mail_lxthyme)
  return {
    props: {
      mail: process.env.mail_lxthyme,
    },
  };
};

Home.displayName = "Page";
export default Home;
