// 18674095620 => 186****5620
// 027-83828485 => 027-****8485
// 0712-8273718 => 0712-****718

function anonymousMobile(string) {
  const regexp = /((?:\d\d\d)|-)\d\d\d\d/;
  // console.log(regexp.exec(string))
  return string.replace(regexp, '$1****');
}

console.log(
  anonymousMobile('18674095620'),
  anonymousMobile('027-83828485'),
  anonymousMobile('0712-8273718')
);
