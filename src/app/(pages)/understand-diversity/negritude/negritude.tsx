'use client';

import TopicInfo
  from '@/features/understand-diversity/components/TopicInformation';

import rawData
  from '../../../../features/understand-diversity/data/negritude.json';

const transformData = (data: any) => {
  const sections = [];

  let index = 1;
  while (true) {
    const title = data[`title${index === 1 ? '' : `-${index}`}`];
    const headline = data[`headline${index === 1 ? '' : `-${index}`}`];
    const content = data[`content${index === 1 ? '' : `-${index}`}`];
    const images = data[`images${index === 1 ? '' : `-${index}`}`];

    if (!title || !headline || !content || !images) break;

    sections.push({ title, headline, content, images });
    index++;
  }

  return {
    sections,
    cta: data.cta,
    centerText: data.centerText,
    references: data.references,
  };
};

const Negritude = () => {
  const data = transformData(rawData);
  return <TopicInfo {...data} />;
};

export default Negritude;
