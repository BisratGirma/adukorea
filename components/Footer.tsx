import { FaTelegramPlane, FaInstagram, FaEnvelope, FaFacebookF, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const socialLinks = [
  { icon: FaTelegramPlane, href: '#', color: 'bg-sky-500' },
  { icon: FaInstagram, href: '#', color: 'bg-pink-500' },
  { icon: FaEnvelope, href: '#', color: 'bg-red-500' },
  { icon: FaFacebookF, href: '#', color: 'bg-blue-600' },
  { icon: FaYoutube, href: '#', color: 'bg-red-600' },
];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <h1 className="text-2xl font-bold text-gray-800">AduKorea</h1>
          </div>

          {/* Social Icons */}
          <div className="text-center">
            <h3 className="font-semibold tracking-wide">SOCIAL ICONS</h3>
            <p className="text-sm text-gray-500 mb-4">Press To Visit Or Leave A Message</p>
            <div className="flex justify-center space-x-3">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${social.color} hover:opacity-80 transition-opacity`}>
                    <social.icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold">Get In Touch With Us For The Best Quality</h3>
            <h4 className="font-semibold text-sm">Phones & accessories</h4>
            <p className="text-sm text-gray-500 mt-2">
              Instead of worrying whether you bought a good stuff or not, simply order online from AduKorea's smart shop so that you can rely on years of experience in the market.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between text-sm text-gray-500">
          <p>Copyright © {new Date().getFullYear()} AduKorea</p>
          <p>Powered by Hayal Tech</p>
        </div>
      </div>
    </footer>
  );
}
