import { FC } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  id: string;
  title: string;
  Icon: FC<{ className: string; size?: number }>;
}

const AsideNavLink = ({ Icon, id, title, to }: Props) => {
  return (
    <li
      className="border-0 sm:border-b  overflow-hidden border-gray-900 flex-1 sm:w-full"
      title={title}
    >
      <NavLink
        activeClassName="text-orange-400 hover:bg-gray-400 bg-gray-700"
        id={id}
        to={to}
        exact
        className="h-full transition-colors  duration-300  flex justify-center lg:justify-start items-center w-full hover:bg-gray-700  p-3"
      >
        <Icon className="lg:me-4  md:mb-0 text-lg sm:text-xl md:text-2xl" />
        <div className="hidden lg:block">{title}</div>
      </NavLink>
    </li>
  );
};

export default AsideNavLink;
