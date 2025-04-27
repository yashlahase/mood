import React, { useState } from 'react';
import './MoodDisplay.css';

// Import audio files
const moodData = {
  Happy: {
    songs: [
      { title: "Badtameez Dil - Yeh Jawaani Hai Deewani", artist: "Benny Dayal, Shefali Alvares", audio: "/songs/128-Badtameez Dil - Yeh Jawaani Hai Deewani 128 Kbps.mp3" },
      { title: "Gallan Goodiyaan - Dil Dhadakne Do", artist: "Yashita Sharma, Manish Kumar Tipu, Farhan Akhtar, Sukhwinder Singh", audio: "/songs/gallan-goodiyaan.mp3" },
      { title: "Senorita - Zindagi Na Milegi Dobara", artist: "Farhan Akhtar, Hrithik Roshan, Abhay Deol", audio: "/songs/senorita.mp3" },
      { title: "Balam Pichkari - Yeh Jawaani Hai Deewani", artist: "Vishal Dadlani, Shalmali Kholgade", audio: "/songs/balam-pichkari.mp3" },
      { title: "London Thumakda - Queen", artist: "Labh Janjua, Sonu Kakkar, Neha Kakkar", audio: "/songs/london-thumakda.mp3" },
      { title: "Kar Gayi Chull - Kapoor & Sons", artist: "Badshah, Fazilpuria, Sukriti Kakar, Neha Kakkar", audio: "/songs/kar-gayi-chull.mp3" },
      { title: "Na Na Na Na", artist: "J-Star", audio: "/songs/Na Na Na Na.mp3" }
    ]
  },
  Sad: {
    songs: [
      { title: "Kaash Aisa Hota", artist: "Darshan Raval", audio: "/songs/kaash-aisa-hota.mp3" },
      { title: "Tum Hi Ho - Aashiqui 2", artist: "Arijit Singh", audio: "/songs/tum-hi-ho.mp3" },
      { title: "Tere Bina - Guru", artist: "A.R. Rahman, Chinmayi", audio: "/songs/tere-bina.mp3" },
      { title: "Tum Se Hi - Jab We Met", artist: "Mohit Chauhan", audio: "/songs/tum-se-hi.mp3" },
      { title: "Agar Tum Saath Ho - Tamasha", artist: "Alka Yagnik, Arijit Singh", audio: "/songs/agar-tum-saath-ho.mp3" },
      { title: "Tujhe Bhula Diya - Anjaana Anjaani", artist: "Mohit Chauhan, Shekhar Ravjiani", audio: "/songs/tujhe-bhula-diya.mp3" },
      { title: "Kabira - Yeh Jawaani Hai Deewani", artist: "Tochi Raina, Rekha Bhardwaj", audio: "/songs/kabira.mp3" }
    ]
  },
  Romantic: {
    songs: [
      { title: "Tera Ban Jaunga - Kabir Singh", artist: "Tulsi Kumar, Akhil Sachdeva", audio: "/songs/tera-ban-jaunga.mp3" },
      { title: "Raatan Lambiyan - Shershaah", artist: "Jubin Nautiyal, Asees Kaur", audio: "/songs/raatan-lambiyan.mp3" },
      { title: "Tum Se", artist: "Sachin-Jigar", audio: "/songs/tum-se.mp3" },
      { title: "Tere Bin - Simmba", artist: "Rahat Fateh Ali Khan, Asees Kaur", audio: "/songs/tere-bin.mp3" },
      { title: "Tum Hi Aana - Marjaavaan", artist: "Jubin Nautiyal", audio: "/songs/tum-hi-aana.mp3" },
      { title: "Dooriyan Love", artist: "Pritam", audio: "/songs/Dooriyan Love.mp3" },
      { title: "Tum Mile - Tum Mile", artist: "Neeraj Shridhar", audio: "/songs/tum-mile.mp3" }
    ]
  },
  Hyped: {
    songs: [
      { title: "Naacho Naacho - RRR", artist: "Rahul Sipligunj, Kaala Bhairava", audio: "/songs/Naacho Naacho - RRR .mp3" },
      { title: "Jai Jai Shivshankar - War", artist: "Vishal Dadlani, Benny Dayal", audio: "/songs/jai-jai-shivshankar.mp3" },
      { title: "Garmi - Street Dancer 3D", artist: "Neha Kakkar, Badshah", audio: "/songs/garmi.mp3" },
      { title: "Muqabla - Street Dancer 3D", artist: "Yash Narvekar, Parampara Tandon", audio: "/songs/muqabla.mp3" },
      { title: "Dilbar - Satyameva Jayate", artist: "Neha Kakkar, Dhvani Bhanushali", audio: "/songs/dilbar.mp3" },
      { title: "The Breakup Song - Ae Dil Hai Mushkil", artist: "Arijit Singh, Badshah, Jonita Gandhi", audio: "/songs/the-breakup-song.mp3" },
      { title: "Proper Patola - Namaste England", artist: "Badshah, Diljit Dosanjh", audio: "/songs/proper-patola.mp3" }
    ]
  },
  Relaxed: {
    songs: [
      { title: "Kesariya - Brahmastra", artist: "Arijit Singh", audio: "/songs/kesariya.mp3" },
      { title: "Raabta - Agent Vinod", artist: "Arijit Singh", audio: "/songs/raabta.mp3" },
      { title: "Zaroor", artist: "Savi Kahlon", audio: "/songs/Zaroor.mp3" },
      { title: "Sham - Aisha", artist: "Tulsi Kumar, Akhil Sachdeva", audio: "/songs/Sham - Aisha.mp3" },
      { title: "Haan Ke Haan - Maharaj", artist: "Sohail Sen", audio: "/songs/Haan Ke Haan - Maharaj.mp3" },
      { title: "Tu Hain Toh", artist: "HUNNY, Bunny", audio: "/songs/Tu Hain Toh.mp3" },
      { title: "Saudebazhi", artist: "Pritam, Anupam Amod, Javed Ali", audio: "/songs/saudebazi.mp3" }
    ]
  }
};

const MoodDisplay = ({ mood }) => {
  const [showSongs, setShowSongs] = useState(false)
  const [currentSong, setCurrentSong] = useState(null);
  const { songs } = moodData[mood] || {};

  const handleSongClick = (song) => {
    if (currentSong === song) {
      setCurrentSong(null);
    } else {
      setCurrentSong(song);
    }
  };

  return (
    <div className="mood-display">
      <button 
        className="view-songs-button"
        onClick={() => setShowSongs(!showSongs)}
      >
        {showSongs ? 'Hide Songs' : 'View Songs'}
      </button>
      
      {showSongs && (
        <div className="songs-list">
          {songs.map((song, index) => (
            <div 
              key={index} 
              className={`song-item ${currentSong === song ? 'playing' : ''}`}
              onClick={() => handleSongClick(song)}
            >
              <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
                <p className="song-artist">{song.artist}</p>
              </div>
              {currentSong === song && (
                <audio 
                  className="audio-player"
                  controls
                  autoPlay
                  src={song.audio}
                >
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoodDisplay;