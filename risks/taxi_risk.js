const objectFromCamunda = null

//категории риска
const highRisk = ''
const middleRisk = ''
const lowRisk = ''

let riskResult
let controlEvents

if (riskResult === highRisk) {
  controlEvents = 1 // раз в 2 года
}
if (riskResult === middleRisk) {
  controlEvents = 1 // раз в 3 года
}
if (riskResult === lowRisk) {
  controlEvents = 1 // не проводятся
}

//группы тяжести
const severity_1 = 1
const severity_2 = 2
const severity_3 = 3

//показатель риска тяжести
let m1 // дтп со смертью из-за тяжкого/среднего вреда
let m2 // дтп без смерти, но тяжкий/средний вред

const Rt = 20 * m1 + 5 * m2 // показатель риска тяжести

//группа вероятности
const probability_group_1 = 1
const probability_group_2 = 2
const probability_group_3 = 3

//показатель риска вероятности
let As // кол-во авто на начало года
let Af // кол-во авто на конец года

let A = (As + Af) / 2 // среднее кол-во авто во владении
let N1 // административные нарушения 9.13, 11.14.1, 12.31.1 и т.д.
let N2 // административные нарушения часть 2 статьи 14.1

const Rv = 5 * (N1 / A) + 5 * N2 // показатель риска вероятности

//группа добросовестности
const integrity_group_1 = 1
const integrity_group_2 = 2
const integrity_group_3 = 3

//показатель добросовестности
let P1 // сведения о меропр-ях по снижению риска
let P2 // предоставление доступа к своей инфе
let P3 // сведения о добровольном страхавании

const Rd = 6 * (3 - P1 - P2 - P3) // показатель добросовестности
// если есть доки, то P1/P2/P3 присваивать 0
//  если нет доков, то P1/P2/P3 присваивать 0

// 2 и более док подтверждения смерти из-за тяжкого/среднего => 20б

// наличие решения суда о запрете деятельности => 15б

// 3 и более разрешений на перевозку пассажиров => 10б

// 3 и более обращений граждан по вопросам нарушения => 5б

// 2 и более анулировании разрешений на перевозку пассажирова => 4б