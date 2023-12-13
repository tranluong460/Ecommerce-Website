"use client";

import { useState } from "react";
import Container from "@/components/Container";
import FilterDrawn from "./_components/FilterDrawn";
import ListProducts from "./_components/ListProducts";
import Top from "./_components/Top";
import Filter from "./_components/Filter";
import { products } from "@/data/products";

const ProductsPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <Container>
        <div className="bg-background">
          <FilterDrawn
            showModal={showModal}
            setShowModal={() => setShowModal(!showModal)}
          />

          <div className="mx-auto">
            <Top setShowModal={() => setShowModal(!showModal)} />

            <div aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Sản phẩm
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <Filter />

                <div className="lg:col-span-3">
                  <ListProducts products={products} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductsPage;
