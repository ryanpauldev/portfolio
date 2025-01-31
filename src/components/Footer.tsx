import { Link } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex h-[60px] w-full items-center justify-around bg-secondary">
      <h3 className="text-sm font-medium text-text md:text-base">
        Created by{" "}
        <a
          href="https://github.com/ryanpauldev"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-highlight">Ryan Paul</span>
        </a>{" "}
        | {new Date().getFullYear()}
      </h3>

      <Link to="home" smooth={true} duration={400}>
        <AiOutlineArrowUp
          className="cursor-pointer rounded-md border-2 border-highlight text-text duration-300 hover:bg-highlight"
          size={30}
        />
      </Link>
    </footer>
  );0
}
