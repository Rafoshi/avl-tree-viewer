let coords1: Coord = circle(ctx, centerX, centerY, 0, "50");

//2 linha
strokes(ctx, centerX, centerY, false, 170);
strokes(ctx, centerX, centerY, true, -170);
let coords2: Coord = circle(ctx, coords1.x + 170, coords1.y, 2, "90");
let coords3: Coord = circle(ctx, coords1.x - 170, coords1.y, 1, "40");

//3 linha
strokes(ctx, coords2.x, coords2.y, false, 50);
strokes(ctx, coords2.x, coords2.y, true, -50);
strokes(ctx, coords3.x, coords2.y, false, 50);
strokes(ctx, coords3.x, coords3.y, true, -50);

let coords4 = circle(ctx, coords2.x + 50, coords2.y, 2, "100");
let coords5 = circle(ctx, coords2.x - 50, coords2.y, 1, "60");
let coords6 = circle(ctx, coords3.x + 50, coords2.y, 2, "85");
let coords7 = circle(ctx, coords3.x - 50, coords2.y, 1, "75");

//4 linha
strokes(ctx, coords4.x, coords4.y, false);
strokes(ctx, coords4.x, coords4.y, true);
strokes(ctx, coords5.x, coords5.y, false);
strokes(ctx, coords5.x, coords5.y, true);
strokes(ctx, coords6.x, coords6.y, false);
strokes(ctx, coords6.x, coords6.y, true);
strokes(ctx, coords7.x, coords7.y, false);
strokes(ctx, coords7.x, coords7.y, true);

let coords8 = circle(ctx, coords4.x, coords4.y, 2, "50");
let coords9 = circle(ctx, coords4.x, coords4.y, 1, "50");
let coords10 = circle(ctx, coords5.x, coords5.y, 2, "65");
let coords11 = circle(ctx, coords5.x, coords5.y, 1, "55");
let coords12 = circle(ctx, coords6.x, coords6.y, 2, "95");
let coords13 = circle(ctx, coords6.x, coords6.y, 1, "85");
let coords14 = circle(ctx, coords7.x, coords7.y, 2, "50");
let coords15 = circle(ctx, coords7.x, coords7.y, 1, "90");