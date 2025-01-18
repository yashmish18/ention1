"use server";
import Products from "components/products/device";
import { supabaseClient } from "utils/supabase";
import { SupabaseTable } from "utils/utilties";

const Laptops = ({ data }) => {
  console.log("Joseph data ", data);
  return <Products products={[]} data={data} />;
};

export async function getServerSideProps() {
  try {
    const { data, error } = await supabaseClient.from(SupabaseTable.Products)
      .select(`
        *,
        category (id, name, description)
        `);

    if (error) {
      throw new Error("Failed to fetch products");
    }

    return { props: { data } };
  } catch (error) {
    return { props: { data: [] } }; // Return an empty array if there's an error
  }
}

export default Laptops;
