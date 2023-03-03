
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { CounterComponentForLab } from "./counter.component";

describe('Counter Component :', () => {
  let fixture:ComponentFixture<CounterComponentForLab>,component:CounterComponentForLab

  beforeEach((() => {
    
    TestBed.configureTestingModule({
        declarations:[CounterComponentForLab],
        schemas:[NO_ERRORS_SCHEMA]
    })
    fixture= TestBed.createComponent(CounterComponentForLab)
    component=fixture.componentInstance
    
  }));
  it("when click btn fires increse fun should the interpolation detect the change",()=>{
   
    let countcomponent =  component.counter;
       
    let count = fixture.debugElement.query(By.css(".testcount")).nativeElement
 
    let btn = fixture.debugElement.queryAll(By.css("button"))[0]
  
    btn.triggerEventHandler("click")
    
    fixture.detectChanges()
    expect(component.counter).toBe(countcomponent+1)
    expect((count.textContent).toString()).toBe(`${countcomponent+1}`);

  })
  it("when click btn fires decrease fun should the interpolation detect the change",()=>{
   
    let countcomponent =  component.counter;
       
    let count = fixture.debugElement.query(By.css(".testcount")).nativeElement
      
 
    let btn = fixture.debugElement.queryAll(By.css("button"))[1]
    btn.triggerEventHandler("click")
    fixture.detectChanges()
   
    expect(component.counter).toBe(countcomponent-1)
    expect((count.textContent).toString()).toBe(`${countcomponent-1}`);

  })
});
