import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import Kobodrop from "../assets/logos/kobodrop_logo.svg";
import ButtonLink from "../common/ButtonLink";

function Nav() {
  const textLinkClasses =
    "text-gray-500 hover:text-gray-900 active:text-gray-400";

  const navLinks = [
    { to: "/features", children: "Features" },
    { to: "/partners", children: "Partners" },
    { to: "/reviews", children: "Reviews" },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-[15vh] max-w-7xl items-center justify-between px-8 lg:px-12 xl:m-auto">
            <div className="flex">
              <Link to="/">
                <img src={Kobodrop} alt="Kobodrop logo" />
              </Link>
              <div className="ml-4 hidden items-center space-x-4 sm:ml-6 sm:flex lg:ml-8 lg:space-x-8">
                {navLinks.map((link, index) => (
                  <Link key={index} to={link.to} className={textLinkClasses}>
                    {link.children}
                  </Link>
                ))}
              </div>
            </div>
            <ButtonLink
              href="https://play.google.com/store/apps/details?id=fi.nordea.sme&pcampaignid=web_share"
              target="_blank"
              children={"Install Nordea bank app"}
              className="active:bg hidden rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-gray-900 active:bg-gray-600 sm:flex"
            />
            <Disclosure.Button className="rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white sm:hidden">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="space-y-1 px-4 sm:hidden">
            {navLinks.map((link, index) => (
              <Disclosure.Button
                className="block"
                as={Link}
                to={link.to}
                key={index}
              >
                {link.children}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
