import { Fragment, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const navigation = [
  { name: 'HOME', href: '/', current: false },
  { name: 'PORTFOLIO', href: '/portfolio', current: false },
  { name: 'SPOTLIGHT', href: '/spotlight', current: false },
  { name: 'ABOUT', href: '/about', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleMenuItemClick = (path) => {
    setCurrentPath(path);
    window.location.href = path; 
  };

  return (
    <Disclosure as="nav" className="bg-yellow-300">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-10 sm:px-10 lg:px-10">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-9 w-auto"
                    src="https://static.vecteezy.com/system/resources/previews/029/200/269/original/banana-transparent-background-free-png.png"
                  />
                </div>
                <div className="hidden sm:ml-12 sm:block">
                  <div className="flex space-x-12">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === currentPath ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.href === currentPath ? 'page' : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          handleMenuItemClick(item.href);
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Profile dropdown */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    {/* Updated to use Link */}
                    <Link to="/login" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-12 rounded-full"
                        src="https://i.pinimg.com/originals/dd/9e/d8/dd9ed836f9e55915f49fe2d662a2485e.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </Menu>
              </div>
            </div>
          </div>
          {/* Collapsed mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === currentPath ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.href === currentPath ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuItemClick(item.href);
                  }}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
