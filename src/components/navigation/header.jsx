import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/images/logo.jpeg";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about-us", current: false },
  { name: "Service", href: "#", current: false },
  { name: "Book Appointment", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-primary py-4 sm:py-6 md:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center min-[768px]:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-between min-[768px]:justify-start">
            <div className="flex shrink-0 items-center ml-8 min-[768px]:ml-0">
              <img
                alt="Your Company"
                src={logo}
                className="h-20 w-20 object-contain"
              />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 min-[768px]:static min-[768px]:inset-auto min-[768px]:ml-6 min-[768px]:pr-0">
            <div className="hidden min-[768px]:ml-6 min-[768px]:block">
              <div className="flex items-center space-x-2 lg:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className="text-white rounded-md px-2 py-2 text-sm lg:text-base font-bold font-Manrope hover:bg-white hover:bg-opacity-20 transition-colors" 
                  >
                    {item.name}
                  </a>
                ))}
                <div>
                  <button className="bg-white rounded-full font-Manrope px-3 py-1 lg:px-4 lg:py-3 xl:px-5 xl:py-4 text-sm lg:text-base hover:bg-gray-100 transition-colors whitespace-nowrap">
                    Get Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="min-[768px]:hidden">
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-white bg-opacity-20 text-white"
                  : "text-white hover:bg-white hover:bg-opacity-20",
                "block rounded-md px-3 py-2 text-base font-medium font-Manrope"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <div className="pt-2">
            <button className="w-full bg-white rounded-full font-Manrope px-5 py-2 text-base font-medium hover:bg-gray-100 transition-colors">
              Get Appointment
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
