import React from 'react';
// import './tailwind.css';

const features = [
    {
        image: 'https://img.freepik.com/free-vector/data-inform-illustration-concept_114360-864.jpg?w=1060&t=st=1718469422~exp=1718470022~hmac=1cf64366763e236b52d9862242c44cc7923c5095498a65338ea5e6b71edcd2da',
        title: 'Players Data Analysis',
        description: 'Cric Auction provides advanced data analytics tools for players across multiple sports, including cricket, football, volleyball, kabaddi, etc. Organizers can utilize live streaming overlays and receive real-time updates.',
    },
    {
        image: 'https://img.freepik.com/free-vector/auction-house-abstract-concept-vector-illustration-residential-commercial-property-auction-buy-sell-assets-online-exclusive-bid-consecutive-biddings-business-auctions-abstract-metaphor_335657-1956.jpg?t=st=1718469473~exp=1718473073~hmac=5843235e377677c07c3d28e9367eb8ba5d0ca53316be43d8f493b93593a0d9df&w=740',
        title: 'Bidding System',
        description: 'Our platform offers a robust bidding system that allows organizers to conduct virtual auctions for players. This system supports multiplayer bidding, ensuring fair and competitive auctions.',
    },
    {
        image: 'https://img.freepik.com/premium-vector/online-auction-concept-tiny-people-bidder-buyer-auctioneer-bidding-public-auction-painting_501813-744.jpg?w=996',
        title: 'Virtual Auction',
        description: 'Cric Auction enables virtual auctions where organizers can host auctions online. Participants can bid in real-time from anywhere, enhancing accessibility and participation.',
    },
    {
        image: 'https://img.freepik.com/free-vector/flat-design-modern-people-doing-cultural-activities_23-2148650011.jpg?t=st=1718469672~exp=1718473272~hmac=30461332489ad02630ea7b637849445846e5bfba535d1bd4c07e9c323a234ed1&w=1060',
        title: 'Multiplayer Game Integration',
        description: 'In addition to auctions, our platform integrates multiplayer gaming functionalities. Users can engage in interactive games related to sports, enhancing engagement and interaction among participants.',
    },
];

const Features = () => {
    return (
        <div className="bg-[#262626] py-16 font-['Roboto']">
            <h2 className="text-3xl text-center text-[#BFF207] font-bold mb-12 underline underline-offset-4">Features</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                        <img src={feature.image} alt={feature.title} className="w-full h-40  object-center object-scale-down mb-4 rounded-lg" />
                        <h3 className="text-xl font-semibold text-[#F23D4C] mb-2">{feature.title}</h3>
                        <p className="text-[#262626]">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
