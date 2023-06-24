import { forumData } from "../data/forumData";
import Avatar from "./Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const { name, username, picUrl } = forumData;
  return (
    <section className="flex h-full flex-col justify-between">
      <section className="flex flex-col gap-2">
        <SideBarLink linkName="Home" iconName={faHouse} />
        <SideBarLink linkName="Explore" iconName={faCompass} />
        <SideBarLink linkName="Bookmarks" iconName={faBookmark} />
        <SideBarLink linkName="Profile" iconName={faUser} />
      </section>
      <div className="flex items-center gap-2">
        <Avatar imgUrl={picUrl} />
        <div className="text-sm">
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500">@{username}</p>
        </div>
      </div>
    </section>
  );
}

function SideBarLink({ linkName, iconName }) {
  return (
    <NavLink
      to="/"
      className={`${
        linkName === "Home" ? "font-semibold" : ""
      } flex items-center gap-2 text-lg`}
    >
      <FontAwesomeIcon icon={iconName} className="h-4 w-4" />
      <p>{linkName}</p>
    </NavLink>
  );
}
