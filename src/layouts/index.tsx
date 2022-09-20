import Nav from "./Nav";

const Layout = (props: { children?: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
