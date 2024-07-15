import Header from "./Header";
import Content from "./Content";
import Features from "./Features";
import Footer from "./Footer";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100 font-rubik">
      <Header />
      <Content />
      <Features />
      <Footer />
    </div>
  );
}
