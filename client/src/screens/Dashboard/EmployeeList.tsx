import { useNavigate } from "react-router-dom";
import { IconPlus } from "@tabler/icons-react";
import * as Hooks from "../../hooks";
import * as Layout from "../../layouts";
import * as Component from "../../components";

export const EmployeeList: React.FC = () => {
  const navigate = useNavigate();
  const { currentTab, tabButtons } = Hooks.useTabs([
    { title: "all employees", component: <Component.Employee.AllEmployeeList /> },
    { title: "alumnus", component: <div>2</div> },
  ]);

  return (
    <Layout.DashboardLayout isLoading={false}>
      <div className="bg-white dark:bg-Black px-6 pt-6">
        <Component.Default.BreadCrumb />
        <div className="flex items-start justify-between mt-4">
          <div>
            <p className="capitalize text-4xl font-medium dark:text-neutral-200">Employee List</p>
            <p className="mt-4 max-w-6xl text-neutral-800 dark:text-neutral-400">
              Employees can be filtered and sorted by their roles in a list of employees that can be filtered by their
              roles This makes it easier to find and assign tasks to the right people. It also helps managers to keep
              track of employee progress and performance. This helps to increase efficiency and productivity in the
              workplace.
            </p>
          </div>
          <Component.Default.Button
            className="flex items-center justify-center"
            onClick={() => navigate("/dashboard/employee/create")}
          >
            <div className="flex items-center text-sm">
              <IconPlus size={20} />
              <p className="ml-2 tracking-wider">Add Employee</p>
            </div>
          </Component.Default.Button>
        </div>
        <div>{tabButtons}</div>
      </div>
      <div className="p-6">{currentTab}</div>
    </Layout.DashboardLayout>
  );
};
