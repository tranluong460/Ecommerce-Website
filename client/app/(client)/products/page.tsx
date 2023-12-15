import Container from "@/components/Container";
import ListProducts from "./_components/ListProducts";
import Top from "./_components/Top";
import Filter from "./_components/Filter";
import { products } from "@/data/products";

const ProductsPage = () => {
  return (
    <section className="py-10">
      <Container>
        <Top />

        <div aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Sản phẩm
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <Filter />

            <ListProducts products={products} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductsPage;
