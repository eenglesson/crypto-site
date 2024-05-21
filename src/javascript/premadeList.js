import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { BiWallet } from 'react-icons/bi';
import { FiCompass } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';

export const navItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: MdOutlineSpaceDashboard,
  },
  {
    label: 'Wallet',
    path: '/wallet',
    icon: BiWallet,
  },
  {
    label: 'Discover',
    path: '/discover',
    icon: FiCompass,
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: FiSettings,
  },
];
