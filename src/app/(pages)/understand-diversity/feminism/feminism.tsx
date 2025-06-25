'use client';

import TopicInfo
  from '@/features/understand-diversity/components/TopicInformation';

import data from '../../../../features/understand-diversity/data/feminism.json';

const Feminism = () => {
  return <TopicInfo {...data} />;
};

export default Feminism;
