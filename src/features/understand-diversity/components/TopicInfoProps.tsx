type TopicInfoProps = {
  cta?: {
    text: string;
    link: string;
  };
  centerText?: {
    title: string;
    description: string;
  };
  references?: PersonReference[];
  sections: TopicSection[];
};
