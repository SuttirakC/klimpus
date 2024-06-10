import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Admin from 'layouts/Admin.js';
import CardNotiElec from 'components/Cards/CardNotiElec';
import CardNotiWater from 'components/Cards/CardNotiWater';
import CardNotiAHU from 'components/Cards/CardNotiAHU';
import CardNotiChiller from 'components/Cards/CardNotiChiller';
import CardNotiOther from 'components/Cards/CardNotiOther';

export default function Notification() {
    const router = useRouter();
    const { type } = router.query;
    const [notifications, setNotifications] = useState({
        elec: [],
        water: [],
        ahu: [],
        chiller: [],
        other: []
    });

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch('/api/checkNotifications');
                const data = await response.json();
                // console.log("Data",response);
                const categorized = {
                    elec: data.filter(noti => noti.type === 'elec'),
                    water: data.filter(noti => noti.type === 'water'),
                    ahu: data.filter(noti => noti.type === 'ahu'),
                    chiller: data.filter(noti => noti.type === 'chiller'),
                    other: data.filter(noti => noti.type === 'other'),
                };
                // console.log("Categorized",categorized);
                if (data.length === 0) {
                    setNotifications({
                        elec: [],
                        water: [],
                        ahu: [],
                        chiller: [],
                        other: []
                    });
                    return;
                }
                
                if (data.length > 0) {
                    // alert('New notifications available!');
                    setNotifications(categorized);
                }
            } catch (error) {
                console.error('Error fetching notifications:', error);
                // Reset notifications to empty if there's an error
                setNotifications({
                    elec: [],
                    water: [],
                    ahu: [],
                    chiller: [],
                    other: []
                });
            }
        };

        const interval = setInterval(() => {
            fetchNotifications();
        }, 100); // Check every 10 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (type) {
            document.getElementById(type)?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [type]);

    return (
        <>
            <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                <a className="text-white text-2xl uppercase hidden lg:inline-block font-semibold">
                    Notification
                </a>
            </div>

            <div className="carousel w-full rounded-box mt-8">
                <div id="elec" className="carousel-item w-full lg:w-5/12 xl:w-5/12 px-2">
                    <CardNotiElec notifications={notifications.elec} />
                </div>
                <div id="water" className="carousel-item w-full lg:w-5/12 xl:w-5/12 px-2">
                    <CardNotiWater notifications={notifications.water} />
                </div>
                <div id="chiller" className="carousel-item w-full lg:w-5/12 xl:w-5/12 px-2">
                    <CardNotiChiller notifications={notifications.chiller} />
                </div>
                <div id="ahu" className="carousel-item w-full lg:w-5/12 xl:w-5/12 px-2">
                    <CardNotiAHU notifications={notifications.ahu} />
                </div>
                <div id="other" className="carousel-item w-full lg:w-5/12 xl:w-5/12 px-2">
                    <CardNotiOther notifications={notifications.other} />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#elec" className="btn btn-xs">1</a>
                <a href="#water" className="btn btn-xs">2</a>
                <a href="#chiller" className="btn btn-xs">3</a>
                <a href="#ahu" className="btn btn-xs">4</a>
                <a href="#other" className="btn btn-xs">5</a>
            </div>
        </>
    );
}

Notification.layout = Admin;
