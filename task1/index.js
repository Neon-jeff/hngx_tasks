const express=require('express')

const app=express()

const NPORT=process.env.PORT?process.env.PORT:3000

app.get('/api/',(req,res)=>{
    let date=new Date()
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const slack_name=req.query.slack_name
    const track=req.query.track
    const obj = {
      slack_name,
      track,
      current_day: weekday[date.getUTCDay()],
      utc_time: date,
      status: 200,
      github_repo_url: "https://github.com/Neon-jeff/hngx_tasks",
      github_file_url:
        "https://github.com/Neon-jeff/hngx_tasks/blob/main/task1/index.js",
    };
    res.status(200).json(obj)
})

app.listen(NPORT,()=>{
    console.log("Server Running");
})

