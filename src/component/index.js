function One (){
return(
   
    fetch('https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=fe9d7fb9909efd59085a7fb2570342bc&units=metric')
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })
      .catch((err) => {
        console.log(err)
      })
);

}
export default One;