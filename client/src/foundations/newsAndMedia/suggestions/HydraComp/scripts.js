const getRandom = (a, b) => Math.random() * (b - a) + a;

export const uncovered = (h) => {
  const { src, osc, gradient, shape, voronoi, noise, s0, s1, s2, s3, o0, o1, o2, o3, render } = h;

  h.osc(50, 0.1, 10)
    .color(
      ({ time }) => Math.sin(time * 0.04),
      1,
      ({ time }) => Math.cos(time * 0.07)
    )
    .invert(1)
    .modulate(noise(3, 0.1, 3).diff(noise(10).kaleid(10)))
    .blend(noise(4).diff(noise(10).kaleid(13)))
    .modulate(noise(5).diff(noise(7).kaleid(10)))
    .out();
};

export const diverging = (h) => {
  const { src, osc, gradient, shape, voronoi, noise, s0, s1, s2, s3, o0, o1, o2, o3, render } = h;
  h.noise(3, -0.1, 3)
    .color(30, 1, 2)
    .blend(o0)
    .invert(1)
    .modulate(
      noise(3)
        .kaleid(3)
        .modulate(noise(3).modulate(noise(3).blend(noise(3)), 0.4), 0.3),
      0.1
    )
    .kaleid(3, 1, 1)
    .out();
};

export const breaken = (h) => {
  const { src, osc, gradient, shape, voronoi, noise, s0, s1, s2, s3, o0, o1, o2, o3, render } = h;
  h.noise(3, 0.1, 1)
    .color(30, 1, 0.3)
    .brightness(0.6)
    .modulateKaleid(osc(3, -0.001), 0.003)
    .blend(o0)
    .mask(noise(3, 0.1).kaleid(3).brightness(0.2))
    .blend(o0)
    .modulateKaleid(osc(3, -0.001), 0.003)
    .add(noise(3, -0.1).kaleid(30).color(30, 1, 0.3).brightness(0.2))
    .modulateKaleid(osc(3, -0.001), 0.003)
    .blend(o0);
};

export const rose2 = (h) => {
  const { src, osc, gradient, shape, voronoi, noise, s0, s1, s2, s3, o0, o1, o2, o3, render } = h;
  h.osc().blend(noise(4).kaleid(7)).kaleid(7).blend(noise(4).kaleid(7)).modulate(noise(4).kaleid(7)).add(noise(4).kaleid(7)).out();
};

export const untitled = (h) => {
  const { src, osc, gradient, shape, voronoi, noise, s0, s1, s2, s3, o0, o1, o2, o3, render } = h;
  h.osc()
    .blend(noise(4).kaleid(7))
    .color(2, 0.2, 2)
    .kaleid(7)
    .blend(noise(4).kaleid(13))
    .modulate(noise(4).kaleid(23))
    .modulate(noise(4).modulate(noise(8).invert(1)).kaleid(7))
    .out();
};

export const roseRainbow = (h) => {
  const { src, osc, gradient, shape, voronoi, noise, s0, s1, s2, s3, o0, o1, o2, o3, render } = h;
  h.osc(13, 0.1, 2)
    .rotate(3, 0.2)
    .blend(
      noise(4)
        .blend(noise(4).kaleid(7).blend(noise(4).kaleid(13)))
        .kaleid(7)
        .repeat(3, 3)
        .blend(noise(4).kaleid(7))
    )
    .modulate(noise(4).kaleid(13))
    .out();
};

export const twelveFiftyThree = (h) => {
  const { src, osc, gradient, shape, voronoi, noise, s0, s1, s2, s3, o0, o1, o2, o3, render } = h;
  h.solid(
    ({ time }) => Math.sin(time * 0.4435) * 0.2 + 0.7,
    ({ time }) => Math.cos(time) * 0.3 + 0.6,
    ({ time }) => Math.sin(time * 0.65) * 0.4 + 1,
    1
  )
    .blend(
      noise(2.5, 0.1).mult(
        osc(0.4, 1, 0.5)
          .modulateRepeat(
            osc(0.2, 1, 1).rotate(10, ({ time }) => Math.sin(time * 0.1) * 0.05),
            3,
            3
          )
          .diff(osc(1.5, 0.3, 1).mult(noise().kaleid(100, 20)))
      )
    )

    .out();
};

export const pattern1 = (h) => {
  const { src, osc, gradient, shape, voronoi, noise, s0, s1, s2, s3, o0, o1, o2, o3, render } = h;

  h.osc(13, -0.1, 5)
    .blend(shape(3, 0.1, 0.7).modulate(noise(3).kaleid(30)).color(5, 1, 2))
    .diff(noise(3))
    .kaleid(4)
    .invert(1)
    .modulate(noise(3))
    .diff(shape(3, 0.1, 0.7).repeat(3, 3))
    .kaleid(3)
    .modulate(noise(5))
    .diff(shape(5, 0.1, 0.7))
    .kaleid(4)
    .modulate(noise(2))
    .diff(shape(8, 0.1, 0.5))
    .kaleid(4)
    .out();
};

export const pattern4 = (h) => {
  const { src, osc, gradient, shape, voronoi, noise, s0, s1, s2, s3, o0, o1, o2, o3, render } = h;

  h.osc(15, -0.003, 0.2).saturate(0.3).color(0.7, 0, 0.3).modulate(noise(3, 0.1)).kaleid(3).repeat(5, 5).modulate(noise(2, 0.01)).kaleid(4).repeat(4, 4).out();
};

export const movement = (h) => {
  const { src, osc, gradient, shape, voronoi, noise, s0, s1, s2, s3, o0, o1, o2, o3, render } = h;

  h.osc(30, 0.1, 0.3)
    .color(1, 0.2, 14)
    .add(noise(3))
    .blend(voronoi(3, 0.1, 1).repeat(3, 3))
    .kaleid(10)
    .modulate(noise(3).kaleid(3))
    .blend(
      osc(10, 0.1, 4)
        .modulate(noise(3).modulate(noise(10).kaleid(3)))
        .color(getRandom(0.5, 1.5), 0.2, getRandom(1, 20))
    )
    .out();
};

export const oneFourteen = (h) => {
  const { src, osc, gradient, shape, voronoi, noise, s0, s1, s2, s3, o0, o1, o2, o3, render } = h;
  h.osc(20, 1.3, 0.2).blend(noise().color(30, 0.1, 0.3)).modulateKaleid(osc(3, -0.001), 0.003).add(noise(1, 2, 0.1).brightness(2).kaleid(2)).modulate(noise(3).kaleid(2)).out();
};
