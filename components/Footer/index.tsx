import Link from "next/link";
import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-copy">&copy; 2023</div>
        <div className="footer-contacts">
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:magazina@magazina.com">magazina@magazina.com</a>
            </li>
            <li>
              VK: <Link href={"#"}>magazina</Link>
            </li>
            <li>Adress: Bobryuoysk, 11-th line, 22</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
