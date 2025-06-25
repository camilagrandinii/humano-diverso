'use client';

import PersonalInfo from './PersonalInfo';

const TeamInfo = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 place-items-center">
        <PersonalInfo />
      </div>
    </section>
  );
};

export default TeamInfo;
