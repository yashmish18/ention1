"use client";
import { Laptop, Navbar, Footer } from "components";
import { useRouter } from "next/navigation";
import { supabaseClient } from "utils/supabase";
import { SupabaseTable } from "utils/utilties";

const Product = ({ product, relatedProducts }) => {
  const router = useRouter();

  return (
    <main>
      <Navbar />
      {product ? (
        <Laptop product={product} relatedProducts={relatedProducts} />
      ) : (
        <div className="w-full pt-10 mb-16 center flex-col min-h-[50vh] text-gray-100">
          <h2 className="text-5xl">
            Sorry, we couldn{"'"}t find this product.
          </h2>
          <button
            onClick={() => router.back()}
            className="px-9 py-2 rounded-full mt-10 mx-auto bg-[#007E9E]"
          >
            {" "}
            Go Back{" "}
          </button>
        </div>
      )}
      <Footer />
    </main>
  );
};

export default Product;

//get pre-rendered paths
export async function getStaticPaths() {
  try {
    // Fetch only the slugs from Supabase
    const { data: products, error } = await supabaseClient
      .from(SupabaseTable.Products)
      .select("id"); // Only fetching slug for generating paths

    if (error) {
      throw new Error("Failed to fetch product slugs");
    }

    // Create paths for static generation based on product slugs
    console.log("joseph products", products);
    const paths = products.map((p) => ({ params: { slug: p.id + "" } }));

    return {
      paths,
      fallback: false, // If no product is found, show a 404 page
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}
// convert to getStaticProps
export async function getStaticProps(ctx) {
  const { slug } = ctx.params;

  console.log("joseph params ", ctx.params);
  try {
    // Fetch the product by slug from Supabase
    const { data: productData, error: productError } = await supabaseClient
      .from(SupabaseTable.Products)
      .select(
        `
          *,
          category (id, name, description)
        `
      )
      .eq("id", slug)
      .single(); // Fetch only one product

    if (productError || !productData) {
      throw new Error("Failed to fetch the product");
    }

    // Fetch remaining products for the related products section
    const {
      data: remainingProducts,
      error: relatedError,
    } = await supabaseClient
      .from(SupabaseTable.Products)
      .select("*")
      .neq("id", slug); // Fetch all products except the current one

    if (relatedError) {
      throw new Error("Failed to fetch related products");
    }

    return {
      props: {
        product: JSON.parse(JSON.stringify(productData)),
        relatedProducts: JSON.parse(JSON.stringify(remainingProducts)),
      },
      revalidate: 60, // Revalidate every 60 seconds (ISR)
    };
  } catch (err) {
    console.error("Error in getStaticProps:", err);

    return {
      props: {
        product: null, // Pass null if there's an error fetching the product
      },
    };
  }
}
