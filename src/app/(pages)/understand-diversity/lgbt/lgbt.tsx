'use client';

import TopicInfo
  from '@/features/understand-diversity/components/TopicInformation';

import data from '../../../../features/understand-diversity/data/lgbt.json';

const Lgbt = () => {
  return <TopicInfo {...data} />;
};

export default Lgbt;
