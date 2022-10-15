import { Link } from "react-router-dom";

export default () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <Link to="/" className="flex-1">
          <p className="text-4xl text-white mb-5">
            <b>NewsUp</b>
          </p>
        </Link>
        <p>Jelajahi berita terupdate dengan kami</p>
      </div>
      <div>
        <span className="footer-title">Kategori</span>
        <a className="link link-hover">Indonesia</a>
        <a className="link link-hover">Programming</a>
        <a className="link link-hover">Sports</a>
      </div>
      <div>
        <span className="footer-title">Informasi</span>
        <a className="link link-hover">Info Iklan</a>

        <a className="link link-hover">Karir</a>
        <a className="link link-hover">Privacy Policy</a>
      </div>
      <div>
        <span className="footer-title">Contact Us</span>
        <a className="link link-hover">support@newsup.com</a>
        <a className="link link-hover">021 - 2208 - 1996</a>
        <a className="link link-hover">Sudirman, Jakarta</a>
      </div>
    </footer>
  );
};
