import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";

const Typing = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const options: TypedOptions = {
        strings: ["Hello", "Welcome to Typed.js", "Enjoy typing animations!"],
        typeSpeed: 50,
        loop: true,
      };

      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy(); // Nếu bạn muốn dọn dẹp khi component unmount
      };
    }
  }, []);
  return (
    <div>
      <div className="header-container">
        <div className="row space-between">
          <div className="logo">
            <Link to="/">
              <span ref={typedRef}>Fullstack Developer</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typing;
