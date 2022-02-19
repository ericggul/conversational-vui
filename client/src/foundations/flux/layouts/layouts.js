//Geometrical Primitives
//layout 1: Circle
//layout 2: Sphere
//layout 3: Cylinder
//Euclidean Attempts
//layout 4: Pyramides
//layout 5: Cubes
//layout 6: Tower
//Statistical Attempts
//layout 7: Quadratic Function
//layout 8: tanH
//layout 9: Bell Curve
//Regressive Shapes
//layout 10: Helix
//layout 11: White Jar
//layout 12: Giwa
const getRandom = (a, b) => Math.random() * (b - a) + a;

export function circleLayout(data) {
  const numPoints = data.length;
  let theta = 0;

  for (let i = 0; i < numPoints; i++) {
    const datum = data[i];
    const r = Math.max(1, Math.sqrt(70 * i + 1) * 0.7);
    theta += Math.asin(1 / r) * 20 + (getRandom(-1, 1) * Math.PI) / 100;

    datum.position.x = r * 0.5 * Math.cos(theta) + getRandom(-3, 3);
    datum.position.y = r * 0.5 * Math.sin(theta) + getRandom(-3, 3);
    datum.position.z = -1000 + getRandom(-10, 3);

    datum.rotation.x = Math.PI / 2;
    datum.rotation.y = 0;
    datum.rotation.z = 0;
  }
}

export function sphereLayout(data) {
  const numPoints = data.length;

  for (let i = 0; i < numPoints; i++) {
    const datum = data[i];
    const theta =
      ((i % 16) / 16) * Math.PI + (getRandom(-1, 1) * Math.PI) / 300;
    const phi =
      (Math.floor(i / 16) / 32) * Math.PI * 2 +
      (getRandom(-1, 1) * Math.PI) / 300;
    const r = 120 * getRandom(0.98, 1.02);

    datum.position.x = r * Math.cos(phi) * Math.sin(theta);
    datum.position.y = r * Math.cos(phi) * Math.cos(theta);
    datum.position.z = -100 + r * Math.sin(phi);

    datum.rotation.x = 0;
    datum.rotation.y = 0;

    datum.rotation.z =
      phi <= Math.PI / 2 || phi >= (Math.PI * 3) / 2
        ? -theta
        : -theta + Math.PI;

    // if (phi === Math.PI / 2) {
    //   datum.rotation.x = Math.PI / 2;
    //   datum.rotation.z = 0;
    // }
    // if (phi === (Math.PI * 3) / 2) {
    //   datum.rotation.x = -Math.PI / 2;
    //   datum.rotation.z = 0;
    // }
  }
}

export function cylinderLayout(data) {
  const numPoints = data.length;

  for (let i = 0; i < numPoints; i++) {
    const datum = data[i];
    const RADIUS = 35 * getRandom(0.99, 1.01);
    const RADIAL_ELEMENTS = 32;
    const HEIGHT_ELEMENTS = 16;
    const HEIGHT_INTERVAL = 14;
    const theta =
      Math.PI * 2 * ((i % RADIAL_ELEMENTS) / RADIAL_ELEMENTS) +
      (getRandom(0, 1) * Math.PI) / 40;
    const yIdx = Math.floor(i / RADIAL_ELEMENTS) - HEIGHT_ELEMENTS / 2;

    datum.position.x = RADIUS * Math.cos(theta);
    datum.position.y = yIdx * HEIGHT_INTERVAL;
    datum.position.z = -40 + RADIUS * Math.sin(theta);

    //x: Math.cos(t);
    //y: Math.sin(t);

    datum.rotation.x = 0;
    datum.rotation.y = -theta;
    datum.rotation.z = 0;
  }
}

//layout 4: Pyramides
//layout 5: Cubes
//layout 6: Tower

