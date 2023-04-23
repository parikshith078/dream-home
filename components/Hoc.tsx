import Footer from "./Footer";
import NavBar from "./NavBar";

const Hoc = (props: any) => {
  return (
    <>
      <NavBar />
      <div className=" absolute top-14">
           <main className="w-screen h-screen mb-10  ">{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Hoc;
