import Link from "next/link";
import "./app.css";

export default function Page() {
  return (
    <main>
      <h1>这是跟路由对应的UI</h1>

      <div className="linkWrapper">
        <span>
          <Link href="/dashboard">去dashboard页面</Link>
        </span>
        <span>
          <Link href="/about">去about页面</Link>
        </span>
      </div>

      <div className="linkContent">
        <h2>这是路由对应的内容区域</h2>
        <div></div>
      </div>
    </main>
  );
}
