interface PolicyByr {
  min: number;
  max: number;
}
interface PolicyIyr {
  min: number;
  max: number;
}
interface PolicyEyr {
  min: number;
  max: number;
}
interface PolicyHgtCm {
  min: number;
  max: number;
}
interface PolicyHgtIn {
  min: number;
  max: number;
}
interface PolicyHcl {
  nrChars: number;
}
interface PolicyEcl {
  color: string[];
}
interface PolicyEcl {
  color: string[];
}
interface PolicyPid {
  nrDigits: number;
}
interface Policy {
  byr: PolicyByr;
  iyr: PolicyIyr;
  eyr: PolicyEyr;
  hgtCm: PolicyHgtCm;
  hgtIn: PolicyHgtIn;
  hcl: PolicyHcl;
  ecl: PolicyEcl;
  pid: PolicyPid;
}

const passportPolicy = {
  byr: { min: 1920, max: 2002 },
  iyr: { min: 2010, max: 2020 },
  eyr: { min: 2020, max: 2030 },
  hgtCm: { min: 150, max: 193 },
  hgtIn: { min: 59, max: 76 },
  hcl: { nrChars: 6 },
  ecl: { color: ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'] },
  pid: { nrDigits: 9 },
};

class Passport {
  byr: number; // (Birth Year) - four digits; at least 1920 and at most 2002.
  iyr: number; // (Issue Year) - four digits; at least 2010 and at most 2020.
  eyr: number; // (Expiration Year) - four digits; at least 2020 and at most 2030.
  hgt: number; // (Height) - a number followed by either cm or in:
  hgtType: string;
  // If cm, the number must be at least 150 and at most 193.
  // If in, the number must be at least 59 and at most 76.
  hcl: string; // (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
  ecl: string; // (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
  pid: string; // (Passport ID) - a nine-digit number, including leading zeroes.
  cid: number; // (Country ID) - ignored, missing or not.
  constructor(parameters: string[]) {
    parameters.forEach((v) => {
      const fields = v.split(' ');
      fields.forEach((field) => {
        const fieldKey = field.split(':')[0];
        const fieldValue = field.split(':')[1];
        switch (fieldKey) {
          case 'byr':
            this.byr = +fieldValue;
            break;
          case 'iyr':
            this.iyr = +fieldValue;
            break;
          case 'eyr':
            this.eyr = +fieldValue;
            break;
          case 'hgt':
            this.hgtType = fieldValue.slice(-2);
            if (this.hgtType === 'cm' || this.hgtType === 'in') {
              this.hgt = +fieldValue.substr(0, fieldValue.length - 2);
            }
            break;
          case 'hcl':
            this.hcl = fieldValue;
            break;
          case 'ecl':
            this.ecl = fieldValue;
            break;
          case 'pid':
            this.pid = fieldValue;
            break;
          case 'cid':
            this.cid = +fieldValue;
            break;
        }
      });
    });
  }
  valid(policy: Policy): boolean {
    const byrValid = policy.byr.min <= this.byr && this.byr <= policy.byr.max;
    const iyrValid = policy.iyr.min <= this.iyr && this.iyr <= policy.iyr.max;
    const eyrValid = policy.eyr.min <= this.eyr && this.eyr <= policy.eyr.max;

    const hgtValid =
      this.hgtType === 'cm'
        ? policy.hgtCm.min <= this.hgt && this.hgt <= policy.hgtCm.max
        : this.hgtType === 'in'
        ? policy.hgtIn.min <= this.hgt && this.hgt <= policy.hgtIn.max
        : false;
    const hclValidateRegexp = /^#[a-f0-9]{6}$/;
    const hclValidate = hclValidateRegexp.test(this.hcl);
    const eclValidate = policy.ecl.color.includes(this.ecl);
    const pidValidateRegexp = new RegExp(`^[0-9]{${policy.pid.nrDigits}}$`);
    const pidValidate = pidValidateRegexp.test(this.pid);
    return byrValid && eyrValid && iyrValid && hgtValid && hclValidate && eclValidate && pidValidate;
  }
}

function parseBatchFile(batchFile: Array<string>): string[][] {
  const passports: string[][] = [];
  const passport: string[] = [];
  batchFile.forEach((v, idx, arr) => {
    if (v === '') {
      passports.push([...passport]);
      passport.length = 0;
    } else {
      passport.push(v);
    }
    if (idx === arr.length - 1) passports.push([...passport]);
  });
  return passports;
}

function day4Part1(passports: string[][]): number {
  const validPasswordFields = 8;
  let sumValidPassports = 0;
  passports.forEach((v) => {
    let fieldSum = 0;
    let seenCid = false;
    v.forEach((l) => {
      const fields = l.split(' ');
      fieldSum += fields.length;
      fields.forEach((j) => {
        if (j.split(':')[0] === 'cid') {
          seenCid = true;
        }
      });
    });
    seenCid
      ? fieldSum === validPasswordFields
        ? sumValidPassports++
        : sumValidPassports
      : fieldSum === validPasswordFields - 1
      ? sumValidPassports++
      : sumValidPassports;
    seenCid = false;
    fieldSum = 0;
  });
  return sumValidPassports;
}

function day4Part2(passports: string[][]): number {
  const validPassports: Passport[] = [];
  passports.forEach((v) => {
    const passport = new Passport(v);
    if (passport.valid(passportPolicy)) {
      validPassports.push(passport);
    }
  });
  return validPassports.length;
}

export { day4Part1, day4Part2, parseBatchFile, passportPolicy, Passport };
