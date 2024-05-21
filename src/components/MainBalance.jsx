import React from 'react';

function MainBalance() {
  const classes = `p-[6px_16px] rounded-[6px] text-n-8 font-semibold  cursor-pointer hover:text-n-10 hover:underline`;

  return (
    <>
      <section className='flex items-center justify-between'>
        <aside className='flex flex-col gap-[8px]'>
          <h2 className='text-n-8/90 font-medium text-[20px]'>Total balance</h2>
          <span className='text-n-7 font-bold text-[40px]'>$ 123,412.03</span>
        </aside>
        <div className='flex justify-between items-center gap-[8px] bg-n-1/60 w-content max-h-[40px] text-[16px] rounded-[8px] p-[6px] shadow-mini'>
          <aside className={classes}>Portfolio</aside>
          <aside className={classes}>Funding</aside>
          <aside className={classes}>Assets</aside>
          <aside className={classes}>P2P</aside>
        </div>
      </section>
    </>
  );
}

export default MainBalance;
