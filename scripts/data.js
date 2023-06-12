import { API_KEY } from "../SECRET/secret"
const PlaylistId = 'PL4HFDpJb5YE9zNYmFDFkFztYtxBm8UkO9'
let API_CALL = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + PlaylistId + '&key=' + API_KEY

export default dummyData = [
    {
        thumbnail: 'https://i.ytimg.com/vi/ZsiRmIGGGno/mqdefault.jpg',
        video: 'Interview with dude',
        id: 'W6F7vPMdsLw',
        last: 0,
        fullLength: 2000
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/ZsiRmIGGGno/mqdefault.jpg',
        video: 'Lecture on something @university',
        id: 'mc33$vnsdfuerv',
        last: 2000,
        fullLength: 2000
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/ZsiRmIGGGno/mqdefault.jpg',
        video: 'math explained | fractions',
        id: 'mgr5vnjuerv',
        last: 0,
        fullLength: 2000
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/ZsiRmIGGGno/mqdefault.jpg',
        video: 'Lets talk about AI w\\dude',
        id: 'mgr5vnjusssxfv342425serv',
        last: 53,
        fullLength: 2000
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/ZsiRmIGGGno/mqdefault.jpg',
        video: 'The man that did the thing while the time was sometime on thing with thing one two three long title here does this show i wonder',
        id: 'mgr5vnjuwerwr23erv',
        last: 1200,
        fullLength: 2000
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/ZsiRmIGGGno/mqdefault.jpg',
        video: "اهلا وسهلا ",
        id: "w2ifba5_1qI",
        last: 0,
        fullLength: 2000
    }
]


// not used yet
async function getPlayListData() {
    let data = await fetch(API_CALL,{
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        }
    })
    let JSONdata = await data.json()
    console.warn(JSONdata)
}