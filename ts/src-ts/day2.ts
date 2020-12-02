interface PasswordPolicy {
  min: number;
  max: number;
  character: string;
  password: string;
}

function toPasswordPolicies(input: Array<string>): Array<PasswordPolicy> {
  const returnValue: Array<PasswordPolicy> = [];
  input.forEach((v) => {
    const data = v.split(' ');
    const min = +data[0].split('-')[0];
    const max = +data[0].split('-')[1];
    const passwordPolicy: PasswordPolicy = {
      min: min,
      max: max,
      character: data[1][0],
      password: data[2],
    };
    returnValue.push(passwordPolicy);
  });

  return returnValue;
}

function day2Part1(input: Array<PasswordPolicy>): number {
  return input.reduce<number>((sum: number, _curr) => {
    const matches = _curr.password.match(new RegExp(_curr.character, 'g')) || [];
    const matchesCount = matches.length;
    if (matchesCount >= _curr.min && matchesCount <= _curr.max) {
      return sum + 1;
    }
    return sum;
  }, 0);
}

function day2Part2(input: Array<PasswordPolicy>): number {
  return input.reduce<number>((sum: number, _curr) => {
    let matchesCount = 0;
    if (_curr.password[_curr.min - 1] === _curr.character) matchesCount += 1;
    if (_curr.password[_curr.max - 1] === _curr.character) matchesCount += 1;
    return matchesCount === 1 ? sum + 1 : sum;
  }, 0);
}

export { day2Part1, day2Part2, toPasswordPolicies };
