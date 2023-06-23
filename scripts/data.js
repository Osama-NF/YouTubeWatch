import { API_KEY } from "../SECRET/secret"
const PLAYLIST_ID = 'PL4HFDpJb5YE9zNYmFDFkFztYtxBm8UkO9'
const MAX_RESULT = '200'
let API_CALL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${MAX_RESULT}&playlistId=${PLAYLIST_ID}&key=${API_KEY}`

export default dummyData = [
    {
        thumbnail: 'https://i.ytimg.com/vi/ZsiRmIGGGno/mqdefault.jpg',
        title: 'Interview with dude',
        YTID: 'W6F7vPMdsLw',
        last: 0,
        full_length: 2000
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/ZsiRmIGGGno/mqdefault.jpg',
        title: 'Lecture on something @university',
        YTID: 'mc33$vnsdfuerv',
        last: 2000,
        full_length: 2000
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/ZsiRmIGGGno/mqdefault.jpg',
        title: 'math explained | fractions',
        YTID: 'mgr5vnjuerv',
        last: 0,
        full_length: 2000
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/ZsiRmIGGGno/mqdefault.jpg',
        title: 'Lets talk about AI w\\dude',
        YTID: 'mgr5vnjusssxfv342425serv',
        last: 53,
        full_length: 2000
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/ZsiRmIGGGno/mqdefault.jpg',
        title: 'The man that did the thing while the time was sometime on thing with thing one two three long title here does this show i wonder',
        YTID: 'mgr5vnjuwerwr23erv',
        last: 1200,
        full_length: 2000
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/ZsiRmIGGGno/mqdefault.jpg',
        title: "اهلا وسهلا ",
        YTID: "w2ifba5_1qI",
        last: 0,
        full_length: 2000
    }
]


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