"use client";
import Link from "next/link";
import { Container } from "@/app/components/Container";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Fragment, useState } from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { getCurrentUser } from "aws-amplify/auth";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navigation = () => {
  // const { signOut } = useAuthenticator();
  const [userName, setUserName] = useState("");
  const user = getCurrentUser();
  user.then((item) => {
    setUserName(item.username);
  });

  return (
    <div className="sticky top-0 backdrop-blur-xl z-50">
      <Container className="flex justify-between items-center py-2">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </Link>

        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="relative rounded-full p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={`https://mm-bucket191228-dev.s3.us-east-2.amazonaws.com/public/${userName}-profile-pic.jpg`}
                  alt=""
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/profile"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Your Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      // onClick={signOut}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </Container>
    </div>
  );
};
