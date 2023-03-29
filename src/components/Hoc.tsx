import Footer from "./Footer";
import NavBar from "./NavBar";

const Hoc = (props: any) => {
  return (
    <>
      <NavBar />
      <main className="w-screen h-screen">{props.children}</main>
      <Footer />
    </>
  );
};

export default Hoc;
