import React, { useState } from "react";
import { createContext } from "react";
import MainHeader from "./MainHeader";
import MainSection from "./MainSection";
import SimilarContent from "./SimilarContent";
export const mainpage = createContext();
function MainPage() {
  const [maindata, setmaindata] = useState({
    data: {
      mal_id: 850,
      url: "https://myanimelist.net/anime/850/Gakuen_Heaven",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/12/70143.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/12/70143t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/12/70143l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/12/70143.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/anime/12/70143t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/anime/12/70143l.webp",
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: "Default",
          title: "Gakuen Heaven",
        },
        {
          type: "Synonym",
          title: "Boy's Love Scramble",
        },
        {
          type: "Japanese",
          title: "学園ヘヴン",
        },
        {
          type: "English",
          title: "Gakuen Heaven",
        },
      ],
      title: "Gakuen Heaven",
      title_english: "Gakuen Heaven",
      title_japanese: "学園ヘヴン",
      title_synonyms: ["Boy's Love Scramble"],
      type: "TV",
      source: "Visual novel",
      episodes: 13,
      status: "Finished Airing",
      airing: false,
      aired: {
        from: "2006-04-01T00:00:00+00:00",
        to: "2006-06-24T00:00:00+00:00",
        prop: {
          from: {
            day: 1,
            month: 4,
            year: 2006,
          },
          to: {
            day: 24,
            month: 6,
            year: 2006,
          },
        },
        string: "Apr 1, 2006 to Jun 24, 2006",
      },
      duration: "26 min per ep",
      rating: "PG-13 - Teens 13 or older",
      score: 6.48,
      scored_by: 30515,
      rank: 6598,
      popularity: 2382,
      members: 64253,
      favorites: 168,
      synopsis:
        "Itou Keita, an average guy, is shocked when he's invited to attend the elite institution, \"Bell Liberty Academy.\" Unnerved by the mystery, he's further distracted by the school's social dynamics. In a sea of amazing young men, Keita struggles to find out what makes him unique, and how he can possibly deserve to be treated as an equal by the boys of BL. Lacking any particular ability, just why has Itou been welcomed into the privileged world of the talented and the beautiful? Along the way, he develops intense relationships with the almost everyone at school but he is terribly drawn to the friendly, over-caring but very mysterious classmate, Kazuki Endou.",
      background: null,
      season: "spring",
      year: 2006,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: "Unknown",
      },
      producers: [
        {
          mal_id: 31,
          type: "anime",
          name: "Geneon Universal Entertainment",
          url: "https://myanimelist.net/anime/producer/31/Geneon_Universal_Entertainment",
        },
        {
          mal_id: 203,
          type: "anime",
          name: "Visual Arts",
          url: "https://myanimelist.net/anime/producer/203/Visual_Arts",
        },
      ],
      licensors: [
        {
          mal_id: 250,
          type: "anime",
          name: "Media Blasters",
          url: "https://myanimelist.net/anime/producer/250/Media_Blasters",
        },
      ],
      studios: [
        {
          mal_id: 122,
          type: "anime",
          name: "Tokyo Kids",
          url: "https://myanimelist.net/anime/producer/122/Tokyo_Kids",
        },
      ],
      genres: [
        {
          mal_id: 28,
          type: "anime",
          name: "Boys Love",
          url: "https://myanimelist.net/anime/genre/28/Boys_Love",
        },
        {
          mal_id: 4,
          type: "anime",
          name: "Comedy",
          url: "https://myanimelist.net/anime/genre/4/Comedy",
        },
        {
          mal_id: 8,
          type: "anime",
          name: "Drama",
          url: "https://myanimelist.net/anime/genre/8/Drama",
        },
        {
          mal_id: 22,
          type: "anime",
          name: "Romance",
          url: "https://myanimelist.net/anime/genre/22/Romance",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 35,
          type: "anime",
          name: "Harem",
          url: "https://myanimelist.net/anime/genre/35/Harem",
        },
        {
          mal_id: 23,
          type: "anime",
          name: "School",
          url: "https://myanimelist.net/anime/genre/23/School",
        },
      ],
      demographics: [],
    },
  });

  return (
    <>
      <mainpage.Provider value={maindata}>
        <div className="mainPage">
          <MainHeader />
          <MainSection />
        </div>
        <SimilarContent />
      </mainpage.Provider>
    </>
  );
}

export default MainPage;
