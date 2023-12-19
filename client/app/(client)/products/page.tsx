import Container from "@/components/Container";
import ProductsTop from "./_components/ProductsTop";
import ProductsFilter from "./_components/ProductsFilter";
import ProductsList from "./_components/ProductsList";
import { getAllProducts } from "@/actions/products";

const ProductsPage = async () => {
  const products = await getAllProducts();

  return (
    <section className="py-10">
      <Container>
        <ProductsTop />

        <div className="pb-24 pt-6">
          <h2 className="sr-only">Sản phẩm</h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <ProductsFilter />

            <ProductsList products={products} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductsPage;
