import { useState } from "react";
import { Link } from "react-router";
import "../App.css";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
const routes = [
  {
    key: "about",
    label: "About",
    href: "/about",
  },
  {
    key: "experience",
    label: "Experience",
    href: "/experience",
  },
  {
    key: "projects",
    label: "Projects",
    href: "/projects",
  },
  {
    key: "tools",
    label: "Tools",
    href: "/tools",
  },
  {
    key: "contact Me",
    label: "Contact me!",
    href: "/contact-me",
  },
];

export default function Home() {
  const [currentRoute, setCurrentRoute] = useState(routes[0].key);
  return (
    <div className="bg-black  font-big-shot text-white ">
      <div className="max-w-4xl mx-auto gap-20 flex-col flex justify-center  h-screen  w-screen items-center">
        <p className="md:text-5xl text-lg  ">Welcome to Bassam portfolio</p>
        <div className="flex flex-col items-start px-12 md:px-5 w-full gap-4">
          {routes.map((route) =>
            currentRoute === route.key ? (
              <Link
                to={route.href}
                className="cursor-pointer text-yellow-200 relative motion-preset-blink motion-duration-1500"
              >
                <p>{route.label}</p>
                <ArrowLongRightIcon className="size-8 absolute -top-[4px] -left-10" />
              </Link>
            ) : (
              <Link
                className="cursor-pointer"
                onMouseEnter={() => setCurrentRoute(route.key)}
                to={route.href}
                onClick={() => setCurrentRoute(route.key)}
              >
                {route.label}
              </Link>
            )
          )}{" "}
        </div>
      </div>
    </div>
  );
}
