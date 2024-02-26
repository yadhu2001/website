
tsParticles.load("tsparticles", {

    particles: {
  
      number: {
  
        value: 80, // Adjust the number of particles as needed
  
      },
  
      color: {
  
        value: "#CCCCCC", // Smoke color
  
      },
  
      shape: {
  
        type: "circle", // You can use "circle" or "triangle" for a basic smoke shape
  
      },
  
      opacity: {
  
        value: 0.5, // Adjust the opacity to control the density of the smoke
  
        animation: {
  
          enable: true,
  
          speed: 0.2,
  
          minimumValue: 0.1,
  
          sync: false,
  
        },
  
      },
  
      size: {
  
        value: 15, // Adjust the size of smoke particles
  
        random: true, // Randomize particle sizes for a more natural look
  
        animation: {
  
          enable: true,
  
          speed: 0.2,
  
          minimumValue: 5,
  
          sync: true,
  
        },
  
      },
  
      move: {
  
        enable: true,
  
        direction: "none", // Make particles move randomly
  
        speed: 1, // Adjust the speed of particle movement
  
        outMode: "out", // Define how particles behave when they move out of the canvas
  
      },
  
    },
  
    /* Other configuration options */
  
  });
  
  