import React from "react";

const WorkOutSession = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-10 px-5">
      <div className="wrapper max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">TOP WORKOUT SESSION</h1>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          iusto necessitatibus, ab in vel architecto voluptate dolor omnis?
        </p>
        <img src="/img5.jpg" alt="workout" className="w-full h-auto mb-6" />
      </div>
      <div className="wrapper max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">FEATURED BOOTCAMPS</h1>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum libero
          natus quia eaque. Facere nulla eveniet et corporis!
        </p>
        <div className="bootcamps space-y-4">
          <div className="bg-white p-4 shadow rounded-lg">
            <h4 className="text-xl font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos cupiditate vel obcaecati tempore voluptatum.</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h4 className="text-xl font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos cupiditate vel obcaecati tempore voluptatum.</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h4 className="text-xl font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos cupiditate vel obcaecati tempore voluptatum.</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h4 className="text-xl font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos cupiditate vel obcaecati tempore voluptatum.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkOutSession;
