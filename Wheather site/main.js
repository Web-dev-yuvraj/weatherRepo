window.addEventListener('load' , ()=> {
    let long;
    let lat;
    let TemparetureDescription = document.querySelector(".temperature-description");
    let TemparetureDegree = document.querySelector(".temperature-degree");
    let LocatioTimezone = document.querySelector(".location-timezone"); 
    
    
    setInterval(() => {
        a = new Date();
        let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
        document.getElementById('time').innerHTML = time;
    }, 1000);
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position =>{
             console.log(position);
             long = position.coords.longitude;
             lat = position.coords.latitude;

             const proxy = "https://cors-anywhere.herokuapp.com/"
             const api = ` ${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
         
             fetch(api)
             .then(response =>{
              return response.json();
            })
            .then(data =>{
             console.log(data)
             const {temperature,summary,icon} = data.currently;
             TemparetureDegree.textContent =  ((parseInt(temperature) - 32) * 5/9).toFixed(0);
             TemparetureDescription.textContent = summary;
             LocatioTimezone.textContent = data.timezone;

             setIcons(icon,document.querySelector('.icon'));

             });
             
        }); 
    }
    function setIcons(icon,iconID){
        const skycons = new Skycons({color : "white"});
        const currentIcon = icon.replace(/-/g,"_").toUpperCase();
        skycons.play();
        return skycons.set(iconID,Skycons[currentIcon]);
    }
});
