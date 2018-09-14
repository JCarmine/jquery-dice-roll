$( document ).ready(function() {
  // Bind click handler to button, call the getRandomNumber() function
  // with min and max numbers.
  // Display result in .rollDieResult el.
  // The call drawDie() with result.
  $('.rollDieButton').click(function() {
    const rollDieResult = getRandomNumber(1, 6);
    $('.rollDieResult').text(rollDieResult);
    configureDie(rollDieResult);
  });

  // Call Math.random() which returns a number between 0 and 1
  // Perform operation to ensure that the "max" number can be included in Results
  // Finally call Math.floor() to round down to nearest integer
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Based on the result of the roll, call the faceGenerator() with
  // the number of pips and the face. In the end, call drawDie() to
  // draw the die.
  // ToDo: The values for the left and right faces are hardcoded based
  // on a real die. Much more work will be needed to make these dynamic,
  // and ensure that duplicate numbers, or numbers that would occure
  // on the down facing side of the die aren't displayed.
  function configureDie(pips) {
    let $topFace;
    let $leftFace;
    let $rightFace;

    switch (pips) {
      case 1:
        $topFace = faceGenerator(pips, "Top");
        $leftFace = faceGenerator(5, "Left");
        $rightFace = faceGenerator(4, "Right");
        break;
      case 2:
        $topFace = faceGenerator(pips, "Top");
        $leftFace = faceGenerator(1, "Left");
        $rightFace = faceGenerator(4, "Right");
        break;
      case 3:
        $topFace = faceGenerator(pips, "Top");
        $leftFace = faceGenerator(5, "Left");
        $rightFace = faceGenerator(1, "Right");
        break;
      case 4:
        $topFace = faceGenerator(pips, "Top");
        $leftFace = faceGenerator(1, "Left");
        $rightFace = faceGenerator(5, "Right");
        break;
      case 5:
        $topFace = faceGenerator(pips, "Top");
        $leftFace = faceGenerator(4, "Left");
        $rightFace = faceGenerator(1, "Right");
        break;
      case 6:
        $topFace = faceGenerator(pips, "Top");
        $leftFace = faceGenerator(4, "Left");
        $rightFace = faceGenerator(5, "Right");
        break;
    }
    drawDie($topFace, $leftFace, $rightFace);
  }

  // Create all of the necessary elements and store them as variables.
  // Based on the roll's value, loop as appropriate to generate the
  // correct number of columns and pips for each face.
  function faceGenerator(quantity, face) {
    const $face = $(`<div class="die${face}Face"></div>`);
    const $pipContainer = $(`<div class="face-${quantity}"></div>`);
    const $column1 = $('<div class="column column1"></div>');
    const $column2 = $('<div class="column column2"></div>');
    const $column3 = $('<div class="column column3"></div>');
    const pip = '<div class="pip"></div>';

    switch (quantity) {
      case 4:
        for (let index = 0; index < quantity / 2; index++) {
          $column1.append(pip);
          $column2.append(pip);
        }
        $pipContainer.append($column1).append($column2);
        break;
      case 5:
        for (let index = 0; index < 2; index++) {
          $column1.append(pip);
        }
        for (let index = 0; index < 1; index++) {
          $column2.append(pip);
        }
        for (let index = 0; index < 2; index++) {
          $column3.append(pip);
        }
        $pipContainer.append($column1).append($column2).append($column3);
        break;
      case 6:
        for (let index = 0; index < (quantity / 2); index++) {
          $column1.append(pip);
          $column2.append(pip);
        }
        $pipContainer.append($column1).append($column2);
        break;
      default:
        for (let index = 0; index < quantity; index++) {
          $pipContainer.append(pip);
        }
    }
    $face.append($pipContainer);
    return $face;
  }

  // Empty the root element to clear previous rolls.
  // Append all 3 faces to the root element.
  function drawDie(top, left, right) {
    $('.die').empty();
    $('.die').append(top).append(left).append(right);
  }

});
