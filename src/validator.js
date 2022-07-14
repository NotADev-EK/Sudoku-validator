class Validator {
  static validate(sudoku) {
    const validator = new Validator

    return validator.validate(sudoku)
  }
  valid_row(sudokustr) {
    for (let i = 0; i < sudokustr.length; i += 9) {
      for (let j = i; j < i + 9; j++) {
        let count = 0;
        if (sudokustr[j] < 0 || sudokustr[j] > 9) {
          return -1;
        }
        else if (sudokustr[j] != 0) {
          for (let k = i; k < i + 9; k++) {
            if (sudokustr[j] == sudokustr[k]) count++;
          }
          if (count > 1) return 0;
        }
      }
    }
    return 1;
  }
  valid_col(sudokustr) {
    for (let i = 0; i < 9; i++) {
      for (let j = i; j < sudokustr.length; j += 9) {
        let count = 0;
        if (sudokustr[j] < 0 || sudokustr[j] > 9) {
          return -1;
        }
        else if (sudokustr[j] != 0) {
          for (let k = i; k < sudokustr.length; k += 9) {
            if (sudokustr[j] == sudokustr[k]) count++;
          }
          if (count > 1) return 0;
        }
      }
    }
    return 1;
  }
  valid_subsquares(sudokustr) {
    for (let g = 0; g < sudokustr.length; g += 27) {
      for (let i = g; i < g + 9; i += 3) {
        let str = "";
        for (let j = 0; j < 27; j += 9) {
          for (let k = j; k < j + 3; k++) str += sudokustr[k];
        }
        for (let j = 0; j < 9; j++) {
          let count = 0;
          if (str[j] < 0 || str[j] > 9) {
            return -1;
          }
          else if (str[j] != 0) {
            for (let k = 0; k < 9; k++) {
              if (str[j] == str[k]) count++;
            }
            if (count > 1) return 0;
          }
        }
      }
    }
    return 1;
  }
  valid_incomplete(sudokustr) {
    for (let i = 0; i < sudokustr.length; i++) {
      if (sudokustr[i] == 0) return 1;
    }
    return 0;
  }
  validate(sudoku) {
    let sudokustr = sudoku.replace(/\D/g, ''); //Visi string simboli, kas nav skaitlis, tiks izdzēsti.
    console.log(this.valid_row(sudokustr));
    console.log(this.valid_col(sudokustr));
    if (this.valid_row(sudokustr) < 1 || this.valid_col(sudokustr) < 1 || this.valid_subsquares(sudokustr) < 1) {
      return 'Sudoku is invalid.';
    }
    if (this.valid_incomplete(sudokustr) == 1) return 'Sudoku is valid but incomplete.';
    else return 'Sudoku is valid.';
  }
}

module.exports = Validator
