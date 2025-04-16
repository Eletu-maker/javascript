const credit_card = require("./card_validator_functions")

test("test the first sum",()=>{
    const card_number = new  credit_card("4388576018402626");
    const first_sum = card_number.getFirstSum();
    expect(first_sum).toBe(37);

})


test("test the second sum", ()=>{
    const card_number = new  credit_card("4388576018402626");
    const second_sum = card_number.getSecondSum();
    expect(second_sum).toBe(38);
})


test("test to check invalid", ()=>{
    const card_number = new  credit_card("4388576018402626");
    const check = card_number.checkValid();
    expect(check).toBe("invalid");
})

test("test to check valid", ()=>{
    const card_number = new  credit_card("4388576018410707");
    const check = card_number.checkValid();
    expect(check).toBe("valid");
})

test("test to check the type of card",()=>{
    const card_number = new  credit_card("4388576018410707");
    const type = card_number.checkType();
    expect(type).toBe("Visa Cards");
})