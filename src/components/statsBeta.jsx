import React, { PureComponent } from "react";

const StatsBeta = () => {
  return (
    <div class="w-1/4 grid col-span-4 relative m-2 ">
      <a
        class="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9"
        href=""
      >
        <p class="text-2xl font-bold text-gray-500 group-hover:text-gray-700 font-lora">
          {" "}
          View repositories with Code in Jira{" "}
        </p>

        <p class="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6">
          {" "}
          Include an issue key in a commit, branch name, or PR, and it will
          automatically update in Jira.{" "}
        </p>

        <div class="bg-blue-400 group-hover:bg-blue-600 h-full w-4 absolute top-0 left-0">
          {" "}
        </div>
      </a>
    </div>
  );
};

export default StatsBeta;
