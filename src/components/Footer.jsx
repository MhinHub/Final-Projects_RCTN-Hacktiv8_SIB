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

        <a href="#my-modal" className="!underline justify-self-center">
          More
        </a>

        <label id="my-modal" className="modal cursor-pointer">
          <label className="modal-box w-11/12 max-w-6xl relative">
            <center>
              <b>
                <h1 className="text-2xl font-bold">About</h1>
              </b>
            </center>

            <div className="flex justify-center gap-6 lg:grid-cols-3 sm:grid-cols-2 w-30 m-4">
              <div className="flex flex-col text-center py-2 px-6 rounded-md border border-black">
                <p className="py-4">Ketua</p>
                <img
                  src="src/assets/foto/Irfan.jpg"
                  className="px-4 aspect-[1/1] rounded-2xl"
                />
                <h1 className="text-lg px-6 py-5">Muhammad Irfan Zidni</h1>
                <p className="text-center px-4 ">RCTN-KS05-002</p>

                <div className="flex flex-row mt-4 px-4 py-1"></div>
              </div>

              <div className="flex flex-col text-center py-2 px-6 rounded-md border border-black">
                <p className="py-4">Anggota</p>
                <img
                  src="src/assets/foto/Muhaemin.jpg"
                  className="px-4 aspect-[1/1] rounded-2xl"
                />
                <h1 className="text-lg px-4 py-5">Muhaemin Iskandar</h1>
                <p className="text-center px-4 ">RCTN-KS05-001</p>
                <div className="flex flex-row mt-4 px-4 py-1"></div>
              </div>

              <div className="flex flex-col text-center py-2 px-6 rounded-md border border-black">
                <p className="py-4">Anggota</p>
                <img
                  src="src/assets/foto/Vika.jpg"
                  className="px-4 aspect-[1/1] rounded-2xl"
                />
                <h1 className="text-lg px-4 py-5">Vika Alpiana</h1>
                <p className="text-center px-4 ">RCTN-KS05-004</p>
                <div className="flex flex-row mt-4 px-4 py-1"></div>
              </div>
            </div>
            <div className="modal-action">
              <a
                href="#"
                className="bg-primary btn-circle absolute btn top-2 right-2 text-base-100 font-bold"
              >
                X
              </a>
            </div>
          </label>
        </label>
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
