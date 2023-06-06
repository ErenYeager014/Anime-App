import React, { useState } from 'react'

function ScrollingContent() {
    const [data, setdata] = useState([
        {
          "mal_id": "5680-31080",
          "entry": [
            {
              "mal_id": 5680,
              "url": "https://myanimelist.net/anime/5680/K-On",
              "images": {
                "jpg": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/10/76120.jpg",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/10/76120t.jpg",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/10/76120l.jpg"
                },
                "webp": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/10/76120.webp",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/10/76120t.webp",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/10/76120l.webp"
                }
              },
              "title": "K-On!"
            },
            {
              "mal_id": 31080,
              "url": "https://myanimelist.net/anime/31080/Anne_Happy♪",
              "images": {
                "jpg": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/9/78701.jpg",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/9/78701t.jpg",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/9/78701l.jpg"
                },
                "webp": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/9/78701.webp",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/9/78701t.webp",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/9/78701l.webp"
                }
              },
              "title": "Anne Happy♪"
            }
          ],
          "content": "I mean they both Animes with Sweet Girls that like going to School to have fun with Friends and yea they both kinda different to K-On is a Music Anime and Anne Happy isn't but it's Similar in a Way that All the Characters are Friends and they go to school and they have fun and both I think are Good and Cute Animes :)",
          "date": "2022-09-20T09:45:31+00:00",
          "user": {
            "url": "https://myanimelist.net/profile/lErzaScarletUWU2",
            "username": "lErzaScarletUWU2"
          }
        },
        {
          "mal_id": "263-2921",
          "entry": [
            {
              "mal_id": 263,
              "url": "https://myanimelist.net/anime/263/Hajime_no_Ippo",
              "images": {
                "jpg": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/4/86334.jpg",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/4/86334t.jpg",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/4/86334l.jpg"
                },
                "webp": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/4/86334.webp",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/4/86334t.webp",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/4/86334l.webp"
                }
              },
              "title": "Hajime no Ippo"
            },
            {
              "mal_id": 2921,
              "url": "https://myanimelist.net/anime/2921/Ashita_no_Joe_2",
              "images": {
                "jpg": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/3/45028.jpg",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/3/45028t.jpg",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/3/45028l.jpg"
                },
                "webp": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/3/45028.webp",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/3/45028t.webp",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/3/45028l.webp"
                }
              },
              "title": "Ashita no Joe 2"
            }
          ],
          "content": "Boxing. Character growth. Incredible side characters. Hajime no Ippo is more comedic with cleaner animation, Ashita no Joe 2's focus is more on character development.",
          "date": "2022-09-20T08:45:31+00:00",
          "user": {
            "url": "https://myanimelist.net/profile/colarobro",
            "username": "colarobro"
          }
        },
        {
          "mal_id": "7785-35247",
          "entry": [
            {
              "mal_id": 7785,
              "url": "https://myanimelist.net/anime/7785/Yojouhan_Shinwa_Taikei",
              "images": {
                "jpg": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/1633/123689.jpg",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/1633/123689t.jpg",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/1633/123689l.jpg"
                },
                "webp": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/1633/123689.webp",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/1633/123689t.webp",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/1633/123689l.webp"
                }
              },
              "title": "Yojouhan Shinwa Taikei"
            },
            {
              "mal_id": 35247,
              "url": "https://myanimelist.net/anime/35247/Owarimonogatari_2nd_Season",
              "images": {
                "jpg": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/6/87322.jpg",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/6/87322t.jpg",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/6/87322l.jpg"
                },
                "webp": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/6/87322.webp",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/6/87322t.webp",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/6/87322l.webp"
                }
              },
              "title": "Owarimonogatari 2nd Season"
            }
          ],
          "content": "Both have hectic, fast paced plots with incredible alternative animation throughout. They also take different approaches to traditional themes commonly found in anime. These two by far some of the most unique series I have seen to date.",
          "date": "2022-09-20T08:45:31+00:00",
          "user": {
            "url": "https://myanimelist.net/profile/colarobro",
            "username": "colarobro"
          }
        },
        {
          "mal_id": "486-3701",
          "entry": [
            {
              "mal_id": 486,
              "url": "https://myanimelist.net/anime/486/Kino_no_Tabi__The_Beautiful_World",
              "images": {
                "jpg": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/1763/95397.jpg",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/1763/95397t.jpg",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/1763/95397l.jpg"
                },
                "webp": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/1763/95397.webp",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/1763/95397t.webp",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/1763/95397l.webp"
                }
              },
              "title": "Kino no Tabi: The Beautiful World"
            },
            {
              "mal_id": 3701,
              "url": "https://myanimelist.net/anime/3701/Kaiba",
              "images": {
                "jpg": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/7/13193.jpg",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/7/13193t.jpg",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/7/13193l.jpg"
                },
                "webp": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/7/13193.webp",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/7/13193t.webp",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/7/13193l.webp"
                }
              },
              "title": "Kaiba"
            }
          ],
          "content": "Both involve the main character traveling with a \"sidekick\" while experiencing different life perspectives and challenging tradition/morals.",
          "date": "2022-09-20T08:45:31+00:00",
          "user": {
            "url": "https://myanimelist.net/profile/colarobro",
            "username": "colarobro"
          }
        },
        {
          "mal_id": "885-3326",
          "entry": [
            {
              "mal_id": 885,
              "url": "https://myanimelist.net/anime/885/Tenshi_no_Tamago",
              "images": {
                "jpg": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/11/63181.jpg",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/11/63181t.jpg",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/11/63181l.jpg"
                },
                "webp": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/11/63181.webp",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/11/63181t.webp",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/11/63181l.webp"
                }
              },
              "title": "Tenshi no Tamago"
            },
            {
              "mal_id": 3326,
              "url": "https://myanimelist.net/anime/3326/Inaka_Isha",
              "images": {
                "jpg": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/5/5344.jpg",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/5/5344t.jpg",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/5/5344l.jpg"
                },
                "webp": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/5/5344.webp",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/5/5344t.webp",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/5/5344l.webp"
                }
              },
              "title": "Inaka Isha"
            }
          ],
          "content": "Both are abstract visual experiences and have a similar feeling of \"emptiness\" and \"personal struggle.\" Tenshi no Tamago is more abstract and dismal where Inaka Isha is more experimental.",
          "date": "2022-09-20T08:45:31+00:00",
          "user": {
            "url": "https://myanimelist.net/profile/colarobro",
            "username": "colarobro"
          }
        },
        {
          "mal_id": "47-1747",
          "entry": [
            {
              "mal_id": 47,
              "url": "https://myanimelist.net/anime/47/Akira",
              "images": {
                "jpg": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/1408/114012.jpg",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/1408/114012t.jpg",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/1408/114012l.jpg"
                },
                "webp": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/1408/114012.webp",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/1408/114012t.webp",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/1408/114012l.webp"
                }
              },
              "title": "Akira"
            },
            {
              "mal_id": 1747,
              "url": "https://myanimelist.net/anime/1747/Freedom",
              "images": {
                "jpg": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/4/50511.jpg",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/4/50511t.jpg",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/4/50511l.jpg"
                },
                "webp": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/4/50511.webp",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/4/50511t.webp",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/4/50511l.webp"
                }
              },
              "title": "Freedom"
            }
          ],
          "content": "Cyberpunk themes, motorcycles/racing/space are layered throughout both, character designs are done by the same person.",
          "date": "2022-09-20T08:45:31+00:00",
          "user": {
            "url": "https://myanimelist.net/profile/colarobro",
            "username": "colarobro"
          }
        },
        {
          "mal_id": "164-572",
          "entry": [
            {
              "mal_id": 164,
              "url": "https://myanimelist.net/anime/164/Mononoke_Hime",
              "images": {
                "jpg": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/7/75919.jpg",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/7/75919t.jpg",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/7/75919l.jpg"
                },
                "webp": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/7/75919.webp",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/7/75919t.webp",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/7/75919l.webp"
                }
              },
              "title": "Mononoke Hime"
            },
            {
              "mal_id": 572,
              "url": "https://myanimelist.net/anime/572/Kaze_no_Tani_no_Nausicaä",
              "images": {
                "jpg": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/10/75914.jpg",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/10/75914t.jpg",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/10/75914l.jpg"
                },
                "webp": {
                  "image_url": "https://cdn.myanimelist.net/images/anime/10/75914.webp",
                  "small_image_url": "https://cdn.myanimelist.net/images/anime/10/75914t.webp",
                  "large_image_url": "https://cdn.myanimelist.net/images/anime/10/75914l.webp"
                }
              },
              "title": "Kaze no Tani no Nausicaä"
            }
          ],
          "content": "Both of the main characters are \"untraditional\" princesses who fight for their villages, amazing visuals and animation as well as similar art styles.",
          "date": "2022-09-20T08:45:31+00:00",
          "user": {
            "url": "https://myanimelist.net/profile/colarobro",
            "username": "colarobro"
          }
        },])
  return (
    <>
    <div className='scroll' style={{
      display:'flex',
      flexDirection:'row',
    }}>
      {
        data.map((anime)=>{
            return (anime.entry.map((data)=>{
                return (
                  
                        <img src={data.images.jpg.image_url}  style={{
                          
                        }} />
                        )
            }))
        })
      }
      </div>
    </>
  )
}

export default ScrollingContent