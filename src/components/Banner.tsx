import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200  container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerImg} alt="" className="h-[700px] w-[700px] " />

        <div>
          <h1 className="text-5xl font-bold ">
            Build Your Ideal <br />
            <span className="text-brand-gradient">
              Development Stack
            </span>
          </h1>
          <p className="py-6">
            Explore frontend, backend, database, and tooling options, <br />
            compare them side by side, and put together the stack that fits your <br />
            next project.
          </p>
          <div className="gap-8">
            <button className=" btn btn-primary bg-brand-gradient">
              Explore Technologies
            </button>
            <button className="btn btn-Primary border-2 p-4 ml-3 border-gray-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
