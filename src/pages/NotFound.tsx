import { Link } from "react-router-dom";

const NotFound = () => (
  <div
    className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    style={{ background: "hsl(240,30%,6%)" }}
  >
    <div
      className="font-cinzel text-8xl font-bold mb-4"
      style={{
        background: "linear-gradient(135deg, hsl(43,74%,42%), hsl(43,74%,60%), hsl(45,80%,72%))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      404
    </div>
    <p className="font-cinzel text-xl text-[hsl(45,60%,88%)] mb-3">The Stars Don't Know This Path</p>
    <p className="font-raleway text-sm text-[hsl(45,20%,55%)] mb-8 max-w-sm">
      The cosmic map shows no route to this page. Let us guide you back.
    </p>
    <Link
      to="/"
      className="mystic-btn-filled px-8 py-3 text-xs rounded-sm font-cinzel tracking-widest"
    >
      Return Home
    </Link>
  </div>
);

export default NotFound;
