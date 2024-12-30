import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow ">
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  );
}
