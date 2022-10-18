import { Link } from "react-router-dom";
import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default () => {
  return (
    <footer className="footer-content">
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
        <a
          className="link link-hover"
          href="https://www.hacktiv8.com/"
          target="_blank"
        >
          Hacktiv8
        </a>
        <a
          className="link link-hover"
          href="https://kampusmerdeka.kemdikbud.go.id/"
          target="_blank"
        >
          Kampus Merdeka
        </a>
      </div>
      <div>

        <span className="text-primary font-bold">Build Journey</span>
        <a
          className="link link-hover"
          href="https://www.notion.so/invite/238e658294af400a8e27633d2b7d47f3c7b803e4"
          target="_blank"
        >
          Notion
        </a>
        <a
          className="link link-hover"
          href="https://www.figma.com/file/YXFvVL1S9bUR2VTLV4oo1B/FP1---NewsUp---Kelompok-1?node-id=0%3A1"
          target="_blank"
        >
          Figma
        </a>
        <a
          className="link link-hover"
          href="https://github.com/MhinHub/Final-Projects_RCTN-Hacktiv8_SIB/tree/sib_react_005_fp1"
          target="_blank"
        >
          Github
        </a>
      </div>
      <div>
        <span className="text-primary font-bold">Contact Us</span>
        <Contact
          name="Muhammad Irfan Zidni"
          linkIG="https://www.instagram.com/irfanzidni11/"
          linkLI="https://www.linkedin.com/in/irfanzidni/"
        />
        <Contact
          name="Muhaemin Iskandar"
          linkIG="https://www.instagram.com/muhis.me/"
          linkLI="https://www.linkedin.com/in/muhaemin-iskandar/"
        />
        <Contact
          name="Vika Alpina"
          linkIG="http://instagram.com/vikaalpiana"
          linkLI="https://www.linkedin.com/in/vika-alpiana-84084820a"
        />
      </div>
    </footer>
  );
};

//* Component local

function Contact({ name, linkIG, linkLI }) {
  return (
    <div className="flex justify-between w-56 align-middle">
      <p>{name}</p>
      <div className="flex">
        <a
          href={linkIG}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          <AiOutlineInstagram className="ml-3" size={20} />
        </a>
        <a
          href={linkLI}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          <AiOutlineLinkedin className="ml-2" size={20} />
        </a>
      </div>
    </div>
  );
}