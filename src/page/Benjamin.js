import React, { useEffect, useState } from 'react'

function Benjamin() {
    const [time, setTime] = useState('');
    useEffect(() => {
        const reverse = setInterval(() => {
            const date = new Date();
            let h = 23 - date.getHours();
            let m = 59 - date.getMinutes();
            let s = 59 - date.getSeconds();
            let session = "AM";
            if (h === 0) {
                h = 12;
            }
            if (h > 12) {
                h = h - 12;
                session = "PM";
            }
            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;

            setTime(h + ":" + m + ":" + s + " " + session);
        }, 1000);
        return () => clearInterval(reverse);
    }, []);

    return (
        <>
            
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#d83546] text-6xl font-bold text-center'><p className='text-xl'>Benjamin's Clock</p>{time}</div>
        </>
    )
}

export default Benjamin