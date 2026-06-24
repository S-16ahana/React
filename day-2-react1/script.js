import React from "react"
console.log(React)
let root = document.querySelector('#root')


const h1 = React.createElement('h1',{},"Hello this is sahana")

console.log(h1)

ReactDOM.createRoot(root).render(h1)