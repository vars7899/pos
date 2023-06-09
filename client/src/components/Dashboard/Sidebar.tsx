import { IconBallVolleyball, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { DashboardNavigationList } from "../../navigation/DashboardNavigationList";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setDashboardExpandSidebar } from "../../redux/feature/appSlice";

export const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { dashboardExpandSidebar } = useSelector((state: any) => state.app);

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          width: dashboardExpandSidebar ? 80 : 350,
        }}
        animate={{
          width: dashboardExpandSidebar ? 80 : 350,
          transition: {
            duration: 1.5,
          },
        }}
        className={`relative border-r-[1px] bg-white dark:bg-Black dark:border-black`}
      >
        <div className="flex items-center h-[75px] px-3 text-Black dark:text-neutral-200">
          <div className="p-1.5 rounded-lg flex items-center justify-center">
            <IconBallVolleyball strokeWidth={0.75} size={42} />
          </div>
          <AnimatePresence>
            {!dashboardExpandSidebar ? (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 0.5, 1],
                  transition: {
                    delay: dashboardExpandSidebar ? 1.25 : 0,
                    duration: dashboardExpandSidebar ? 1 : 0,
                  },
                }}
                exit={{ opacity: [0.5, 0], transition: { duration: 0.5 } }}
                className="flex flex-col items-start font-beVietnam pl-2 truncate"
              >
                <p className="pb-[2px]">Register Ox Admin</p>
                <div className="flex items-center">
                  <p className="bg-teal-200 text-teal-600 rounded-sm px-2 py-[2px] text-[8px] font-semibold">beta</p>
                  <p className="text-[8px] pl-1 text-zinc-400">V 1.0.0</p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <motion.div
          whileTap={{ scale: 0.9 }}
          className="absolute top-[28px] right-[-14px] bg-neutral-700 p-1 rounded-full text-white cursor-pointer"
          onClick={() => dispatch(setDashboardExpandSidebar())}
        >
          {!dashboardExpandSidebar ? <IconChevronLeft size={16} /> : <IconChevronRight size={16} />}
        </motion.div>

        <div className="mt-4 px-2.5">
          <div>
            {DashboardNavigationList.map((tab, index) => (
              <div
                key={`tab-${index}`}
                onClick={() => navigate(tab.path)}
                className={`py-4 px-3.5 my-4 rounded-lg flex items-center cursor-pointer ${
                  tab.path === pathname
                    ? "bg-zinc-100 text-zinc-950 dark:bg-neutral-900 dark:text-neutral-200"
                    : "text-slate-700 dark:text-neutral-400"
                } justify-start`}
              >
                <div>{tab.icon}</div>
                <AnimatePresence>
                  {!dashboardExpandSidebar ? (
                    <motion.p
                      initial={{
                        opacity: 0,
                        display: "none",
                      }}
                      animate={{
                        opacity: [0, 0.5, 1],
                        display: "block",
                        transition: {
                          delay: dashboardExpandSidebar ? 1.25 : 0,
                          duration: dashboardExpandSidebar ? 1 : 0,
                        },
                      }}
                      exit={{ opacity: [0.5, 0], transition: { duration: 0.5 } }}
                      className="ml-4 font-medium overflow-hidden whitespace-nowrap"
                    >
                      {tab.name}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
