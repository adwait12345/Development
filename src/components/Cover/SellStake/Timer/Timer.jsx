import React from 'react'
import './timer.css'
import { useEffect, useState } from "react";
export default function Timer({Time}) {

    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date(Time);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setPartyTime(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer-wrapper">
            <div className="timer-inner">
                <div className="timer-segment">
                    <span className="timeRequired">{days}</span>
                    <span className="label">Days</span>
                </div>
                <span className="divider"> 	&nbsp;</span>
                <div className="timer-segment">
                    <span className="timeRequired">{hours}</span>
                    <span className="label">Hours</span>
                </div>
                <span className="divider">	&nbsp; </span>
                <div className="timer-segment">
                    <span className="timeRequired">{minutes}</span>
                    <span className="label">Minutes</span>
                </div>
                <span className="divider"> 	&nbsp;</span>
                <div className="timer-segment">
                    <span className="timeRequired">{seconds}</span>
                    <span className="label">Seconds</span>
                </div>
            </div>
        </div>
    )
}