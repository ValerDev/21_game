let crtPly = 0;
let num = document.querySelector(".number")
document.querySelectorAll(".select").forEach(e => {
    e.onclick = () => {
        e.classList.toggle("selected")
        document.querySelectorAll(".popup-background")[0].classList.add("hide")
        setTimeout(() => {
            document.querySelectorAll("main")[0].style.display = "flex";
            document.querySelectorAll(".popup-background")[0].style.display = "none";
            createPlayer(e.id)
        }, 100)
    }
})
let tmp = `
    <div class="player">
            <div class="add">+ 1</div>
            <div class="add two">+ 2</div>
            <div class="add three">+ 3</div>
    </div>
`

const createPlayer = (count) => {
    let parent = document.querySelector(".players");
    for (let i = 0; i < count; i++) {
        let childDiv = document.createElement('div')
        childDiv.setAttribute("id", i)
        childDiv.innerHTML = tmp
        parent.appendChild(childDiv);
    }
    currentPlayer(count)
}

const currentPlayer = async (count) => {
    await createPlayer
    document.querySelectorAll(".player")[crtPly].classList.add("current")

    document.querySelectorAll(".player .add").forEach(e => {
        e.onclick = () => {
            num.innerText = +num.innerText + +e.innerText.split(" ")[1]
            if (crtPly === count - 1) {
                document.querySelectorAll(".player")[crtPly].classList.remove("current")
                crtPly = 0
                document.querySelectorAll(".player")[crtPly].classList.add("current")
            } else {
                document.querySelectorAll(".player")[crtPly].classList.remove("current")
                crtPly++
                document.querySelectorAll(".player")[crtPly].classList.add("current")
            }
            currentPlayer(count)
            checkValue(e.parentElement.parentElement.id)
        }
    })
}

const checkValue = async (id) =>{   
    
    await currentPlayer
    document.querySelectorAll(".player .add").forEach(e => {
      if(21 - +num.innerText < +e.innerText.split(' ')[1]){
          e.classList.add('block')
        console.log(e)
      }
     let time = setTimeout(()=>{
         if(+num.innerText === 21){
            document.querySelectorAll(".winner h1")[0].innerText = `player ${+id+1} lose`;
             document.querySelectorAll(".winner")[0].classList.add("winner-open");
           }
        },500) 
    })

}

const replay = () =>{
    location.reload()
}
