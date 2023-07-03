import { API_KEY } from "../SECRET/secret"
const PLAYLIST_ID = 'PL4HFDpJb5YE9zNYmFDFkFztYtxBm8UkO9'
const MAX_RESULT = '200'
let API_CALL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${MAX_RESULT}&playlistId=${PLAYLIST_ID}&key=${API_KEY}`

export async function getPlayListData() {
    let data = await fetch(API_CALL,{
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        }
    })
    let JSONdata = await data.json()
    
    return reformatData(JSONdata['items'])
}

function reformatData(arr) {
    let newData = []
    arr.forEach(item => {
        newData.push({
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
            ytid: item.snippet.resourceId.videoId
        })
    })
    return newData
}