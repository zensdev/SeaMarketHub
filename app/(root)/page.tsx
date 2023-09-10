import React from "react";

import Categories from "@/components/Categories";
import Promotions from "@/components/Promotion";
import News from "@/components/News";

const HomePage: React.FC = () => {
  return (
    <section className="flex flex-col place-items-center justify-center pt-5">
      <Promotions />
      <Categories className="mt-4" />
      <News className="mt-4" />
    </section>
  );
};

export default HomePage;
