import AnimatedButton from "./AnimatedButton";

const Rquestbutton = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:px-30">
        <h3 className="md:text-5xl font-bold tracking-wider">REACH US TODAY</h3>
        <AnimatedButton
          variant="gradient"
          onClick={() => (window.location.href = "q2contact.html")}
          className="tracking-wider px-10 py-4 font-semibold"
        >
          REQUEST A CALLBACK
        </AnimatedButton>
      </div>
    </section>
  );
};

export default Rquestbutton;
