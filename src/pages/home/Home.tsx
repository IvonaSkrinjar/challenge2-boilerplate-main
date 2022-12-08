import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import Products from "components/Products";

const Home = () => {
  return (
    <AppLayout>
      <Headline title="Products" />
      <Products />
    </AppLayout>
  );
};

export default Home;
