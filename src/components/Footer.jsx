import { Link } from "react-router-dom";
import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default () => {

  function Contact(name, linkIG, linkLI) {
    return (
      <div className="flex justify-between w-56 align-middle">
        <p>{name}</p>
        <div className="flex">
          <a href={linkIG} target="_blank" rel="noopener noreferrer" className="link link-hover">
            <AiOutlineInstagram className="ml-3" size={20} />
          </a>
          <a href={linkLI} target="_blank" rel="noopener noreferrer" className="link link-hover">
            <AiOutlineLinkedin className="ml-2" size={20} />
          </a>
        </div>
      </div>
    )
  }

  return (
    <footer className="footer mb-1 border border-y-primary p-10 bg-white text-primary">
      <div>
        <Link to="/" className="flex-1">
          <p className="text-4xl text-primary mb-5">
            <b>NewsUp</b>
          </p>
        </Link>
        <p>Jelajahi berita terupdate dengan kami</p>
      </div>
      <div>
        <span className="text-primary font-bold">Partner</span>
        <a className="link link-hover">Hacktiv8</a>
        <a className="link link-hover">Kampus Merdeka</a>
      </div>
      <div>
        <span className="text-primary font-bold">Information</span>
        <a className="link link-hover">Nation</a>
        <a className="link link-hover">Figma</a>
        <a className="link link-hover">Github</a>
      </div>
      <div>
        <span className="text-primary font-bold">Contact Us</span>
        {Contact("Muhammad Irfan Zidni", "#link IG", "#link LI")}
        {Contact("Muhaemin Iskandar", "https://www.instagram.com/muhis.me/", "https://www.linkedin.com/in/muhaemin-iskandar/")}
        {Contact("Vika Alpina", "#link IG", "#link LI")}
      </div>
    </footer>
  );
};
