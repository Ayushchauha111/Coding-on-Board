// console.log('start')

// setTimeout(()=>
// {
// console.log('2 minute')
// },2000)
// setTimeout(() => {
//     console.log('0 minute')
// }, 0)


// console.log('end')


const request= require('request')

const url="https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&%20exclude=hourly,daily&appid=5b6b2f89fef6bbdf10792c33c1786e09";

// request({url:url},(error,response)=>
// {
//    const data =JSON.parse(response.body)
//    console.log(data.daily)

// })

//we using json function of reequewst modules which gives us auto json file

// request({url:url,json:true},(error,response)=>
// {
//     console.log(response.body.current)
// })

// goal print a small forecast to the user

// print :"it is currently 58.55 degree and there is o% chance of rain"
request({url:url,json:true},(error,response)=>
{
console.log(response.body.current.temp)
})

//test youru work