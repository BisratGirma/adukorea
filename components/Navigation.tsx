"use client";

import { Fragment } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { categoryDisplayNameMap, categorySlugMap } from '@/lib/categoryMapping';

const shopCategories = Object.keys(categoryDisplayNameMap).map(key => ({
  name: categoryDisplayNameMap[key],
  href: `/category/${categorySlugMap[key]}`,
}));

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Contact us', href: '/contact' },
  { name: 'Return Policy', href: '/return-policy' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navigation({ transparent = false }: { transparent?: boolean }) {
  const navClasses = transparent
    ? 'bg-transparent text-white'
    : 'bg-white text-gray-800 shadow-sm';
  const linkClasses = transparent
    ? 'hover:text-gray-200'
    : 'hover:text-primary';

  return (
    <header className={`sticky top-0 z-20 transition-colors duration-300 ${navClasses}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              AduKorea
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-sm font-medium ${linkClasses}`}>Home</Link>
            
            {/* Shop Dropdown */}
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className={`flex items-center text-sm font-medium ${linkClasses}`}>
                  Shop
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {shopCategories.map((category) => (
                      <Menu.Item key={category.name}>
                        {({ active }) => (
                          <Link
                            href={category.href}
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {category.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {navLinks.slice(1).map(link => (
                 <Link key={link.name} href={link.href} className={`text-sm font-medium ${linkClasses}`}>{link.name}</Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className={`p-2 rounded-full ${linkClasses}`}>
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button className={`p-2 rounded-full ${linkClasses}`}>
              <ShoppingBagIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
