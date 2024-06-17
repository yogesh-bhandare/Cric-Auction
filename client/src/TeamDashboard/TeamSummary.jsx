import React, { useState, useEffect } from 'react';

const TeamSummary = () => {
  const buyedPlayers = [
    { id: 1, name: 'JASPRIT BUMRAH', type: 'Bowler', basePrice: 1, pricePaid: 4, imgID: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/319900/319940.png' },
    { id: 2, name: 'PIYUSH CHAWLA', type: 'Bowler', basePrice: 1, pricePaid: 4, imgID: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322200/322272.png' },
    { id: 3, name: 'KUMAR KARTIKEYA SINGH', type: 'Bowler', basePrice: 1, pricePaid: 4, imgID: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/359700/359773.png' },
    { id: 4, name: 'AKASH MADHWAL', type: 'Bowler', basePrice: 1, pricePaid: 4, imgID: 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/314900/314988.png' },
    { id: 5, name: 'JASON BEHRENDORFF', type: 'Bowler', basePrice: 1, pricePaid: 4, imgID: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/321500/321589.png' },
    { id: 6, name: 'DILSHAN MADUSHANKA', type: 'Bowler', basePrice: 1, pricePaid: 4, imgID: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/348600/348600.png' },
    { id: 8, name: 'RAJVARDHAN HANGARGEKAR', type: 'Bowler', basePrice: 1, pricePaid: 4, imgID: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/339100/339157.png' },
    { id: 9, name: 'DEEPAK CHAHAR', type: 'Bowler', basePrice: 1, pricePaid: 4, imgID: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322700/322704.png' },
    { id: 10, name: 'MAHEESH THEEKSHANA', type: 'Bowler', basePrice: 1, pricePaid: 4, imgID: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/347800/347825.png' },
  ];

  const totalAmount = 8000;

  const [audioPlayed, setAudioPlayed] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    if (!audioPlayed && buyedPlayers.length > 0) {
      const loadSound = async () => {
        const audio = new Audio(require('./assets/ipl-theme-song.mp3'));
        audio.play();
        setSound(audio);
        setAudioPlayed(true);
      };

      loadSound();
    }

    return () => {
      if (sound) {
        sound.pause();
      }
    };
  }, [buyedPlayers, audioPlayed, sound]);

  useEffect(() => {
    return () => {
      setAudioPlayed(false);
    };
  }, []);

  function calculateRemainingAmount(totalAmount, player) {
    if (player.pricePaid === undefined) {
      return totalAmount;
    }

    const remaining = totalAmount - player.pricePaid;
    const roundedRemaining = parseFloat(remaining.toFixed(1));
    return roundedRemaining >= 0 ? roundedRemaining : 0;
  }

  let remainingAmount = totalAmount;
  for (const player of buyedPlayers) {
    remainingAmount = calculateRemainingAmount(remainingAmount, player);
  }

  const renderPlayerCards = () => {
    return buyedPlayers.map((player) => (
      <div key={player.id} className="w-full md:w-1/2 lg:w-1/3 p-2">
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
            <img src={player.imgID} alt={player.name} className="w-full h-full object-cover" />
          </div>
          <p className="text-sm font-bold text-center">{player.name}</p>
          <p className="text-xs text-gray-600 text-center">Price Paid: {player.pricePaid}L</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Team 1</h1>
          <p className="text-xl font-bold text-red-600">Amount left</p>
          <p className="text-2xl font-bold text-blue-800">{remainingAmount} L</p>
        </div>
        {remainingAmount === 0 ? (
          <p className="text-xl font-bold text-red-600 text-center">Purse empty</p>
        ) : (
          <div>
            <p className="text-xl font-bold text-white bg-red-600 rounded-md py-2 text-center mb-4">Your Squad</p>
            <div className="flex flex-wrap -mx-2">
              {renderPlayerCards()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSummary;
