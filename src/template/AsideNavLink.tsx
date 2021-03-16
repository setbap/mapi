import { FC } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  id: string;
  title: string;
  Icon: FC<{ className: string; size?: number }>;
  onClick: VoidFunction;
}

const AsideNavLink = ({ Icon, id, title, to, onClick }: Props) => {
  return (
    <li
      onClick={onClick}
      className=" min-w-max  overflow-hidden  flex-1 sm:w-full"
      title={title}
    >
      <NavLink
        activeClassName="text-orange-400 hover:bg-orange   "
        id={id}
        to={to}
        exact
        className="h-full transition-colors text-black hover:text-white  duration-300  flex justify-start items-center w-full hover:bg-gray-700  p-3"
      >
        <Icon className="me-4  md:mb-0 text-2xl" />
        <div className="">{title}</div>
      </NavLink>
    </li>
  );
};

export default AsideNavLink;
