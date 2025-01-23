import VietlottMain from "@/components/vietlott/vietlott-main";

const Vietlott = () => {
  return (
    <div className="container text-center">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">
        Get lucky number
      </h1>
      <div className="pt-14">
        <VietlottMain />
      </div>
    </div>
  );
};

export default Vietlott;
