import { API_KEY } from "../SECRET/secret"
let API_CALL = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL4HFDpJb5YE9zNYmFDFkFztYtxBm8UkO9&key=' + API_KEY

export default dummyData = [
    {
        video: 'Interview with dude',
        id: 'mc@$vnjuerv',
        last: 0
    },
    {
        video: 'Lecture on something @university',
        id: 'mc33$vnsdfuerv',
        last: 0
    },
    {
        video: 'math explained | fractions',
        id: 'mgr5vnjuerv',
        last: 0
    },
    {
        video: 'Lets talk about AI w\\dude',
        id: 'mgr5vnjusssxfv342425serv',
        last: 53
    },
    {
        video: 'The man that did the thing while the time was sometime on thing with thing one two three long title here does this show i wonder',
        id: 'mgr5vnjuwerwr23erv',
        last: 1200
    },
    {
        video: "react native yt player",
        id: "w2ifba5_1qI",
        last: 0
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