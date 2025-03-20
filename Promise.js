const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Success")
    },1000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Success")
    },500)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("failure")
    },500)
})

console.log(p1)
Promise.all([p1,p2,p3]).then(console.log("success")).catch(err=> console.log(err))

Promise.allSettled([p1,p2,p3]).then(console.log("allsettled , success")).catch(err=> console.log("allsetteled" + err))

Promise.race([p1,p2,p3]).then(console.log("race , success")).catch(err=> console.log("race" + err))