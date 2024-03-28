import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: React.ReactNode;
};

const Footer: React.FC<Props> = ({ children, className }) => {
  const combinedClassName = `flex flex-col fixed bottom-0 w-screen ${className}`;
  return (
    <div className={combinedClassName}>
      <main>{children}</main>
      <footer className="bg-white text-black p-4 shadow-md  border-t border-black ">
        <nav className="container mx-auto flex justify-between items-center">
          <ul className="flex flex-grow justify-evenly">
            <li>
              <a href="/category/record" className="hover:underline text-black">
                記録
              </a>
            </li>
            <li>
              <a
                href="/category/task"
                className="hover:underline text-black"
              >
                日々のミッション
              </a>
            </li>
            <li>
              <a
                href="/category/training"
                className="hover:underline text-black"
              >
                トレーニング
              </a>
            </li>
            <li>
              <a href="/category/search" className="hover:underline text-black">
                動画検索
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
