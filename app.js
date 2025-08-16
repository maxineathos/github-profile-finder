const URL =  "https://api.github.com/users/maxineathos"
fetch(URL)
.then(res=>res.json())
.then(data=>{
    console.log(data)
})
