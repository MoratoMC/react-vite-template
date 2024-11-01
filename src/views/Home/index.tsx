import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import reactLogo from '@/assets/react.svg';
import SwitchDark from '@/components/SwitchDark';

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-load');

    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in-right');
      }, index * 200); // 每个元素增加0.2秒的延迟
    });
  }, []);

  return (
    <>
      <div className="w-full flex-center flex-col px-[12px] box-border">
        <img
          src={reactLogo}
          className="w-[120px] mx-auto mb-[20px] mt-[30px] block hover:drop-shadow-[0_0_2em_#61dafbaa]"
          alt="React logo"
        />
        <div className="mb-[10px] text-[24px] lh-none">React-Template</div>
        <div className="w-full m2 flex-center">
          <div className="ml-4">
            <SwitchDark />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
