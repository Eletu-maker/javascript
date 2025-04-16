const Menstrual_cycle = require('./menstrual_cycle'); 

test("test next period", () => {
  const cycle = new Menstrual_cycle('2025-04-01', 28, 5);
  const nextDate = cycle.nextPeriodDate();
  expect(nextDate).toBe('2025-04-29');
});


test("test next ovulation date", () => {
    const cycle = new Menstrual_cycle('2025-04-01', 28, 5);
    const nextDate = cycle.getOvulationDate();
    expect(nextDate).toBe('2025-05-13');
  });

  test("test days of fertility", () => {
    const cycle = new Menstrual_cycle('2025-04-01', 28, 5);
    const nextDate = cycle.daysToFertility();
    expect(nextDate).toBe('from 2025-05-06 to 2025-05-13');
  });



  
  test("test days of flow", () => {
    const cycle = new Menstrual_cycle('2025-04-01', 28, 5);
    const nextDate = cycle.saveDays();
    expect(nextDate).toBe('from 2025-05-14 to 2025-05-27');
  });

