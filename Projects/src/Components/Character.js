import React,{useState} from 'react'

function Character() {
    const [character, setcharacter] = useState( 
        {
          "data": [
            {
              "character": {
                "mal_id": 3136,
                "url": "https://myanimelist.net/character/3136/Kazuki_Endou",
                "images": {
                  "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/characters/3/57287.jpg?s=674cb8599b00cac942cc3d2cfa1398d8"
                  },
                  "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/characters/3/57287.webp?s=674cb8599b00cac942cc3d2cfa1398d8",
                    "small_image_url": "https://cdn.myanimelist.net/images/characters/3/57287t.webp?s=674cb8599b00cac942cc3d2cfa1398d8"
                  }
                },
                "name": "Endou, Kazuki"
              },
              "role": "Main",
              "favorites": 23,
              "voice_actors": [
                {
                  "person": {
                    "mal_id": 79,
                    "url": "https://myanimelist.net/people/79/Takahiro_Sakurai",
                    "images": {
                      "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/voiceactors/3/62791.jpg?s=e63f4d0ee3e5817a7017f3ce182d040d"
                      }
                    },
                    "name": "Sakurai, Takahiro"
                  },
                  "language": "Japanese"
                },
                {
                  "person": {
                    "mal_id": 1504,
                    "url": "https://myanimelist.net/people/1504/Ayumi_Tsunematsu",
                    "images": {
                      "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/voiceactors/3/57911.jpg?s=75464bf8c3da20c52f6b88e3ee32e9bd"
                      }
                    },
                    "name": "Tsunematsu, Ayumi"
                  },
                  "language": "Japanese"
                }
              ]
            },
            {
              "character": {
                "mal_id": 3137,
                "url": "https://myanimelist.net/character/3137/Keita_Itou",
                "images": {
                  "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/characters/2/57288.jpg?s=6d85db7d978fbfc0f3123d76de733a60"
                  },
                  "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/characters/2/57288.webp?s=6d85db7d978fbfc0f3123d76de733a60",
                    "small_image_url": "https://cdn.myanimelist.net/images/characters/2/57288t.webp?s=6d85db7d978fbfc0f3123d76de733a60"
                  }
                },
                "name": "Itou, Keita"
              },
              "role": "Main",
              "favorites": 33,
              "voice_actors": [
                {
                  "person": {
                    "mal_id": 86,
                    "url": "https://myanimelist.net/people/86/Jun_Fukuyama",
                    "images": {
                      "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/voiceactors/3/60810.jpg?s=e3f5b394ae1e215359052aef53b5d844"
                      }
                    },
                    "name": "Fukuyama, Jun"
                  },
                  "language": "Japanese"
                },
                {
                  "person": {
                    "mal_id": 1278,
                    "url": "https://myanimelist.net/people/1278/Touko_Aoyama",
                    "images": {
                      "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/voiceactors/2/55015.jpg?s=71bc57a83eb2cbf9d9a29c44d49e968b"
                      }
                    },
                    "name": "Aoyama, Touko"
                  },
                  "language": "Japanese"
                }
              ]
            },
            {
              "character": {
                "mal_id": 215736,
                "url": "https://myanimelist.net/character/215736/Ishizuka",
                "images": {
                  "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                  },
                  "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c",
                    "small_image_url": "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                  }
                },
                "name": "Ishizuka"
              },
              "role": "Supporting",
              "favorites": 0,
              "voice_actors": [
                {
                  "person": {
                    "mal_id": 513,
                    "url": "https://myanimelist.net/people/513/Yuuichi_Nakamura",
                    "images": {
                      "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/voiceactors/2/63264.jpg?s=4889fb923a3727b540d623569338dcbb"
                      }
                    },
                    "name": "Nakamura, Yuuichi"
                  },
                  "language": "Japanese"
                }
              ]
            },
            {
              "character": {
                "mal_id": 3138,
                "url": "https://myanimelist.net/character/3138/Takuto_Iwai",
                "images": {
                  "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/characters/2/77078.jpg?s=5239921fd5f1e58ce835a906693e2df5"
                  },
                  "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/characters/2/77078.webp?s=5239921fd5f1e58ce835a906693e2df5",
                    "small_image_url": "https://cdn.myanimelist.net/images/characters/2/77078t.webp?s=5239921fd5f1e58ce835a906693e2df5"
                  }
                },
                "name": "Iwai, Takuto"
              },
              "role": "Supporting",
              "favorites": 5,
              "voice_actors": [
                {
                  "person": {
                    "mal_id": 341,
                    "url": "https://myanimelist.net/people/341/Hirofumi_Nojima",
                    "images": {
                      "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/voiceactors/2/68661.jpg?s=1d3c7ea64b561ddec9beddfd9af4046a"
                      }
                    },
                    "name": "Nojima, Hirofumi"
                  },
                  "language": "Japanese"
                }
              ]
            },
            {
              "character": {
                "mal_id": 31761,
                "url": "https://myanimelist.net/character/31761/Keiji_Kuganuma",
                "images": {
                  "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/characters/15/84527.jpg?s=648bc02ea3e50ed0a926f91ae0c6e958"
                  },
                  "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/characters/15/84527.webp?s=648bc02ea3e50ed0a926f91ae0c6e958",
                    "small_image_url": "https://cdn.myanimelist.net/images/characters/15/84527t.webp?s=648bc02ea3e50ed0a926f91ae0c6e958"
                  }
                },
                "name": "Kuganuma, Keiji"
              },
              "role": "Supporting",
              "favorites": 0,
              "voice_actors": [
                {
                  "person": {
                    "mal_id": 7632,
                    "url": "https://myanimelist.net/people/7632/Shigenori_Soya",
                    "images": {
                      "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/voiceactors/1/56487.jpg?s=3ed99937c5b490ba557048ceb742223a"
                      }
                    },
                    "name": "Soya, Shigenori"
                  },
                  "language": "Japanese"
                }
              ]
            },
            {
              "character": {
                "mal_id": 3139,
                "url": "https://myanimelist.net/character/3139/Jin_Matsuoka",
                "images": {
                  "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/characters/7/57289.jpg?s=d30d3715f3adb32f34f29f610bcc96f2"
                  },
                  "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/characters/7/57289.webp?s=d30d3715f3adb32f34f29f610bcc96f2",
                    "small_image_url": "https://cdn.myanimelist.net/images/characters/7/57289t.webp?s=d30d3715f3adb32f34f29f610bcc96f2"
                  }
                },
                "name": "Matsuoka, Jin"
              },
              "role": "Supporting",
              "favorites": 6,
              "voice_actors": [
                {
                  "person": {
                    "mal_id": 109,
                    "url": "https://myanimelist.net/people/109/Ken_Narita",
                    "images": {
                      "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/voiceactors/2/25305.jpg?s=fa2da040aac11c0b4f75d32d3202b4db"
                      }
                    },
                    "name": "Narita, Ken"
                  },
                  "language": "Japanese"
                }
              ]
            },{
                "character": {
                  "mal_id": 31761,
                  "url": "https://myanimelist.net/character/31761/Keiji_Kuganuma",
                  "images": {
                    "jpg": {
                      "image_url": "https://cdn.myanimelist.net/images/characters/15/84527.jpg?s=648bc02ea3e50ed0a926f91ae0c6e958"
                    },
                    "webp": {
                      "image_url": "https://cdn.myanimelist.net/images/characters/15/84527.webp?s=648bc02ea3e50ed0a926f91ae0c6e958",
                      "small_image_url": "https://cdn.myanimelist.net/images/characters/15/84527t.webp?s=648bc02ea3e50ed0a926f91ae0c6e958"
                    }
                  },
                  "name": "Kuganuma, Keiji"
                },
                "role": "Supporting",
                "favorites": 0,
                "voice_actors": [
                  {
                    "person": {
                      "mal_id": 7632,
                      "url": "https://myanimelist.net/people/7632/Shigenori_Soya",
                      "images": {
                        "jpg": {
                          "image_url": "https://cdn.myanimelist.net/images/voiceactors/1/56487.jpg?s=3ed99937c5b490ba557048ceb742223a"
                        }
                      },
                      "name": "Soya, Shigenori"
                    },
                    "language": "Japanese"
                  }
                ]
              }
          ]
        }
      )
  return (
    <>
        <div className='characters' >
          
            {
                character.data.map((data)=>{
                    return (
                        <>
                            <div className='IndividualCharacter' >
                                <img src={data.character.images.jpg.image_url} alt={data.character.name} 
                                />
                                <h5>
                                    {data.character.name}
                                </h5>
                            </div>    
                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default Character