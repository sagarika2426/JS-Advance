// YT API Key:  AIzaSyCr2s5l2INpifURShX1qJ2A2_5V_94_2o0
// URL : 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=Animal&key=[YOUR_API_KEY]'
// Fetch()

// let api_key = "AIzaSyCr2s5l2INpifURShX1qJ2A2_5V_94_2o0"
let api_key = "AIzaSyBD-qB9pGvybl3EiOgQTO_c7pLwb6rzMm8"

// Append the data on Dom

let append = (data) => {
    let container = document.getElementById("results");
    container.innerHTML = null;
    // console.log(container);
    
    // if (data === undefined){
    //     return false;
    // }

    // console.log(data);

     data.forEach(({ id: {videoId}, snippet: {title, thumbnails}}) =>{
        let div = document.createElement("div")
        // if we want to access only video id which is present in id and title in snippet
        // console.log(videoID, title);
       
        // let img = document.createElement("img");
        // img.src = thumbnails.default.url;

        let iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube.com/embed/" + videoId;
        iframe.allow = "fullscreen"

        let h4 = document.createElement("h4");
        h4.innerText = title;

        div.append(iframe, h4);
        // div.onclick= () =>{
        //     playvideo()
        // }
        container.append(div);
     });


};

// let playvideo = (video)=>{
//     window.location.href = "video.html"
// }


let search = async () =>{
    try {
        let query = document.getElementById("query").value
        let url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=" + query +"&key=" + api_key;

        let res =await fetch(url);
        let data = await res.json();
        append(data.items);
        // console.log(data);
    } catch (error) {
        console.log("error:", error);
        let container= document.getElementById("results")
        container.innerText = "API Limit Reached. Please try again tomorrow :)";
    }
}

search();


// <iframe width="560" height="315" 
// src="https://www.youtube.com/embed/tbMtenwxgcY?si=EEYmcdrPKEgfnPUU" ---video id
// title="YouTube video player" 
// frameborder="0" 
// allow="accelerometer;
// autoplay; clipboard-write;
//  encrypted-media; gyroscope; 
// picture-in-picture; 
// web-share" allowfullscreen></iframe>





