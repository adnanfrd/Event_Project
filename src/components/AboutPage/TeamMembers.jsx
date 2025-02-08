import React from "react";
import Image from "next/image";

const teamMembers = [
  { name: "John Doe", role: "CEO", img: "/CEO.webp" },
  { name: "Jane Smith", role: "CTO", img: "/CTO.webp" },
  { name: "Michael Lee", role: "Head of Events", img: "/headofEvents.webp" },
];

const TeamMembers = () => {
  return (
    <div className="bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image
                src={member.img}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
