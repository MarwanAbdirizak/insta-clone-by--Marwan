import { v4 as uuidv4 } from 'https://jspm.dev/uuid';



const posts = [
    {
        name: "_lanter._.quiver_",
        username: "vincey1853",
        location: "Mr.G.",
        avatar: "images/marwan.2.jpg",
        post: "images/marwan.1.jpg",
        replies: [        {
            handle: `@_lanter._.quiver_`,
            profilePic: `images/marwan.2.jpg`,
            tweetText: `Hey everyone! Welcome to my instagram clone, a space built from scracth to mirror the experience we all love.Feel free to explore, post, and share your thoughts.Your feedback means a lot as i keep improving it!`,
        },],
        likes: 21567  ,
        retweets: 846,
         isLiked: false,
        isRetweeted: false,
        uuid:uuidv4(),
    },
    {
        name: "notlikeukash_",
        username: "gus1819",
        location: "Ukash.",
        avatar: "images/ukash.post.jpg",
        post: "images/ukash.post.jpg",
         replies: [
            {
                handle: `@_lanter._.quiver_ ☣️`,
                profilePic: `images/marwan.2.jpg`,
                tweetText: `Grateful to Ukash for contributing real user data to my instagram clone project-made the experience more authentic.Appreciate the support💗!`,
            },
            {
                handle: `@YummyCoder64`,
                profilePic: `images/avatar-courbet.jpg`,
                tweetText: `THis is great, common lanter next time hit me up!Keep it up blud❤️.`,
            },
        ],
        likes: 465,
        retweets: 10,
         isLiked: false,
        isRetweeted: false,
        uuid:uuidv4(),
    },
        {
        name: "_.02abdullahi",
        username: "jd1735",
        location: "Michu.",
        avatar: "images/macho.profile.jpg",
        post: "images/macho.post.jpg",
         replies: [
            {
          handle: `@_.02abdullahi`,
          profilePic: `images/macho.profile.jpg`,
          tweetText: `Yes! its beyond imagination that u can build this,its cool blud! 😎`,
      },
            {
          handle:`@_lanter._.quiver_  ✅` ,
          profilePic: `images/marwan.2.jpg`,
          tweetText: `Thanks bruh for coming through with details-helped bring this clone to life,appreciated 😵‍💫 `,
      },
  ],
        likes: 152 ,
        retweets: 230,
         isLiked: false,
        isRetweeted: false,
        uuid:uuidv4(),
    }
]

document.addEventListener('click', function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }
})

function handleLikeClick(tweetId){  
    const targetTweetObj = posts.filter(function(post){
        return post.uuid === tweetId
    })[0]
    if(targetTweetObj.isLiked){
        targetTweetObj.likes--
    }
    else{
        targetTweetObj.likes++
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    
    render()
}
function handleRetweetClick(tweetId){
  const targetTweetObj = posts.filter(function(post){
       return post.uuid === tweetId
  })[0]

  if(targetTweetObj.isRetweeted){
    targetTweetObj.retweets--
  }
  else{
    targetTweetObj.retweets++
  }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
  render()
}

function handleReplyClick(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

 function getfeedHtml() {
    let productHtml = ''
    
    posts.forEach(function(post){
     
        let likeIconClass = ''
        let retweetIconClass =''
        if(post.isLiked){
            likeIconClass = 'liked'
        }
         if (post.isRetweeted) {
           retweetIconClass = 'retweeted'
        }

        let repliesHtml = ''
        if(post.replies.length > 0) {
            post.replies.forEach(function(reply){
               repliesHtml += `
                    <div class="tweet-reply">
            <div class="tweet-inner">
                <img src="${reply.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${reply.handle}</p>
                        <p class="tweet-text">${reply.tweetText}</p>
                    </div>
                </div>
        </div>
               
               `
            })
        }
        



        productHtml += `
       <div class="tweet">
        <div class="main-page">
            <div class="header">
                <img class ="van-img main-img" src="${post.avatar}">
                <div class="text-container">
                    <h1>${post.name}</h1>
                    <p>${post.location}</p>
                </div>  
            </div>   
                    <img class="main-img" src="${post.post}">
                <div class="tweet-details">
                        <span class="tweet-detail">
                        <i class="fa-regular fa-comment-dots" data-reply="${post.uuid}"></i>
                            ${post.replies.length}
                            </span>
                            <span class="tweet-detail">
                            <i class="fa-solid fa-heart ${likeIconClass}"
                            data-like="${post.uuid}"></i>
                            ${post.likes}
                            </span>
                            <span class="tweet-detail">
                            <i class="fa-solid fa-retweet ${retweetIconClass}"
                            data-retweet="${post.uuid}"></i>
                            ${post.retweets}
                            </span>
                 </div> 
             </div>  
            <div class="hidden" id="replies-${post.uuid}">
            ${repliesHtml}
    </div>  
          </div>  
        `
    })
    return  productHtml
 }

 function render(){
    document.getElementById('container').innerHTML = getfeedHtml()
 }
 render()



