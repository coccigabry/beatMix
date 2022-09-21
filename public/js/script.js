const createEmptyDrumArray = () => new Array(16).fill(false);

// Drum Arrays
let kicks = createEmptyDrumArray();
let snares = createEmptyDrumArray();
let hiHats = createEmptyDrumArray();
let rideCymbals = createEmptyDrumArray();

const getDrumArrayByName = (name) => {
  switch (name) {
    case 'kicks':
      return kicks;
    case 'snares':
      return snares;
    case 'hiHats':
      return hiHats;
    case 'rideCymbals':
      return rideCymbals;
    default:
      return;
  };
};

const toggleDrum = (drumArrayName, index) => {
  //This function should flip the boolean value in the correct array at the specified index.
  const drums = getDrumArrayByName(drumArrayName);
  if (!drums || index > 15 || index < 0) {
    return;
  };
  drums[index] = !drums[index];
};

const clear = drumArrayName => {
  //sets all values in the correct array to false.
  const drums = getDrumArrayByName(drumArrayName);
  if (drums) {
    drums.fill(false);
  };
};

const invert = drumArrayName => {
  //flips the boolean value of all elements in the correct array.
  const drums = getDrumArrayByName(drumArrayName);
  if (!drums) {
    return;
  };
  for (let i = 0; i < drums.length; i++) {
    drums[i] = !drums[i];
  };
};
