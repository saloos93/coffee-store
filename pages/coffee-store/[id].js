import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      Coffee Store {router.query.id}
      <div>
        <Link href="/">back to home</Link>
      </div>
    </div>
  );
};
export default CoffeeStore;
