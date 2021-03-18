export class Matrix {
  constructor(matrix) {
    this.columns = [];
    this.rows = matrix.split(/\n/).map((row) =>
      row.match(/\d+/g).map((element, key) => {
        this.columns[key]
          ? this.columns[key].push(Number(element))
          : this.columns.push([Number(element)]);
        return Number(element);
      })
    );
  }
}
