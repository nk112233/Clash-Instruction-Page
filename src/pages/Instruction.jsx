import React from 'react';

const Instruction = () => {
  return (
    <div className="bg-[#001032] flex justify-center items-center h-screen w-screen">
      <div className="flex-col justify-center border-white bg-[#000C26] w-[50vw] h-[30vw] border-[0.1rem] border-solid text-white rounded-[1rem] mt-20 [font-family:'Inter-ExtraBold',Helvetica] font-extrabold">
        <div className="flex justify-center min-w-full">
          <span className="p-2">INSTRUCTIONS</span>
        </div>
        <div className="bg-[#00ffffcc] w-[27.75rem] h-[0.115rem] top-0 left-0 flex justify-center min-w-full max-w-full "></div>
        <div className='flex-col min-w-full max-w-full max-h-full min-w-full p-4 pl-6 '>
          <p className="text-white text-[0.75rem]">
            Round-1: A 28 minute round of MCQs for individuals as well as a team(max 2 people) contenders based on coding concepts in C/C++, Java and python, divided into Juniors and Seniors category. Juniors including F.E’s and S.E's, seniors including T.E’s and B.E’s where you would also be provided with 3 boonful lifelines(description will be provided in the game itself) and the marking scheme would be as follows:- The primary marks allotted are +4 if answered correctly and -2 if the answer for a particular question is incorrect. If a question attempted is incorrect, then from the next question +2 marks are allotted for each correctly answered question, else -1 until you get a correct answer for upcoming questions.
            Round-2: A 2 hour long round where each team or individuals have to solve 6-8 core competitive coding questions. Questions would be a blend of Data-Structures and Algorithms and mind bending Competitive programming Questions which the contenders would have to solve and pave their path to victory. Note: Junior level questions would be comparatively a little less challenging than the Senior level. Languges allowed to code are C/C++, Java and Python. Judging for round 2 will be based on the time and space efficiency of your code to solve the given challenges in restricted time. 
          </p>
        </div>
        <div className="flex justify-center">
          <button className="w-[10rem] h-[2rem] bg-violet-700 rounded-full flex justify-center items-center"><span className="text-center">NEXT</span></button>
        </div>
      </div>
    </div>
  );
};

export default Instruction;