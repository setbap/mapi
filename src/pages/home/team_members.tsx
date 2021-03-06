import { RiUserSmileLine } from "react-icons/ri";

// interface Props {}

const TeamMember = () => {
  return (
    <div className="container mx-auto my-12">
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
        <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
          اعضای تیم
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {new Array(20)
            .fill({ fullname: "سینا سینایی", post: "بیکار" })
            .map((data, index) => {
              return (
                <TeamMemberItem
                  key={index}
                  fullname={data.fullname}
                  post={data.post}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default TeamMember;

interface ITeamMemberItemProps {
  fullname: string;
  post: string;
}

const TeamMemberItem = ({ fullname, post }: ITeamMemberItemProps) => {
  return (
    <div className="p-4">
      <div className="flex-col  flex justify-center items-center">
        <div className="flex-shrink-0">
          <div className="block relative">
            <RiUserSmileLine size={64} className="text-orange-400" />
          </div>
        </div>
        <div className="mt-2 text-center flex flex-col">
          <span className="text-gray-600 dark:text-white text-lg font-medium">
            {fullname}
          </span>
          <span className="text-gray-400 text-xs">{post}</span>
        </div>
      </div>
    </div>
  );
};
