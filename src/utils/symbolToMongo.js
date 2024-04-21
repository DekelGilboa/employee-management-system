exports.symbolToMongoMap = {
  '=': '$eq',
  '!=': '$ne',
  '>': '$gt',
  '>=': '$gte',
  '<': '$lt',
  '<=': '$lte'
};

exports.regEx = /\b(<|>|>=|=|<|<=)\b/g;
