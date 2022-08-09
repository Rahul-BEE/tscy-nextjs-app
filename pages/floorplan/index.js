const Floorplan = ({ data }) => {
  return <div>{data}</div>;
};
export async function getStaticProps(context) {
  const { locale } = context;
  console.log("hi", locale);

  return {
    props: {
      data: "Hello wrold",
    },
  };
}
export default Floorplan;
