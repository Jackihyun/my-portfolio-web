export default function Header() {
  return (
    <div className="flex items-center justify-center pt-10 relative">
      <div className="flex font-orbitronSemibold text-base gap-12 text-black dark:text-white">
        <a href="/home">Home</a>
        <a href="/about">ABOUT</a>
        <a href="/portfolio">PORTFOLIO</a>
        <a href="/blog">BLOG</a>
        <a href="/contact">CONTACT</a>
      </div>
    </div>
  );
}
