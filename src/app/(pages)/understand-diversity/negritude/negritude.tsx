'use client';

import TopicInfo
  from '@/features/understand-diversity/components/TopicInformation';

import data
  from '../../../../features/understand-diversity/data/negritude.json';

const Negritude = () => {
  return <TopicInfo {...data} />;
};

export default Negritude;
