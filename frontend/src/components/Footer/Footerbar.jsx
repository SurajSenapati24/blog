import React from "react";
import logoDark from "../../assets/logo/blacklogo.png";
import logoLight from "../../assets/logo/whitelogo.png";
import { Link } from "react-router-dom";
import { usePost } from "@/context/postContext";

const Footerbar = () => {
  const { posts } = usePost();

  const getCurrentYear = () => new Date().getFullYear();

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const recentPosts = posts?.slice(0, 3);

  return (
    <>
      <div className="pt-7 bg-gray-100 dark:bg-neutral-900">
        <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-4 md:gap-8 md:px-[60px] lg:px-[120px]">
          <div className="col-span-1">
            <div className="flex items-center justify-center w-44 md:w-32 lg:w-52">
            </div>
            <p className="py-6">
              RURALCARE - In every village,home, access to healthcare is not a privilege—it's a right. Through awareness, local empowerment, we build a future where no life is left behind.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Recent Posts</h2>
            <ul className="py-2">
              {recentPosts?.map((item) => (
                <li className="py-1" key={item._id} onClick={ScrollToTop}>
                  <Link to={`/blog/${item._id}`}>
                    <p className="line-clamp-2">{item.title}</p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">Categories</h2>
            <ul className="py-2" onClick={ScrollToTop}>
              <li className="py-1">
                <Link to={`/category/PH`}>Preventive Healthcare</Link>
              </li>
              <li className="py-1">
                <Link to={`/category/WH`}>Women's Health</Link>
              </li>
              <li className="py-1">
                <Link to={`/category/CH`}>Child Health</Link>
              </li>
              <li className="py-1">
                <Link to={`/category/MH`}>Mental Health</Link>
              </li>
              <li className="py-1">
                <Link to={`/category/CDC`}>Common Diseases & Conditions</Link>
              </li>
              <li className="py-1">
                <Link to={`/category/ND`}>Nutrition & Diet</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">Contact Us</h2>
            <ul className="py-2" onClick={ScrollToTop}>
              <li className="py-1">
                RuralCare-Help@support.com
              </li>
              <li className="py-1">
                RuralCare_appointment.com
              </li>
              <li className="py-1">
                0657-2310156
              </li>
            </ul>
          </div>

          
        </div>

        <div className="py-4">
          <p className="text-sm text-gray-500 text-center dark:text-gray-400">
            © {getCurrentYear()} RURALCARE. All Rights Reserved | Designed and
            developed by{" "}
            <a
              href="https://github.com/kritikhedau"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#1d40af", textDecoration: "none" }}
            >
              HCK042
            </a>{" "}
            {" "}
            <a
              href="https://github.com/shakti177"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#1d40af", textDecoration: "none" }}
            >
              (Runtime-Terrors)
            </a>{" "}
            with ❤️
          </p>
        </div>
      </div>
    </>
  );
};

export default Footerbar;
