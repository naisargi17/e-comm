import Link from "next/link";

const Links = () => {

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Category", path: "/category" },
    { title : "Search", path :"/serach"},

  ];
  return <div>
    {links.map((link) => (
        <Link key={link.title} href={link.path} className=" pr-4">
          {link.title}
        </Link>
      ))}
  </div>;
};

export default Links;