export function pyramidesLayout(data) {
  const numPoints = data.length;

  const LENGTH = 8;
  const DISTANCE = 12;

  for (let i = 0; i < numPoints; i++) {
    const datum = data[i];

    const xIndex = ((i % LENGTH) % LENGTH) - (LENGTH - 1) / 2;
    const yIndex = (Math.floor(i / LENGTH) % LENGTH) - (LENGTH - 1) / 2;
    const zIndex =
      Math.floor(Math.floor(i / LENGTH) / LENGTH) - (LENGTH - 1) / 2;

    const adjustement =
      ((LENGTH - 1) / 2 - yIndex) * 0.2 + getRandom(-0.01, 0.01);

    const xTemp = xIndex * DISTANCE * adjustement;
    const zTemp = zIndex * DISTANCE * adjustement;
    datum.position.x = (xTemp * Math.sqrt(2)) / 2 + (zTemp * Math.sqrt(2)) / 2;
    datum.position.y = yIndex * 15;
    datum.position.z = (-xTemp * Math.sqrt(2)) / 2 + (zTemp * Math.sqrt(2)) / 2;

    datum.rotation.x = 0;
    datum.rotation.y = Math.PI / 4;
    datum.rotation.z = 0;
  }
}

export function cubeLayout(data) {
  const numPoints = data.length;

  const LENGTH = 8;
  const DISTANCE = 17;

  for (let i = 0; i < numPoints; i++) {
    const datum = data[i];

    const xIndex = (Math.floor(i / LENGTH) % LENGTH) - (LENGTH - 1) / 2;
    const yIndex =
      Math.floor(Math.floor(i / LENGTH) / LENGTH) - (LENGTH - 1) / 2;
    const zIndex = ((i % LENGTH) % LENGTH) - (LENGTH - 1) / 2;

    datum.position.x = xIndex * DISTANCE;
    datum.position.y = yIndex * DISTANCE;
    datum.position.z = zIndex * DISTANCE;

    datum.rotation.x = 0;
    datum.rotation.y = Math.PI / 2;
    datum.rotation.z = 0;
  }
}

export function towerLayout(data) {
  const numPoints = data.length;

  const WIDTH = 4;
  const HEIGHT = 32;

  for (let i = 0; i < numPoints; i++) {
    const datum = data[i];

    const xIndex = Math.floor(Math.floor(i / HEIGHT) / WIDTH) - (WIDTH - 1) / 2;
    const yIndex = (i % HEIGHT) - (HEIGHT - 1) / 2;
    const zIndex = (Math.floor(i / HEIGHT) % WIDTH) - (WIDTH - 1) / 2;

    datum.position.x = xIndex * 5;
    datum.position.y = yIndex * 10;
    datum.position.z = zIndex * 5;

    datum.rotation.x = Math.PI * 2;
    datum.rotation.y = 0;
    datum.rotation.z = 0;
  }
}

//layout 7: Orbital
//layout 8: DNA Helix
//layout 9: Bell Curve

export function orbitalLayout(data) {
  const numPoints = data.length;

  const xNumber = 16;

  let quardCenter = 6.7;
  let ampl = 1.3;

  for (let i = 0; i < numPoints; i++) {
    const datum = data[i];
    const xSign = i > 256 ? 1 : -1;
    const xLoc = i % xNumber;

    const r =
      -((xLoc - quardCenter) ** 2 * ampl) + ampl * (16 - quardCenter) ** 2;

    const theta = (Math.floor(i / xNumber) / xNumber) * Math.PI * 2;

    datum.position.x = xSign * xLoc * 24;
    datum.position.y = r * Math.cos(theta);
    datum.position.z = r * Math.sin(theta);

    datum.rotation.x = theta;
    datum.rotation.y = 0;
    datum.rotation.z = 0;
  }
}

export function helixLayout(data) {
  const numPoints = data.length;

  const r = 30;
  const radialElements = 16;
  const helixNumber = 2;
  const yInterval = 10;

  for (let i = 0; i < numPoints; i++) {
    const datum = data[i];

    const j = Math.floor(i / helixNumber);

    const yPos = j;
    const theta =
      ((j % radialElements) / radialElements) * Math.PI * 2 +
      ((i % helixNumber) / helixNumber) * Math.PI * 2;

    const straightX = r * Math.cos(theta);
    const straightY = yPos * yInterval;
    const straightZ = r * Math.sin(theta);
    const yMax = 256 * yInterval;

    const phi = (straightY / yMax) * Math.PI * 2;
    const R = yMax / (Math.PI * 2);

    datum.position.x = (R + straightX) * Math.sin(phi);
    datum.position.y = (R + straightX) * Math.cos(phi);
    datum.position.z = -100 + straightZ;

    datum.rotation.x = 0;
    datum.rotation.y = -theta;
    datum.rotation.z = -phi;
  }
}

