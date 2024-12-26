import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center w-full bg-white dark:bg-[#010814] my-16">
      <div className="max-w-[1440px] w-full rounded-[16px] mx-4 sm:mx-12 dark:border dark:border-[#4D525A] bg-white dark:bg-gradient-to-r from-[#1E242D] to-[#0B111B] min-h-[300px]">
        <div className="flex justify-between items-center w-full p-4 sm:p-8 dark:border-b dark:border-[#4D525A]">
          <p className="text-black1 dark:text-white font-semibold text-sm">
            Subscription
          </p>
          <div className="flex gap-2 items-center">
            <Avatar className="w-[32px] h-[32px]">
              <AvatarImage src="/assets/avatar.svg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-black1 dark:text-white font-medium text-lg">
              John Dow
            </p>
          </div>
        </div>
        <h1 className="text-black1 dark:text-white font-semibold text-[32px] px-4 sm:px-8 py-4">
          Dashboard
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
