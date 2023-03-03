import { SquarePipe } from "./square.pipe"

describe("square pipe:",()=>{

    let pipe= new SquarePipe()

    it("Retrun Square Number :",()=>{

        expect(pipe.transform(5)).toBe(25);
    })
    it("Retrun Error If Not A Number :",()=>{

        expect(pipe.transform("t")).toBeNaN;
    })
})