import { TestBed } from "@angular/core/testing";
import { HeroServiceForLab } from "./hero.service";
import {HttpClientTestingModule ,HttpTestingController } from "@angular/common/http/testing"

describe("Hero Service:",()=>{
    

    let service:HeroServiceForLab,httpServiceControler:HttpTestingController 
    beforeEach((() => {
    
        TestBed.configureTestingModule({
          providers:[HeroServiceForLab],
        imports:[HttpClientTestingModule]
        })
       service= TestBed.inject(HeroServiceForLab)
       httpServiceControler= TestBed.inject(HttpTestingController )
      }));
    it("GET Heroes : ",()=>{

       service.getHeroes().subscribe({next:(data)=>{
        expect(data.length).toBeGreaterThan(0);
        
    },error:()=>{}})
   let req= httpServiceControler.expectOne("api/heroes")
  
    httpServiceControler.verify()

    // assert
    expect(req.request.method).toBe("GET")
        
    })
})