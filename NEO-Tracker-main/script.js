// Data about the celestial bodies
const solarSystemData = {
    sun: "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, providing light and energy.",
    mercury: "Tau Ceti (τ Ceti) is a Sun-like star located about 12 light-years away from Earth in the constellation Cetus. It is smaller and cooler than the Sun, with roughly 78% of the Sun's mass.",
    venus: "18 Epsilon Eridani (ε Eri) is a sun-like star located about 10.5 light-years away in the constellation Eridanus. It is slightly smaller and cooler than the Sun, classified as a K-type main-sequence star",
    earth: "Rigil Kentaurus, also known as Alpha Centauri, is the closest star system to Earth, located about 4.37 light-years away. It consists of three stars: Alpha Centauri A, Alpha Centauri B (forming a binary pair), and Proxima Centauri, the closest of the three to Earth",
    mars: "EPS Indi (Epsilon Indi) is a nearby star system located about 12 light-years away from Earth in the constellation Indus. It is a K-type orange dwarf star, cooler and smaller than the Sun.",
    jupiter: "Sirius, also known as the Dog Star, is the brightest star in the night sky and is part of the constellation Canis Major. It is approximately 8.6 light-years away from Earth. Sirius is a binary star system, consisting of two stars: Sirius A, a main-sequence star about twice as massive as the Sun, and Sirius B, a white dwarf.",
    saturn: "Procyon is one of the brightest stars in the night sky, located in the constellation Canis Minor. It is approximately 11.4 light-years away from Earth and is part of the Winter Triangle asterism. Procyon is classified as a binary star system, consisting of a main-sequence star (Procyon A) and a white dwarf companion (Procyon B)",
  // uranus: "Uranus is the seventh planet and an ice giant with a distinct blue-green color due to methane in its atmosphere.",
   // neptune: "Neptune is the eighth planet and the farthest, with strong winds and storms, and a blue color due to methane."
};

// Function to display info about the selected celestial body
function showInfo(body) {
    const infoBox = document.getElementById('info-box');
    const infoText = document.getElementById('info-text');
    infoText.textContent = solarSystemData[body];
}
