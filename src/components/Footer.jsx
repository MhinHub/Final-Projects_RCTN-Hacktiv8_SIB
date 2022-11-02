import { Link } from "react-router-dom";
import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default () => {
  return (
    <footer className="footer-content">
      <div>
        <Link to="/" className="flex-1">
          <p className="mb-5 text-4xl text-primary">
            <b>NewsUp</b>
          </p>
        </Link>
        <p>Jelajahi berita terupdate dengan kami</p>
      </div>
      <div>
        <span className="font-bold text-primary">Partner</span>
        <a
          className="link-hover link"
          href="https://www.hacktiv8.com/"
          target="_blank"
        >
          Hacktiv8
        </a>
        <a
          className="link-hover link"
          href="https://kampusmerdeka.kemdikbud.go.id/"
          target="_blank"
        >
          Kampus Merdeka
        </a>
      </div>
      <div>
        <span className="font-bold text-primary">Build Journey</span>
        <a
          className="link-hover link"
          href="https://www.notion.so/invite/238e658294af400a8e27633d2b7d47f3c7b803e4"
          target="_blank"
        >
          Notion
        </a>
        <a
          className="link-hover link"
          href="https://www.figma.com/file/YXFvVL1S9bUR2VTLV4oo1B/FP1---NewsUp---Kelompok-1?node-id=0%3A1"
          target="_blank"
        >
          Figma
        </a>
        <a
          className="link-hover link"
          href="https://github.com/MhinHub/Final-Projects_RCTN-Hacktiv8_SIB/tree/sib_react_005_fp1"
          target="_blank"
        >
          Github
        </a>
      </div>
      <div>
        <span className="font-bold text-primary">Contact Us</span>
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

        <a href="#my-modal" className="justify-self-center !underline">
          More
        </a>

        <label id="my-modal" className="modal cursor-pointer">
          <label className="modal-box relative w-11/12 max-w-6xl">
            <center>
              <b>
                <h1 className="text-2xl font-bold">About</h1>
              </b>
            </center>

            <div className="w-30 m-4 flex justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-md border border-black py-2 px-6 text-center">
                <p className="py-4">Ketua</p>
                <img
                  src="src/assets/foto/Irfan.jpg"
                  className="aspect-[1/1] rounded-2xl px-4"
                />
                <h1 className="px-6 py-5 text-lg">Muhammad Irfan Zidni</h1>
                <p className="px-4 text-center ">RCTN-KS05-002</p>

                <div className="mt-4 flex flex-row px-4 py-1"></div>
              </div>

              <div className="flex flex-col rounded-md border border-black py-2 px-6 text-center">
                <p className="py-4">Anggota</p>
                <img
                  src="src/assets/foto/Muhaemin.jpg"
                  className="aspect-[1/1] rounded-2xl px-4"
                />
                <h1 className="px-4 py-5 text-lg">Muhaemin Iskandar</h1>
                <p className="px-4 text-center ">RCTN-KS05-001</p>
                <div className="mt-4 flex flex-row px-4 py-1"></div>
              </div>

              <div className="flex flex-col rounded-md border border-black py-2 px-6 text-center">
                <p className="py-4">Anggota</p>
                <img
                  src="src/assets/foto/Vika.jpg"
                  className="aspect-[1/1] rounded-2xl px-4"
                />
                <h1 className="px-4 py-5 text-lg">Vika Alpiana</h1>
                <p className="px-4 text-center ">RCTN-KS05-004</p>
                <div className="mt-4 flex flex-row px-4 py-1"></div>
              </div>
            </div>
            <div className="modal-action">
              <a
                href="#"
                className="btn-circle btn absolute top-2 right-2 bg-primary font-bold text-base-100"
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
    <div className="flex w-56 justify-between align-middle">
      <p>{name}</p>
      <div className="flex">
        <a
          href={linkIG}
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover link"
        >
          <AiOutlineInstagram className="ml-3" size={20} />
        </a>
        <a
          href={linkLI}
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover link"
        >
          <AiOutlineLinkedin className="ml-2" size={20} />
        </a>
      </div>
    </div>
  );
}
