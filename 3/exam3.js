class Color {
  #initializeData(colorSettings) {
    this.red = 0;
    this.green = 0;
    this.blue = 0;
    this.hexString = '#000000';
    this.opacity = 1;

    if (colorSettings.length === 3) {
      this.red = colorSettings[0];
      this.green = colorSettings[1];
      this.blue = colorSettings[2];
      this.opacity = colorSettings[3];
    } else {
      this.hexString = colorSettings[0];
      this.opacity = colorSettings[1];
    }
  }

  constructor(...colorSettings) {
    this.#initializeData(colorSettings);
  }

  getColorRGB() {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  getColorShortHex() {
    return `#${this.hexString}`;
  }

  getColorLongHex() {
    return `#${this.hexString}`;
  }
}

const color = new Color(1, 2, 3);

console.log(color.getColorRGB());
