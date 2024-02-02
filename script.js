const amleftScrollBtn = document.getElementById("amleftBtn")
const amrightScrollBtn = document.getElementById("amRightBtn")
const allMovies = document.getElementsByClassName("allMovies")[0];
const mleftScrollBtn = document.getElementById("mleftBtn")
const mrightScrollBtn = document.getElementById("mRightBtn")
const mMovies = document.getElementsByClassName("mMovies")[0];
const sleftScrollBtn = document.getElementById("sleftBtn")
const srightScrollBtn = document.getElementById("sRightBtn")
const sMovies = document.getElementsByClassName("sMovies")[0];
const poster = document.getElementsByClassName("pSection")[0];
const mDetails = document.getElementsByClassName("mDetails")[0];
const navMovie = document.getElementById("navMovie")
const navSeries = document.getElementById("navSeries")
const navHome = document.getElementById("navHome")
const allmovieContainer = document.getElementsByClassName("allMoviescontainer")[0]
const movieContainer = document.getElementsByClassName("movies")[0]
const seriesContainer = document.getElementsByClassName("Series")[0]
const profile = document.getElementsByClassName("profile")[0]
const Sidebar = document.getElementsByClassName("impLinks")[0]

// search Fitering

const Search_Box = document.getElementById("Search-Box")
const Search_field= document.getElementsByClassName("searchField")[0];
const mobsearchBTn = document.getElementsByClassName("mobsearchBTn")[0];
const searchContainer = document.getElementsByClassName("search")[0];
const searchBack = document.getElementById("searchBack")


searchContainer.classList.remove("search")
    searchContainer.classList.add("displaycontrol")

mobsearchBTn.onclick =() =>{

  if(searchContainer.classList.contains("search")){
    searchContainer.classList.remove("search")
    searchContainer.classList.add("displaycontrol")
    searchContainer.style.display="none"
    Search_Box.value=''
  }

  else{
    searchContainer.classList.add("search")
    searchContainer.style.display="flex"
    searchContainer.classList.add("displaycontrol")
    Search_Box.value=''
    searchContainer.classList.remove("displaycontrol")
  }
  console.log("click")
}
searchBack.onclick =() =>{
  Search_Box.value=''

}

if(mobsearchBTn.style.display==="none"){
  searchContainer.classList.add("search")
  Search_Box.value=''
  searchContainer.classList.remove("displaycontrol")
}

if(mobsearchBTn.style.display!=="none"){
 profile.onclick =() =>{
  if(Sidebar.classList.contains("impLinks")){
    Sidebar.classList.remove("impLinks")
    Sidebar.style.display="none"
    Sidebar.classList.add("displaycontrol")
    console.log("true")
  }

  else{
    Sidebar.classList.add("impLinks")
    searchContainer.style.display="none"
    Sidebar.style.display="flex"
    Sidebar.classList.remove("displaycontrol")
  }
  console.log("Profile")
 }
}

let data= []
Search_Box.addEventListener("keyup",(e) =>{
  const filterdata= data.filter(element =>{
  return element.name.toLowerCase().includes(Search_Box.value.toLowerCase()) ||
    element.date.toLowerCase().includes(Search_Box.value.toLowerCase()) })
      let sLenght= (Search_Box.value).trim()
   console.log(sLenght.length)
      if(sLenght.length > 0){
      // console.log("hi")
      // console.log(filterdata)
    displaySearch(filterdata)

    }
    if(sLenght.length === 0){
      Search_field.innerHTML=""
      console.log("bye")
      // console.log(sLenght.length)
    }

  })

const displaySearch = (searchData) =>{
  console.log(searchData.length)
  if(searchData.length > 1){
    searchData.forEach(element =>{
      findSearchElement(element)
      
    })
 }
 else if(searchData.length === 0){
  Search_field.innerHTML=""
  console.log("bye")
  // console.log(sLenght.length)
}

 else{
  searchData.forEach(element =>{
    console.log(element.length)
    Search_field.innerHTML=""
    findSearchElement(element)
    
  })
 }


}

const  findSearchElement = (element)=>{
  search_container= document.createElement('a')
  search_container.classList.add['class']
  search_container.innerHTML= ` <a href="#pPoster" class="card"> <img src="${element.sposter}" alt="">
  <h3 class="mName">${element.name}</h3>`
  search_container.onclick= () =>{
    posterdata(element) 
    console.log("click")

  }
  Search_field.appendChild(search_container) 
}


amleftScrollBtn.onclick = () => {
  allMovies.scrollLeft -= 100
}
amrightScrollBtn.onclick = () => {
  allMovies.scrollLeft += 100
  console.log("right")
}
mleftScrollBtn.onclick = () => {
  mMovies.scrollLeft -= 100
}
mrightScrollBtn.onclick = () => {
  mMovies.scrollLeft += 100
  console.log("right")
}
sleftScrollBtn.onclick = () => {
  sMovies.scrollLeft -= 100
}
srightScrollBtn.onclick = () => {
  sMovies.scrollLeft += 100
  console.log("right")
}

window.onload = () => {
  fectchAllmovies()
  fectchmovies()
  fectchseries()
  navContrl()
  // posterControl()
}

async function fectchAllmovies() {
  let data = await fetch("movie.json").then(Response => Response.json())
  data.forEach(element => {
    let card = document.createElement('a')
    card.classList.add('card')
    card.innerHTML = `<a href="#pPoster" class="card"> <img src="${element.sposter}"> <h3 class="mName">${element.name}</h3></a>`
    allMovies.appendChild(card)
    card.onclick= () =>{
      posterdata(element)
     }
  });

}
async function fectchmovies() {
   data = await fetch("movie.json").then(Response => Response.json())
  data.forEach(element => {
    let card = document.createElement('a')
    card.classList.add('card')
    if(element.type==="movie"){
      card.innerHTML = `<a href="#pPoster" class="card"> <img src="${element.sposter}"> <h3 class="mName">${element.name}</h3></a>`
      mMovies.appendChild(card)
    }
    card.onclick= () =>{
      posterdata(element) 
      console.log("click")

    }
  });

}
async function fectchseries() {
  let data = await fetch("movie.json").then(Response => Response.json())
  data.forEach(element => {
    let card = document.createElement('a')
    card.classList.add('card')
    if(element.type==="series"){
      card.innerHTML = `<a href="#pPoster" class="card"> <img src="${element.sposter}"> <h3 class="mName">${element.name}</h3></a>`
      sMovies.appendChild(card)
    }
    card.onclick= () =>{
      posterdata(element) 
      console.log("click")

    }
  });

}


let posterdata = (element) =>{
  poster.innerHTML = ` <div class="pPoster"><img src="${element.bposter}" id="pPoster"></div>
<div class="mDetails">
   <h2 id="mName">${element.name}</h2>
   <p id="description">${element.description}</p>
       <div class="imdb">
           <h5 id="genre">${element.genre}</h5>
           <h5 id="rDate">${element.date}</h5>
           <h5 id="Rating">imdb <span id= "imdbRating">${element.imdb}</span></h5>

       </div>
</div>`
}


let navContrl = () =>{
  navMovie.onclick=() =>{
    allmovieContainer.style.display= "none"
    seriesContainer.style.display= "none"
    movieContainer.style.display= "block"
  
  }
  navSeries.onclick=() =>{
    allmovieContainer.style.display= "none"
    movieContainer.style.display= "none"
    seriesContainer.style.display= "block"
  
  }
  navHome.onclick=() =>{
    allmovieContainer.style.display= "block"
    seriesContainer.style.display= "block"
    movieContainer.style.display= "block"
  
  }

}