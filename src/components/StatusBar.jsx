import { useEffect, useState } from 'react'


//현재 시간 + 배터리 상태

function StatusBar() {


    const [time,setTime]=useState("");

    const [battery,setBattery]=useState(null);


    
    useEffect(() => {

        function updateTime() {

            const now = new Date();

            const currentTime = now.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            });

            setTime(currentTime);
        }


        //처음 실행 시 시간 표시
        updateTime();


        //1초 기준 갱신
        const timer = setInterval(updateTime, 1000);


       
        return () => clearInterval(timer);

    }, []);


    //처음 실행 시 배터리 표시
    useEffect(() => {

        //*주의* 현재 브라우저가 배터리 기능을 지원하지 않으면 실행X
        if (!navigator.getBattery) {
            return;
        }


        let batteryManager;
        let updateBattery;


        async function loadBattery() {

            
            batteryManager = await navigator.getBattery();


        
            updateBattery = () => {

                
                const batteryLevel =
                    Math.round(batteryManager.level * 100);

                setBattery(batteryLevel);
            };


            updateBattery();


            batteryManager.addEventListener(
                'levelchange',
                updateBattery
            );
        }


        loadBattery();


        return () => {

            if (batteryManager && updateBattery) {

                batteryManager.removeEventListener(
                    'levelchange',
                    updateBattery
                );
            }
        };

    }, []);


    return (

        <div className='statusBar'>

            <span>{time}</span>

            <div className='statusRight'>

              
                <span className='signal'>  ●●● </span>
                <span> {battery !== null ? battery + "%" : "--"} </span>

            </div>

        </div>
    )
}


export default StatusBar