export function bellLayout(data) {
  const numPoints = data.length;

  const radialElements = 16;
  const R = 20;
  const yRange = 130;

  for (let i = 0; i < numPoints; i++) {
    const datum = data[i];

    const r = (i % radialElements) ** 0.8 + 0.3;
    const yMax = Math.exp(-Math.pow(r, 1.7) / 6) * yRange;
    const theta = ((Math.floor(i / 16) % 32) / 32) * Math.PI * 2;

    datum.position.x = R * r * Math.cos(theta);
    datum.position.y = -42 + yMax;
    datum.position.z = R * r * Math.sin(theta);

    datum.rotation.x = 0;
    datum.rotation.y = -theta;
    datum.rotation.z = 0;
  }
}

//layout 10: Square
//layout 11: White Jar
//layout 12: Giwa

export function squareLayout(data) {
  const numPoints = data.length;

  for (let i = 0; i < numPoints; i++) {
    const datum = data[i];

    datum.position.x = (Math.floor(i / 32) - 8) * 10;
    datum.position.y = ((i % 32) - 16) * 10;
    datum.position.z = 0;

    datum.rotation.x = Math.PI / 2;
    datum.rotation.y = getRandom(0, Math.PI * 3);
    datum.rotation.z = -Math.PI * 2;
  }
}

export function jarLayout(data) {
  const numPoints = data.length;

  for (let i = 0; i < numPoints; i++) {
    const datum = data[i];

    //3.68522
    //y: 0-31
    let root = 2.99767;
    let ratio = root / 31;
    let yLoc = i % 32;
    let rateY = root - yLoc * ratio;

    let r = -((rateY - 0.5) ** 3) + rateY ** 2 + (rateY + 0.3) * 2;

    const theta = ((Math.floor(i / 32) % 16) / 16) * Math.PI * 2;
    datum.position.x = r * 12 * Math.cos(theta);
    datum.position.y = (yLoc - 15.5) * 9;
    datum.position.z = -80 + r * 12 * Math.sin(theta);

    datum.rotation.x = (getRandom(-1, 1) * Math.PI) / 140;
    datum.rotation.y = -theta;
    datum.rotation.z = (getRandom(-1, 1) * Math.PI) / 140;
  }
}

export function giwaLayout(data) {
  const numPoints = data.length;

  for (let i = 0; i < numPoints; i++) {
    const datum = data[i];
    let xLoc = (i % 32) - 15.5;
    let zLoc = (Math.floor(i / 32) % 16) - 15;

    datum.position.x =
      xLoc * (10 - (-zLoc) ** 0.1 * 0.2) +
      getRandom(getRandom(-1, 0), getRandom(0, 1));
    datum.position.y =
      -Math.cos(xLoc / 25) * 130 +
      90 +
      (-zLoc) ** 1.1 * 5 +
      getRandom(
        getRandom(0.13 * (zLoc - 2), 0),
        getRandom(0, 0.13 * -(zLoc - 2))
      );
    datum.position.z = -20 - (-zLoc) ** 1.04 * 9;

    datum.rotation.x = (zLoc / 30) * getRandom(0.99, 1.01) + 1 / 2;
    datum.rotation.y = 0;
    datum.rotation.z = (Math.abs(xLoc) ** 1 * (xLoc < 0 ? -1 : 1)) / 30;
  }
}

export function randomLayout(data) {
  const numPoints = data.length;

  for (let i = 0; i < numPoints; i++) {
    const datum = data[i];
    const RANDOM_RANGE = 1000;
    datum.position.x = getRandom(-RANDOM_RANGE, RANDOM_RANGE);
    datum.position.y = getRandom(-RANDOM_RANGE, RANDOM_RANGE);
    datum.position.z = getRandom(-RANDOM_RANGE, RANDOM_RANGE);

    datum.rotation.x = getRandom(0, Math.PI * 2);
    datum.rotation.y = getRandom(0, Math.PI * 2);
    datum.rotation.z = 0;
  }
}
