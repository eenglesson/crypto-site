import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { BiWallet } from 'react-icons/bi';
import { FiCompass } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';

export const navItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: MdOutlineSpaceDashboard, // Optional: if you want to include icons
  },
  {
    label: 'Wallet',
    path: '/wallet',
    icon: BiWallet, // Optional: for icon support
  },
  {
    label: 'Discover',
    path: '/discover',
    icon: FiCompass, // Optional: to visually enhance the nav items
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: FiSettings,
  },
];
