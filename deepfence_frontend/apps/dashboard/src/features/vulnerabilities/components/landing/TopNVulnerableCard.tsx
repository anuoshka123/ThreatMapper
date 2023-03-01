import { HiArrowSmRight } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import { Card, CircleSpinner } from 'ui-components';

import { DFLink } from '@/components/DFLink';
import {
  TopNVulnerableChart,
  TopNVulnerableChartData,
} from '@/features/vulnerabilities/components/landing/TopNVulnerableChart';
import { useTheme } from '@/theme/ThemeContext';

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center absolute inset-0">
      <CircleSpinner size="xl" />
    </div>
  );
};

export const TopNVulnerableCard = ({
  data,
  loading,
  title,
  link,
}: {
  data: Array<TopNVulnerableChartData>;
  loading?: boolean;
  title: string;
  link: string;
}) => {
  const { mode } = useTheme();
  return (
    <Card className="w-full py-2 px-3 flex flex-col relative">
      <div className="flex">
        <h4 className="flex-1 text-gray-900 text-md dark:text-white truncate">{title}</h4>
        <DFLink
          to={link}
          className="shrink-0 flex items-center justify-end hover:no-underline active:no-underline focus:no-underline ml-auto mr-2"
        >
          <span className="text-xs text-blue-600 dark:text-blue-500">Go to Scans</span>
          <IconContext.Provider
            value={{
              className: 'text-blue-600 dark:text-blue-500 ',
            }}
          >
            <HiArrowSmRight />
          </IconContext.Provider>
        </DFLink>
      </div>
      <div className="basis-60">
        {!loading && <TopNVulnerableChart theme={mode} data={data} />}
      </div>
      {loading && <LoadingComponent />}
    </Card>
  );
};
