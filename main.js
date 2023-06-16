let words=[['brown','fox','jumped','high'],
['tall','fence','stops','theives'],
['fat','dude','ate','fries'],
['hard','ball','sped','fast']]
let topPercent=[2,26.5,51,75.5]
let colors=['yellow','green','red','blue']

//on click: randomly assign top from topPercemt to tiles in one column
function move(a){
  let arrToShuffle=topPercent.slice()
  for(let i=4;i>0;i--){
    let tile = document.querySelector(`#colRow${a}${i}`)
    let randomIndex=Math.floor(Math.random()*i)
    tile.style.setProperty('top',`${arrToShuffle.splice(randomIndex,1)}%`)
  }
}

//create tiles with position,color,word and eventlistener
for(let row=1;row<=4;row++){
  for(let col=1;col<=4;col++){
    let tile=document.createElement('div')
    let text=document.createTextNode(words[row-1][col-1])
    tile.appendChild(text)
    tile.id=`colRow${col}${row}`
    tile.style.top=`${topPercent[row-1]}%`
    tile.style.left=`${topPercent[col-1]}%`
    tile.style.backgroundColor=`${colors[row-1]}`
    tile.addEventListener('click',()=>move(col))
    document.getElementById('container').appendChild(tile)
  }
}

//TO DO:  USER INPUT FOR WORDS AND NUMBER OF ROWS
// PUT ARTICLES BETWEEN WORDS FOR BETTER SYNTAX
// TILES CIECLE BACK LIKE SLOT MACHINE

