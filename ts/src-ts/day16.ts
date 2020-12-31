interface Range {
  min: number;
  max: number;
}

interface Rule {
  name: string;
  ranges: Range[];
}

interface Parsedinput {
  rules: Rule[];
  myTicket: number[];
  nearbyTickets: number[][];
}

interface invalidTicketResult {
  valid: boolean;
  invalidValues: number[];
}

function parseInput(input: string): Parsedinput {
  const myTicket: number[] = [];
  const nearbyTickets: number[][] = [];
  const [rulesInput, myTicketInput, nearbyTicketsInput] = input.split('\n\n');
  const rules: Rule[] = rulesInput.split('\n').map((encode) => {
    const [name, rangesEncoded] = encode.split(': ');
    const ranges = rangesEncoded.split(' or ').map((rangesEncoded) => {
      const [min, max] = rangesEncoded.split('-');
      return {
        min: +min,
        max: +max,
      };
    });
    return {
      name,
      ranges,
    };
  });

  myTicketInput
    .split('\n')[1]
    .split(',')
    .forEach((v) => myTicket.push(+v));
  nearbyTicketsInput.split('\n').forEach((v, i) => {
    if (i > 0) {
      const array: number[] = [];
      v.split(',').forEach((j) => array.push(+j));
      nearbyTickets.push(array);
    }
  });
  return {
    rules: rules,
    myTicket: myTicket,
    nearbyTickets: nearbyTickets,
  };
}

function day16Part1(input: Parsedinput): number {
  const invalidTickets = input.nearbyTickets
    .map((ticket) => {
      const result: invalidTicketResult = {
        valid: true,
        invalidValues: [],
      };

      result.invalidValues = ticket.filter((value) => {
        const validRules = input.rules.filter((rule) => {
          const validRanges = rule.ranges.filter((range) => {
            return range.min <= value && value <= range.max;
          });
          return validRanges.length;
        });
        return !validRules.length;
      });

      result.valid = !result.invalidValues.length;
      return result;
    })
    .filter((ticket) => {
      return !ticket.valid;
    });
  return invalidTickets.reduce((sum, invalidTicket) => {
    return sum + invalidTicket.invalidValues.reduce((p, v) => p + v);
  }, 0);
}

export { day16Part1, parseInput };
