setInterval(() => {
  
  let timefrompc=new Date()
  Time_in_Html.innerHTML=timefrompc.toLocaleTimeString()
  
  }, 1000);
  
  
  function setAlarm(){
    let h=hoursHtml.value;
    let m=minutesHtml.value;
    setAlarmtime.innerHTML=h+":"+m+":00"
  }
  
  
  let checkInterval=setInterval(() => {
    let alarmtime=setAlarmtime.innerHTML;
    alarmtime=alarmtime.split(":")
    let alarmhours=alarmtime[0];
    let alarmminutes=alarmtime[1];
    let systemTime=new Date();
    let systemhours=systemTime.getHours();
    let systemmenutes=systemTime.getMinutes();
    if(systemhours>12){
      systemhours=systemhours-12;
    }
    if(alarmhours==systemhours && alarmminutes==systemmenutes){
      alarmImage.src="/alarm.gif"
      alarmSound.play()
      alarmSound.loop="true"
      clearInterval(checkInterval)
    }
  }, 1000);