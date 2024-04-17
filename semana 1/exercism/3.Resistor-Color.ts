export const colorCode = (color: string): number => {
    const colorMap: { [color: string]: number } = {
      "black": 0,
      "brown": 1,
      "red": 2,
      "orange": 3,
      "yellow": 4,
      "green": 5,
      "blue": 6,
      "violet": 7,
      "grey": 8,
      "white": 9
    };
  
    if (colorMap.hasOwnProperty(color.toLowerCase())) {
      return colorMap[color.toLowerCase()];
    } else {
      throw new Error(`Invalid color: ${color}`);
    }
  };
  
  export const COLORS: string[] = Object.keys({
     "black": 0,
      "brown": 1,
      "red": 2,
      "orange": 3,
      "yellow": 4,
      "green": 5,
      "blue": 6,
      "violet": 7,
      "grey": 8,
      "white": 9
  });