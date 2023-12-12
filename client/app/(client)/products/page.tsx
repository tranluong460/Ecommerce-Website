"use client";

import { useState } from "react";

import Top from "@/components/Products/Top";
import Container from "@/components/Container";
import Filter from "@/components/Products/Filter";
import FilterDrawn from "@/components/Products/FilterDrawn";
import ListProducts from "@/components/Products/ListProducts";

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
                  <ListProducts />
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
