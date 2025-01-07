export default function Header() {
  return (
    <div className="flex items-center justify-between p-[60px]">
      <div className="font-orbitronRegular text-3xl">
        <a href="/">Jackihyun</a>
      </div>
      <div className="flex font-orbitronSemibold text-base flex-row gap-12">
        <a href="/about">ABOUT</a>
        <a href="/portfolio">PORTFOLIO</a>
        <a href="/blog">BLOG</a>
        <a href="/contact">CONTACT</a>
      </div>
    </div>
  );
}
